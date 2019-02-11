const gulp = require("gulp");
const fs = require('fs');
const args = require("yargs").argv;
const { Account, SimpleKeyStoreSigner, InMemoryKeyStore, KeyPair, LocalNodeConnection, NearClient, Near } = require('nearlib');

gulp.task('copyfiles', function () {
  return gulp.src('./assembly/**/*')
    .pipe(gulp.dest('./out/'));
});

gulp.task("build:model", callback => {
  const asc = require("assemblyscript/bin/asc");
  asc.main([
    "model.ts",
    "--baseDir", "./out",
    "--nearFile", "../out/model.near.ts",
    "--measure"
  ], callback);
});

gulp.task("build:bindings", ["build:model"], callback => {
  const asc = require("assemblyscript/bin/asc");
  asc.main([
    "main.ts",
    "--baseDir", "./out",
    "--binaryFile", "../out/main.wasm",
    "--nearFile", "../out/main.near.ts",
    "--measure"
  ], callback);
});

gulp.task("build:all", ["build:bindings"], callback => {
  const asc = require("assemblyscript/bin/asc");
  asc.main([
    "../out/main.near.ts",
    "--baseDir", "./out",
    "-O3",
    "--binaryFile", "../out/main.wasm",
    "--sourceMap",
    "--measure"
  ], callback);
});

gulp.task('build', function(done) {
  const runSequence = require('run-sequence');
  runSequence('copyfiles', 'build:all', function() {
    done();
  });
});

gulp.task('deploy', async function(done) {
  // Find keys/ account id
  const keyPath = './neardev/devkey.json';
  if (!fs.existsSync(keyPath)) {
    console.error("Deployment failed. File ./neardev/devkey.json does not exist. Please add this file and try again. Please make sure file contains public_key, secret_key, and account_id.")
    return;
  }
  const rawKey = JSON.parse(fs.readFileSync(keyPath));
  if (!rawKey.public_key || !rawKey.secret_key || !rawKey.account_id) {
    console.error("Deployment failed. neardev/devkey.json format problem. Please make sure file contains public_key, secret_key, and account_id")
    return;
  }
  const keyPair = new KeyPair(rawKey.public_key, rawKey.secret_key);
  const accountId = rawKey.account_id;
  const keyStore = new InMemoryKeyStore();
  keyStore.setKey(accountId, keyPair);

  // Determine which url to use
  const nodeUrl = getNodeUrl(args);
  const localNodeConnection = new LocalNodeConnection(nodeUrl);
  const nearClient = new NearClient(new SimpleKeyStoreSigner(keyStore), localNodeConnection);
  const near = new Near(nearClient);
  const contractData = [...fs.readFileSync('./out/main.wasm')];

  // Contract name
  const contractName = getContractName(args);
  console.log(
    "Starting deployment. Account id " + accountId + ", contract " + contractName + ", url " + nodeUrl);
  const res = await deployContractAndWaitForTransaction(
    accountId, contractName, contractData, near);
  if (res.status == "Completed") {
    console.log("Deployment succeeded.");
  } else {
    console.log("Deployment transaction did not succeed: ", res);
  }
});

function getContractName(args) {
  if(!args.contract) {
    return "default";
  }
  return args.contract;
}

function getNodeUrl(args) {
  const localNodeUrl = "http://localhost:3030";
  // assume that we want to use the local node by default. Also check some common shorthands for local
  if(args.nodeurl == "local" || args.nodeurl == "localhost" || !args.nodeurl) {
    return localNodeUrl;
  }
  if (args.nodeurl == "devnet" || args.nodeurl == "dev") {
    return "https://studio.nearprotocol.com/devnet";
  }
  return args.nodeurl;
}

async function deployContractAndWaitForTransaction(accountId, contractName, data, near) {
  const deployContractResult = await near.deployContract(accountId, contractName, data);
  const waitResult = await near.waitForTransactionResult(deployContractResult);
  return waitResult;
}

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
