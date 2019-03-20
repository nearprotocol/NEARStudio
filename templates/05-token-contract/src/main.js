// Loads nearlib and this contract into window scope.

async function doInitContract() {
  const config = await nearlib.dev.getConfig();
  console.log("nearConfig", config);
  
  window.near = await nearlib.dev.connect();
  
  window.contract = await near.loadContract(config.contractName, {
    viewMethods: ["totalSupply", "balanceOf", "allowance"],
    changeMethods: ["init", "transfer", "approve", "transferFrom"],
    sender: nearlib.dev.myAccountId
  });
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

window.nearInitPromise = doInitContract().catch(console.error);