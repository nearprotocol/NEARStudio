// Loads nearlib and this contract into window scope.

let initPromise;
window.initContract = function () {
  if (window.contract) {
    return Promise.resolve();
  }
  if (!initPromise) {
    initPromise = doInitContract();
  }
  return initPromise;
}

async function doInitContract() {
  const config = await nearlib.dev.getConfig();
  console.log("nearConfig", config);
  
  window.near = await nearlib.dev.connect();
  
  window.contract = await near.loadContract(config.contractName, {
    viewMethods: ["totalSupply", "balanceOf", "allowance"],
    changeMethods: ["_init", "transfer", "approve", "transferFrom"],
    sender: nearlib.dev.myAccountId
  });
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

initContract().catch(console.error);
