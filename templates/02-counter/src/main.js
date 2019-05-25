// Loads nearlib and this contract into window scope.
async function initContract() {
  // Initializing connection to the NEAR DevNet.
  window.near = await nearlib.dev.connect(nearConfig);

  // Initializing our contract APIs by contract name and configuration.
  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ["getCounter"],
    changeMethods: ["incrementCounter", "decrementCounter"],
    sender: nearlib.dev.myAccountId
  });
}

window.nearInitPromise = initContract().catch(console.error);
