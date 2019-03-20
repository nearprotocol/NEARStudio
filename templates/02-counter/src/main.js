// Loads nearlib and this contract into window scope.

async function doInitContract() {
  const config = await nearlib.dev.getConfig();
  console.log("nearConfig", config);
  
  window.near = await nearlib.dev.connect();
  
  window.contract = await near.loadContract(config.contractName, {
    viewMethods: ["getCounter"],
    changeMethods: ["incrementCounter", "decrementCounter"],
    sender: nearlib.dev.myAccountId
  });
}

window.nearInitPromise = doInitContract().catch(console.error);
