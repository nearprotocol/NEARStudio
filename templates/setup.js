// This file is not required when running the project locally. Its purpose is to set up the
// AssemblyScript compiler when a new project has been loaded in WebAssembly Studio.
const URL_ARGS = (new URL(window.location.href)).searchParams;
const SOURCE_LOCATION = URL_ARGS.get('src_loc') || 'gh/nearprotocol';
const ASC_VERSION = URL_ARGS.get('asc') || '5ed994006b226d8b83f63830661146aebb9921ba';
const BINDGEN_AS_VERSION = URL_ARGS.get('near-bindgen-as') || '1.1.1';

// Fetch assemblyscript's package.json so that the binaryen version matches.
fetch(`https://cdn.jsdelivr.net/gh/nearprotocol/assemblyscript@${ASC_VERSION}/package.json`)
  .then(res => {
    if (!res.ok) new Error('HTTP error ' + res.status);
    return res.json();
  })
  .then(json => {
    const BINARYEN_VERSION = URL_ARGS.get('binaryen') 
                            || (json.dependencies && json.dependencies['binaryen'])
                            || '89.0.0-nightly.20191113';
    require.config({
      paths: {
        'binaryen': `https://cdn.jsdelivr.net/gh/AssemblyScript/binaryen.js@${BINARYEN_VERSION}/index`,
        'assemblyscript': `https://cdn.jsdelivr.net/gh/nearprotocol/assemblyscript@${ASC_VERSION}/dist/assemblyscript`,
        'assemblyscript/dist/asc': `https://cdn.jsdelivr.net/${SOURCE_LOCATION}/assemblyscript@${ASC_VERSION}/dist/asc`,
        'assemblyscript/dist/asc.map.js': `https://cdn.jsdelivr.net/${SOURCE_LOCATION}/assemblyscript@${ASC_VERSION}/dist/asc.map`,
        'NearBindgen': `https://cdn.jsdelivr.net/npm/near-bindgen-as@${BINDGEN_AS_VERSION}/index`
      }
    });

    logLn('Loading AssemblyScript compiler ...');
    window.logLn = logLn;

    Object.assign(window.StudioFs, {
      readFileSync(path) {
        const file = getProject().getFile(path);
        return file ? file.data : null;
      },
      writeFileSync(path, contents) {
        path = path.replace(/^\.\//, '');
        const type = fileTypeForExtension(path.substring(path.lastIndexOf('.') + 1));
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
        assert(dir.type === 'directory');
        return dir.list();
      },
      mkdirSync(path) {
        getProject().newDirectory(path);
      }
    });

    require(['NearBindgen'], nearBindgen => {
      window['near-bindgen-as'] = nearBindgen;
      Object.assign(window['near-bindgen-as'], nearBindgen);
    
      require(['assemblyscript/dist/asc'], asc => {
        Object.assign(window.AssemblyScriptCompiler, asc);

        if (!window.process) {
          window.process = {};
        }

        monaco.languages.typescript.typescriptDefaults.addExtraLib(asc.definitionFiles.assembly);
        logLn('AssemblyScript compiler is ready!');
        setupCallback();
      });
    });
  });
