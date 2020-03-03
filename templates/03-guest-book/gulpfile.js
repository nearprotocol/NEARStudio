const gulp = require('gulp');
const nearUtils = require('near-bindgen-as/compiler');

gulp.task('build', callback => {
  nearUtils.compile('./assembly/main.ts', './out/main.wasm', callback);
});

exports.default = gulp.series(['build']);

// TODO: Extract all following boilerplate into library

// This task is not required when running the project locally. Its purpose is to set up the
// AssemblyScript compiler when a new project has been loaded in WebAssembly Studio.
gulp.task('project:load', callback => {
  const utils = require('@wasm/studio-utils');
  utils.eval(utils.getProject().getFile('setup.js').getData(), {
    logLn,
    getProject: utils.getProject,
    monaco,
    fileTypeForExtension,
    setupCallback: callback
  });
});
