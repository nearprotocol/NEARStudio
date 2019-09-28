// This file is not required when running the project locally. Its purpose is to set up the
// AssemblyScript compiler when a new project has been loaded in WebAssembly Studio.

const CURRENT_URL = new URL(window.location.href);
const ASC_COMMMIT = CURRENT_URL.searchParams.get("asc") || "v0.7.3-preview";

require.config({
  paths: {
    "binaryen": "https://cdn.jsdelivr.net/gh/AssemblyScript/binaryen.js@84.0.0-nightly.20190522/index",
    "assemblyscript": `https://cdn.jsdelivr.net/gh/nearprotocol/assemblyscript@${ASC_COMMMIT}/dist/assemblyscript`,
    "assemblyscript/dist/asc": `https://cdn.jsdelivr.net/gh/nearprotocol/assemblyscript@${ASC_COMMMIT}/dist/asc`
  }
});

logLn("Loading AssemblyScript compiler ...");
window.logLn = logLn;

Object.assign(window.StudioFs, {
  readFileSync(path) {
    const file = getProject().getFile(path);
    return file ? file.data : null;
  },
  writeFileSync(path, contents) {
    path = path.replace(/^\.\//, "");
    const type = fileTypeForExtension(path.substring(path.lastIndexOf(".") + 1));
    getProject().newFile(path, type, true).setData(contents);
  },
  existsSync(path) {
    return !!getProject().getFile(path);
  },
  listDirSync(path) {
    let dir = getProject().getFile(path);
    if (dir == null) {
        return dir;
    }
    assert(dir.type === "directory");
    return dir.list();
  },
  mkdirSync(path) {
    getProject().newDirectory(path);
  }
});

require(["assemblyscript/dist/asc"], asc => {

  asc.main = (main => (args, options, fn) => {
    if (typeof options === "function") {
      fn = options;
      options = undefined;
    }
    return main(args, options || {
      stdout: asc.createMemoryStream(),
      stderr: asc.createMemoryStream(logLn),
      readFile: (filename, baseDir) => {
        const file = StudioFS.readFileSync(baseDir + "/" + filename.replace(/^\//, ""));
        return file ? file.data : null;
      },
      writeFile: (filename, contents) => {
        StudioFS.writeFileSync(filename, contents);
      },
      listFiles: (path) => StudioFS.listDirSync(path)
    }, fn);
  })(asc.main);
  

  Object.assign(window.AssemblyScriptCompiler, asc);

  if (!window.process) {
    window.process = {};
  }

  monaco.languages.typescript.typescriptDefaults.addExtraLib(asc.definitionFiles.assembly);
  logLn("AssemblyScript compiler is ready!");
  setupCallback();
});
