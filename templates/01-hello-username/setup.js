// This file is not required when running the project locally. Its purpose is to set up the
// AssemblyScript compiler when a new project has been loaded in WebAssembly Studio.

// Path manipulation lifted from https://gist.github.com/creationix/7435851

// Joins path segments.  Preserves initial "/" and resolves ".." and "."
// Does not support using ".." to go above/outside the root.
// This means that join("foo", "../../bar") will not resolve to "../bar"
function join(/* path segments */) {
  // Split the inputs into a list of path commands.
  var parts = [];
  for (var i = 0, l = arguments.length; i < l; i++) {
    parts = parts.concat(arguments[i].split("/"));
  }
  // Interpret the path commands to get the new resolved path.
  var newParts = [];
  for (i = 0, l = parts.length; i < l; i++) {
    var part = parts[i];
    // Remove leading and trailing slashes
    // Also remove "." segments
    if (!part || part === ".") continue;
    // Interpret ".." to pop the last segment
    if (part === "..") newParts.pop();
    // Push new path segments.
    else newParts.push(part);
  }
  // Preserve the initial slash if there was one.
  if (parts[0] === "") newParts.unshift("");
  // Turn back into a single string path.
  return newParts.join("/") || (newParts.length ? "/" : ".");
}

// A simple function to get the dirname of a path
// Trailing slashes are ignored. Leading slash is preserved.
function dirname(path) {
  return join(path, "..");
}

require.config({
  paths: {
    "binaryen": "https://cdn.jsdelivr.net/gh/AssemblyScript/binaryen.js@e41ec5c177e3d2cacccd4ccb1877ae29a7352dc1/index",
    "assemblyscript": "https://cdn.jsdelivr.net/gh/nearprotocol/assemblyscript@82f1d5a/dist/assemblyscript",
    "assemblyscript/bin/asc": "https://cdn.jsdelivr.net/gh/nearprotocol/assemblyscript@82f1d5a/dist/asc",
  }
});
logLn("Loading AssemblyScript compiler ...");
require(["assemblyscript/bin/asc"], asc => {
  monaco.languages.typescript.typescriptDefaults.addExtraLib(asc.definitionFiles.assembly);
  asc.main = (main => (args, options, fn) => {
    if (typeof options === "function") {
      fn = options;
      options = undefined;
    }

    return main(args, options || {
      stdout: asc.createMemoryStream(),
      stderr: asc.createMemoryStream(logLn),
      readFile: (filename, baseDir) => {
        let path = join(baseDir, filename);
        console.log("readFile", path);
        if (path.startsWith("out/") && path.indexOf(".near.ts") == -1) {
          path = path.replace(/^out/, baseDir );
          console.log("path", path);
        } else if (path.startsWith(baseDir) && path.indexOf(".near.ts") != -1) {
          path = path.replace(new RegExp("^" + baseDir), "out");
          console.log("path", path);
        }
        const file = project.getFile(path);
        return file ? file.data : null;
      },
      writeFile: (filename, contents) => {
        const name = filename.startsWith("../") ? filename.substring(3) : filename;
        const type = fileTypeForExtension(name.substring(name.lastIndexOf(".") + 1));
        project.newFile(name, type, true).setData(contents);
      },
      listFiles: () => []
    }, fn);
  })(asc.main);
  logLn("AssemblyScript compiler is ready!");
});
