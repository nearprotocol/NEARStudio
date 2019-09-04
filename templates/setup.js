// This file is not required when running the project locally. Its purpose is to set up the
// AssemblyScript compiler when a new project has been loaded in WebAssembly Studio.

require.config({
  paths: {
    "binaryen": "https://cdn.jsdelivr.net/gh/AssemblyScript/binaryen.js@84.0.0-nightly.20190522/index",
    "assemblyscript": "https://cdn.jsdelivr.net/gh/nearprotocol/assemblyscript@f8c87361ad1ebc92b06aae4386e056ed2e368f0a/dist/assemblyscript",
    "assemblyscript/dist/asc": "https://cdn.jsdelivr.net/gh/nearprotocol/assemblyscript@f8c87361ad1ebc92b06aae4386e056ed2e368f0a/dist/asc"
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
  Object.assign(window.AssemblyScriptCompiler, asc);

  if (!window.process) {
    window.process = {};
  }

  monaco.languages.typescript.typescriptDefaults.addExtraLib(asc.definitionFiles.assembly);
  logLn("AssemblyScript compiler is ready!");
  setupCallback();
});
