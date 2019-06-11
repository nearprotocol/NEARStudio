// This file is not required when running the project locally. Its purpose is to set up the
// AssemblyScript compiler when a new project has been loaded in WebAssembly Studio.

require.config({
  paths: {
    "binaryen": "https://cdn.jsdelivr.net/gh/AssemblyScript/binaryen.js@e41ec5c177e3d2cacccd4ccb1877ae29a7352dc1/index",
    "assemblyscript": "https://cdn.jsdelivr.net/gh/nearprotocol/assemblyscript@82f1d5a/dist/assemblyscript",
    "assemblyscript/bin/asc": "https://cdn.jsdelivr.net/gh/nearprotocol/assemblyscript@82f1d5a/dist/asc"
  }
});

logLn("Loading AssemblyScript compiler ...");
window.StudioFs = {
  readFileSync(path) {
    const file = project.getFile(path);
    return file ? file.data : null;
  },
  writeFileSync(path, contents) {
    const type = fileTypeForExtension(path.substring(path.lastIndexOf(".") + 1));
    project.newFile(path, type, true).setData(contents);
  },
  existsSync(path) {
    return !!project.getFile(path);
  }
}

require(["assemblyscript/bin/asc"], asc => {
  window.AssemblyScriptCompiler = asc;
  if (!window.process) {
    window.process = {};
  }
  process.stdout = asc.createMemoryStream();
  process.stderr = asc.createMemoryStream(logLn);

  monaco.languages.typescript.typescriptDefaults.addExtraLib(asc.definitionFiles.assembly);
  logLn("AssemblyScript compiler is ready!");
  setupCallback();
});
