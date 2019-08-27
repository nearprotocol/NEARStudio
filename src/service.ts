/* Copyright 2018 Mozilla Foundation
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { File, Project, Directory, FileType, Problem, isBinaryFileType, fileTypeFromFileName, IStatusProvider } from "./models";
import { padLeft, padRight, isBranch, toAddress, decodeRestrictedBase64ToBytes, base64EncodeBytes } from "./util";
import { assert } from "./util";
import { gaEvent } from "./utils/ga";
import { WorkerCommand, IWorkerResponse } from "./message";
import { getCurrentRunnerInfo } from "./utils/taskRunner";
import { createCompilerService, Language } from "./compilerServices";
import getConfig from "./config";
import { connect } from "nearlib";

declare var capstone: {
  ARCH_X86: any;
  MODE_64: any;
  Cs: any;
};

declare var Module: ({ }) => any;

declare var showdown: {
  Converter: any;
  setFlavor: Function;
};

export interface IFiddleFile {
  name: string;
  data?: string;
  type?: "binary" | "text";
}

export interface ICreateFiddleRequest {
  files: IFiddleFile [];
}

export interface ILoadFiddleResponse {
  files: IFiddleFile [];
  id: string;
  message: string;
  success: boolean;
  editable: boolean;
}

export { Language } from "./compilerServices";

function getProjectFilePath(file: File): string {
  const project = file.getProject();
  return file.getPath(project);
}

export class ServiceWorker {
  worker: Worker;
  workerCallbacks: Array<{fn: (data: any) => void, ex: (err: Error) => void}> = [];
  nextId = 0;
  private getNextId() {
    return String(this.nextId++);
  }
  constructor() {
    this.worker = new Worker("dist/worker.bundle.js");
    this.worker.addEventListener("message", (e: {data: IWorkerResponse}) => {
      if (!e.data.id) {
        return;
      }
      const cb = this.workerCallbacks[e.data.id];
      if (e.data.success) {
        cb.fn(e.data.payload);
      } else {
        const error = Object.assign(
          Object.create(Error.prototype),
          e.data.payload,
        );
        cb.ex(error);
      }
      this.workerCallbacks[e.data.id] = null;
    });
  }

  setWorkerCallback(id: string, fn: (e: any) => void, ex?: (e: any) => void) {
    assert(!this.workerCallbacks[id as any]);
    this.workerCallbacks[id as any] = {fn, ex};
  }

  async postMessage(command: WorkerCommand, payload: any): Promise<any> {
    return new Promise((resolve, reject) => {
      const id = this.getNextId();
      this.setWorkerCallback(id, (data: any) => {
        resolve(data);
      }, (err: Error) => {
        reject(err);
      });
      this.worker.postMessage({
        id, command, payload
      }, undefined);
    });
  }

  async optimizeWasmWithBinaryen(data: ArrayBuffer): Promise<ArrayBuffer> {
    return await this.postMessage(WorkerCommand.OptimizeWasmWithBinaryen, data);
  }

  async validateWasmWithBinaryen(data: ArrayBuffer): Promise<number> {
    return await this.postMessage(WorkerCommand.ValidateWasmWithBinaryen, data);
  }

  async createWasmCallGraphWithBinaryen(data: ArrayBuffer): Promise<string> {
    return await this.postMessage(WorkerCommand.CreateWasmCallGraphWithBinaryen, data);
  }

  async convertWasmToAsmWithBinaryen(data: ArrayBuffer): Promise<string> {
    return await this.postMessage(WorkerCommand.ConvertWasmToAsmWithBinaryen, data);
  }

  async disassembleWasmWithBinaryen(data: ArrayBuffer): Promise<string> {
    return await this.postMessage(WorkerCommand.DisassembleWasmWithBinaryen, data);
  }

  async assembleWatWithBinaryen(data: string): Promise<ArrayBuffer> {
    return await this.postMessage(WorkerCommand.AssembleWatWithBinaryen, data);
  }

  async disassembleWasmWithWabt(data: ArrayBuffer): Promise<string> {
    return await this.postMessage(WorkerCommand.DisassembleWasmWithWabt, data);
  }

  async assembleWatWithWabt(data: string): Promise<ArrayBuffer> {
    return await this.postMessage(WorkerCommand.AssembleWatWithWabt, data);
  }

  async twiggyWasm(data: ArrayBuffer): Promise<string> {
    return await this.postMessage(WorkerCommand.TwiggyWasm, data);
  }
}

export class Service {
  private static worker = new ServiceWorker();

  static getMarkers(response: string): monaco.editor.IMarkerData[] {
    // Parse and annotate errors if compilation fails.
    const annotations: monaco.editor.IMarkerData[] = [];
    if (response.indexOf("(module") !== 0) {
      const re1 = /^.*?:(\d+?):(\d+?):\s(.*)$/gm;
      let m: any;
      // Single position.
      while ((m = re1.exec(response)) !== null) {
        if (m.index === re1.lastIndex) {
          re1.lastIndex++;
        }
        const startLineNumber = parseInt(m[1], 10);
        const startColumn = parseInt(m[2], 10);
        const message = m[3];
        let severity = monaco.MarkerSeverity.Info;
        if (message.indexOf("error") >= 0) {
          severity = monaco.MarkerSeverity.Error;
        } else if (message.indexOf("warning") >= 0) {
          severity = monaco.MarkerSeverity.Warning;
        }
        annotations.push({
          severity, message,
          startLineNumber: startLineNumber,
          startColumn: startColumn,
          endLineNumber: startLineNumber, endColumn: startColumn
        });
      }
      // Range. This is generated via the -diagnostics-print-source-range-info
      // clang flag.
      const re2 = /^.*?:\d+?:\d+?:\{(\d+?):(\d+?)-(\d+?):(\d+?)\}:\s(.*)$/gm;
      while ((m = re2.exec(response)) !== null) {
        if (m.index === re2.lastIndex) {
          re2.lastIndex++;
        }
        const message = m[5];
        let severity = monaco.MarkerSeverity.Info;
        if (message.indexOf("error") >= 0) {
          severity = monaco.MarkerSeverity.Error;
        } else if (message.indexOf("warning") >= 0) {
          severity = monaco.MarkerSeverity.Warning;
        }
        annotations.push({
          severity, message,
          startLineNumber: parseInt(m[1], 10), startColumn: parseInt(m[2], 10),
          endLineNumber: parseInt(m[3], 10), endColumn: parseInt(m[4], 10)
        });
      }
    }
    return annotations;
  }

  static async compileFiles(files: File[], from: Language, to: Language, options = ""): Promise<{ [name: string]: (string|ArrayBuffer); }> {
    gaEvent("compile", "Service", `${from}->${to}`);

    const service = await createCompilerService(from, to);

    const fileNameMap: {[name: string]: File} = files.reduce((acc: any, f: File) => {
      acc[getProjectFilePath(f)] = f;
      return acc;
    }, {} as any);

    const input = {
      files: files.reduce((acc: any, f: File) => {
        acc[getProjectFilePath(f)] = {
          content: f.getData(),
        };
        return acc;
      }, {} as any),
      options,
    };
    const result = await service.compile(input);

    for (const file of files) {
      file.setProblems([]);
    }

    for (const [ name, item ] of Object.entries(result.items)) {
      const { fileRef, console } = item;
      if (!fileRef || !console) {
        continue;
      }
      const file = fileNameMap[fileRef];
      if (!file) {
        continue;
      }
      const markers = Service.getMarkers(console);
      if (markers.length > 0) {
        monaco.editor.setModelMarkers(file.buffer, "compiler", markers);
        file.setProblems(markers.map(marker => {
          return Problem.fromMarker(file, marker);
        }));
      }
    }

    if (!result.success) {
      throw new Error(result.console);
    }

    const outputFiles: any = {};
    for (const [ name, item ] of Object.entries(result.items)) {
      const { content } = item;
      if (content) {
        outputFiles[name] = content;
      }
    }
    return outputFiles;
  }

  static async compileFile(file: File, from: Language, to: Language, options = ""): Promise<any> {
    const result = await Service.compileFileWithBindings(file, from, to, options);
    return result.wasm;
  }

  static async compileFileWithBindings(file: File, from: Language, to: Language, options = ""): Promise<any> {
    if (to !== Language.Wasm) {
      throw new Error(`Only wasm target is supported, but "${to}" was found`);
    }
    const result = await Service.compileFiles([file], from, to, options);
    const expectedOutputFilename = "a.wasm";
    let output: any = {
      wasm: result[expectedOutputFilename],
    };
    const expectedWasmBindgenJsFilename = "wasm_bindgen.js";
    if (result[expectedWasmBindgenJsFilename]) {
      output = {
        ...output,
        wasmBindgenJs: result[expectedWasmBindgenJsFilename],
      };
    }
    return output;
  }

  static async disassembleWasm(buffer: ArrayBuffer, status: IStatusProvider): Promise<string> {
    gaEvent("disassemble", "Service", "wabt");
    status && status.push("Disassembling with Wabt");
    const result = await this.worker.disassembleWasmWithWabt(buffer);
    status && status.pop();
    return result;
  }

  static async disassembleWasmWithWabt(file: File, status?: IStatusProvider) {
    const result = await Service.disassembleWasm(file.getData() as ArrayBuffer, status);
    const output = file.parent.newFile(file.name + ".wat", FileType.Wat);
    output.description = "Disassembled from " + file.name + " using Wabt.";
    output.setData(result);
  }

  static async assembleWat(wat: string, status?: IStatusProvider): Promise<ArrayBuffer> {
    gaEvent("assemble", "Service", "wabt");
    status && status.push("Assembling Wat with Wabt");
    let result = null;
    try {
      result = await this.worker.assembleWatWithWabt(wat);
    } catch (e) {
      throw e;
    } finally {
      status && status.pop();
    }
    return result;
  }

  static async assembleWatWithWabt(file: File, status?: IStatusProvider) {
    const result = await Service.assembleWat(file.getData() as string, status);
    const output = file.parent.newFile(file.name + ".wasm", FileType.Wasm);
    output.description = "Assembled from " + file.name + " using Wabt.";
    output.setData(result);
  }

  static async sendJson(method: string, url: string, json: object): Promise<any> {
    const savedCookiesJson = window.localStorage.getItem('fiddle-cookies');
    const cookies = savedCookiesJson ? JSON.parse(savedCookiesJson) : {};
    const headers = new Headers({ "Content-Type": "application/json; charset=utf-8", ...cookies });
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(json),
      headers
    });
    if (!response.ok) {
      throw new Error(`${response.status}: ${await response.text()}`);
    }
    const setCookies = response.headers.get('Set-Cookie');
    if (setCookies) {
      window.localStorage.setItem('fiddle-cookies', JSON.stringify(setCookies));
    }
    if (response.status === 204) {
      // No Content
      return null;
    }
    return await response.json();
  }

  static postJson(url: string, json: object): Promise<any> {
    return this.sendJson("POST", url, json);
  }

  static patchJson(url: string, json: object): Promise<any> {
    return this.sendJson("PATCH", url, json);
  }

  static async getJson(url: string): Promise<any> {
    const response = await fetch(url, {
      credentials: "include",
      headers: new Headers({ "Content-Type": "application/json; charset=utf-8" })
    });
    if (!response.ok) {
      throw new Error(`${response.status}: ${await response.text()}`);
    }
    return await response.json();
  }

  static async createGist(json: object): Promise<string> {
    const url = "https://api.github.com/gists";
    return (await this.postJson(url, json)).html_url;
  }

  static async loadJSON(uri: string): Promise<ILoadFiddleResponse> {
    const config = await getConfig();
    const url = config.fiddle + "/fiddle/" + uri;
    return await this.getJson(url);
  }

  static async saveJSON(json: ICreateFiddleRequest, uri: string): Promise<string> {
    const update = !!uri;
    if (update) {
      throw new Error("NYI");
    } else {
      const config = await getConfig();
      const response = await this.postJson(config.fiddle + "/fiddle", json);
      let jsonURI = response.id;
      jsonURI = jsonURI.substring(jsonURI.lastIndexOf("/") + 1);
      return jsonURI;
    }
  }

  static async deployContract(contractName: string, file: File, status?: IStatusProvider) {
    gaEvent("deployContract", "Service", "wabt");
    const buffer = file.getData() as ArrayBuffer;
    // TODO: Remove ugly hack with window
    const app = (window as any).app;
    try {
      status && status.push("Deploying contract");
      const config = await getConfig();
      const near = await connect({
        networkId: "default",
        nodeUrl: config.nodeUrl,
        deps: { keyStore: app.state.keyStore }
      });
      await near.deployContract(contractName, new Uint8Array(buffer));
    } finally {
      status && status.pop();
    }
  }

  static async createAccount(newAccountId: string, newAccountPublicKey: string, status?: IStatusProvider) {
    gaEvent("createAccount", "Service", "wabt");
    try {
      status && status.push("Creating new dev account (this is not mainnet!)");
      const config = await getConfig();
      return await this.postJson(`${config.contractHelper}/account`, {
        newAccountId: newAccountId,
        newAccountPublicKey: newAccountPublicKey
      });
    } finally {
      status && status.pop();
    }
  }

  static async saveFile(file: File, fiddleName: string): Promise<void> {
    const json = {
      files: [this.fileAsJson(file)]
    };
    const config = await getConfig();
    await this.patchJson(`${config.fiddle}/fiddle/${fiddleName}`, json);
  }

  static parseFiddleURI(): string {
    let uri = window.location.search.substring(1);
    if (uri) {
      const i = uri.indexOf("/");
      if (i > 0) {
        uri = uri.substring(0, i);
      }
    }
    return uri;
  }

  static async exportToGist(content: File, uri?: string): Promise<string> {
    gaEvent("export", "Service", "gist");
    const files: any = {};
    function serialize(file: File) {
      if (file instanceof Directory) {
        file.mapEachFile((file: File) => serialize(file), true);
      } else {
        files[file.name] = {content: file.data};
      }
    }
    serialize(content);
    const json: any = { description: "source: https://studio.nearprotocol.com", public: true, files};
    if (uri !== undefined) {
      json["description"] = json["description"] + `/?f=${uri}`;
    }
    return await this.createGist(json);
  }

  static fileAsJson(f: File): any {
    let data: string;
    let type: "binary" | "text";
    if (isBinaryFileType(f.type)) {
      data = base64EncodeBytes(new Uint8Array(f.data as ArrayBuffer));
      type = "binary";
    } else {
      data = f.data as string;
      type = "text";
    }
    const file = {
      name: f.getPath(f.getProject()),
      data,
      type
    };
    return file;
  }

  static async saveProject(project: Project, openedFiles: string[][], uri?: string): Promise<string> {
    const files: IFiddleFile [] = [];
    project.forEachFile((f: File) => {
      files.push(this.fileAsJson(f));
    }, true, true);
    return await this.saveJSON({
      files
    }, uri);
  }

  static async loadFilesIntoProject(files: IFiddleFile[], project: Project, base: URL = null): Promise<any> {
    await Promise.all(files.map(async f => {
      const type = fileTypeFromFileName(f.name);
      const file = project.newFile(f.name, type, false);
      let data: string | ArrayBuffer;
      if (f.data != null) {
        if (f.type === "binary") {
          data = decodeRestrictedBase64ToBytes(f.data).buffer as ArrayBuffer;
        } else {
          data = f.data;
        }
      } else {
        const request = await fetch(new URL(f.name, base).toString());
        if (f.type === "binary") {
          data = await request.arrayBuffer();
        } else {
          data = await request.text();
        }
      }
      file.setData(data);
    }));
  }

  static lazyLoad(uri: string, status?: IStatusProvider): Promise<any> {
    return new Promise((resolve, reject) => {
      status && status.push("Loading " + uri);
      const self = this;
      const d = window.document;
      const b = d.body;
      const e = d.createElement("script");
      e.async = true;
      e.src = uri;
      b.appendChild(e);
      e.onload = function() {
        status && status.pop();
        resolve(this);
      };
      // TODO: What about fail?
    });
  }

  static async optimizeWasmWithBinaryen(file: File, status?: IStatusProvider) {
    assert(this.worker);
    gaEvent("optimize", "Service", "binaryen");
    let data = file.getData() as ArrayBuffer;
    status && status.push("Optimizing with Binaryen");
    data = await this.worker.optimizeWasmWithBinaryen(data);
    status && status.pop();
    file.setData(data);
    file.buffer.setValue(await Service.disassembleWasm(data, status));
  }

  static async validateWasmWithBinaryen(file: File, status?: IStatusProvider): Promise<boolean> {
    gaEvent("validate", "Service", "binaryen");
    const data = file.getData() as ArrayBuffer;
    status && status.push("Validating with Binaryen");
    const result = await this.worker.validateWasmWithBinaryen(data);
    status && status.pop();
    return !!result;
  }

  static async getWasmCallGraphWithBinaryen(file: File, status?: IStatusProvider) {
    gaEvent("call-graph", "Service", "binaryen");
    const data = file.getData() as ArrayBuffer;
    status && status.push("Creating Call Graph with Binaryen");
    const result = await this.worker.createWasmCallGraphWithBinaryen(data);
    status && status.pop();
    const output = file.parent.newFile(file.name + ".dot", FileType.DOT);
    output.description = "Call graph created from " + file.name + " using Binaryen's print-call-graph pass.";
    output.setData(result);
  }

  static async disassembleWasmWithBinaryen(file: File, status?: IStatusProvider) {
    gaEvent("disassemble", "Service", "binaryen");
    const data = file.getData() as ArrayBuffer;
    status && status.push("Disassembling with Binaryen");
    const result = await this.worker.disassembleWasmWithBinaryen(data);
    status && status.pop();
    const output = file.parent.newFile(file.name + ".wat", FileType.Wat);
    output.description = "Disassembled from " + file.name + " using Binaryen.";
    output.setData(result);
  }

  static async convertWasmToAsmWithBinaryen(file: File, status?: IStatusProvider) {
    gaEvent("asm.js", "Service", "binaryen");
    const data = file.getData() as ArrayBuffer;
    status && status.push("Converting to asm.js with Binaryen");
    const result = await this.worker.convertWasmToAsmWithBinaryen(data);
    status && status.pop();
    const output = file.parent.newFile(file.name + ".asm.js", FileType.JavaScript);
    output.description = "Converted from " + file.name + " using Binaryen.";
    output.setData(result);
  }

  static async assembleWatWithBinaryen(file: File, status?: IStatusProvider) {
    gaEvent("assemble", "Service", "binaryen");
    const data = file.getData() as string;
    status && status.push("Assembling with Binaryen");
    const result = await this.worker.assembleWatWithBinaryen(data);
    status && status.pop();
    const output = file.parent.newFile(file.name + ".wasm", FileType.Wasm);
    output.description = "Converted from " + file.name + " using Binaryen.";
    output.setData(result);
  }

  static downloadLink: HTMLAnchorElement = null;
  static download(file: File) {
    if (!Service.downloadLink) {
      Service.downloadLink = document.createElement("a");
      Service.downloadLink.style.display = "none";
      document.body.appendChild(Service.downloadLink);
    }
    const url = URL.createObjectURL(new Blob([file.getData()], { type: "application/octet-stream" }));
    Service.downloadLink.href = url;
    Service.downloadLink.download = file.name;
    if (Service.downloadLink.href as any !== document.location) {
      Service.downloadLink.click();
    }
  }

  static clangFormatModule: any = null;
  // Kudos to https://github.com/tbfleming/cib
  static async clangFormat(file: File, status?: IStatusProvider) {
    gaEvent("format", "Service", "clang-format");
    function format() {
      const result = Service.clangFormatModule.ccall("formatCode", "string", ["string"], [file.buffer.getValue()]);
      file.buffer.setValue(result);
    }

    if (Service.clangFormatModule) {
      format();
    } else {
      await Service.lazyLoad("lib/clang-format.js", status);
      const response = await fetch("lib/clang-format.wasm");
      const wasmBinary = await response.arrayBuffer();
      const module: any = {
        postRun() {
          format();
        },
        wasmBinary
      };
      Service.clangFormatModule = Module(module);
    }
  }

  static async disassembleX86(file: File, status?: IStatusProvider, options = "") {
    gaEvent("disassemble", "Service", "capstone.x86");
    if (typeof capstone === "undefined") {
      await Service.lazyLoad("lib/capstone.x86.min.js", status);
    }
    const output = file.parent.newFile(file.name + ".x86", FileType.x86);

    function toBytes(a: any) {
      return a.map(function(x: any) { return padLeft(Number(x).toString(16), 2, "0"); }).join(" ");
    }

    const service = await createCompilerService(Language.Wasm, Language.x86);
    const input = {
      files: {
        "in.wasm": {
          content: file.getData(),
        },
      },
      options,
    };
    const result = await service.compile(input);
    const json: any = result.items["a.json"].content;
    let s = "";
    const cs = new capstone.Cs(capstone.ARCH_X86, capstone.MODE_64);
    const annotations: any[] = [];
    const assemblyInstructionsByAddress = Object.create(null);
    for (let i = 0; i < json.regions.length; i++) {
      const region = json.regions[i];
      s += region.name + ":\n";
      const csBuffer = decodeRestrictedBase64ToBytes(region.bytes);
      const instructions = cs.disasm(csBuffer, region.entry);
      const basicBlocks: any = {};
      instructions.forEach(function(instr: any, i: any) {
        assemblyInstructionsByAddress[instr.address] = instr;
        if (isBranch(instr)) {
          const targetAddress = parseInt(instr.op_str, 10);
          if (!basicBlocks[targetAddress]) {
            basicBlocks[targetAddress] = [];
          }
          basicBlocks[targetAddress].push(instr.address);
          if (i + 1 < instructions.length) {
            basicBlocks[instructions[i + 1].address] = [];
          }
        }
      });
      instructions.forEach(function(instr: any) {
        if (basicBlocks[instr.address]) {
          s += " " + padRight(toAddress(instr.address) + ":", 39, " ");
          if (basicBlocks[instr.address].length > 0) {
            s += "; " + toAddress(instr.address) + " from: [" + basicBlocks[instr.address].map(toAddress).join(", ") + "]";
          }
          s += "\n";
        }
        s += "  " + padRight(instr.mnemonic + " " + instr.op_str, 38, " ");
        s += "; " + toAddress(instr.address) + " " + toBytes(instr.bytes) + "\n";
      });
      s += "\n";
    }
    output.setData(s);
  }

  private static binaryExplorerMessageListener: (e: any) => void;

  static openBinaryExplorer(file: File) {
    window.open(
      "//wasdk.github.io/wasmcodeexplorer/?api=postmessage",
      "",
      "toolbar=no,ocation=no,directories=no,status=no,menubar=no,location=no,scrollbars=yes,resizable=yes,width=1024,height=568"
    );
    if (Service.binaryExplorerMessageListener) {
      window.removeEventListener("message", Service.binaryExplorerMessageListener, false);
    }
    Service.binaryExplorerMessageListener = (e: any) => {
      if (e.data.type === "wasmexplorer-ready") {
        window.removeEventListener("message", Service.binaryExplorerMessageListener, false);
        Service.binaryExplorerMessageListener = null;
        const dataToSend = new Uint8Array((file.data as any).slice(0));
        e.source.postMessage({
          type: "wasmexplorer-load",
          data: dataToSend
        }, "*", [dataToSend.buffer]);
      }
    };
    window.addEventListener("message", Service.binaryExplorerMessageListener, false);
  }

  static async compileMarkdownToHtml(src: string): Promise<string> {
    if (typeof showdown === "undefined") {
      await Service.lazyLoad("lib/showdown.min.js");
    }
    const converter = new showdown.Converter({ tables: true, ghCodeBlocks: true });
    showdown.setFlavor("github");
    return converter.makeHtml(src);
  }

  static async twiggyWasm(file: File, status: IStatusProvider): Promise<string> {
    const buffer = file.getData() as ArrayBuffer;
    gaEvent("disassemble", "Service", "twiggy");
    status && status.push("Analyze with Twiggy");
    const result = await this.worker.twiggyWasm(buffer);
    const output = file.parent.newFile(file.name + ".md", FileType.Markdown);
    output.description = "Analyzed " + file.name + " using Twiggy.";
    output.setData(result);
    status && status.pop();
    return result;
  }
}
