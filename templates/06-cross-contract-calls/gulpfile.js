const gulp = require("gulp");

function generateBindings(inputFile, outputFile, callback) {
  const asc = require("assemblyscript/bin/asc");
  asc.main([
    inputFile,
    "--baseDir", "assembly",
    "--nearFile", outputFile, 
    "--measure"
  ], callback);
}

function compile(inputFile, outputFile, callback) {
  const asc = require("assemblyscript/bin/asc");
  asc.main([
    inputFile,
    "--baseDir", "assembly",
    "--binaryFile", outputFile,
    "--sourceMap",
    "--measure"
  ], callback);
}

gulp.task("build:model", callback => {
  generateBindings("model.ts", "../out/model.near.ts", callback);
});

gulp.task("build:bindings", ["build:model"], callback => {
  generateBindings("main.ts", "../out/main.near.ts", callback);
});

gulp.task("build", ["build:bindings"], callback => {
  compile("../out/main.near.ts", "../out/main.wasm", callback);
});

gulp.task("default", ["build"]);

// This task is not required when running the project locally. Its purpose is to set up the
// AssemblyScript compiler when a new project has been loaded in WebAssembly Studio.
gulp.task("project:load", () => {
  const utils = require("@wasm/studio-utils");
  utils.eval(utils.project.getFile("setup.js").getData(), {
    logLn,
    project,
    monaco,
    fileTypeForExtension,
  });
});
