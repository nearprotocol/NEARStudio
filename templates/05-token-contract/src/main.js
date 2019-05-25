// Loads nearlib and this contract into window scope.

async function initContract() {
  console.log("nearConfig", nearConfig);
  
  window.near = await nearlib.dev.connect();
  
  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ["totalSupply", "balanceOf", "allowance"],
    changeMethods: ["init", "transfer", "approve", "transferFrom"],
    sender: nearlib.dev.myAccountId
  });
}

window.nearInitPromise = initContract().catch(console.error);