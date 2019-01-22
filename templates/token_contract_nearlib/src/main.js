const studio = {};
studio.getConfig = __near_getConfig;

async function runTest() {
  studioConfig = await studio.getConfig();
  console.log("studioConfig", studioConfig);
  let near = window.nearLib.Near.createDefaultConfig(studioConfig.nodeUrl);
  const myAccountId = window.localStorage.getItem("nearstudio_account_id");
  console.log(myAccountId);
  const aliceAccount = await near.nearClient.viewAccount("alice.near");
  console.log(aliceAccount["account_id"]);
  const result = await near.callViewFunction(
    myAccountId,
    studioConfig.contractName,
    "totalSupply", {});
  console.log(result);

  const scheduleArgs = {
    "to": "alice.near",
    "tokens": "1"
  }
  const scheduled = await near.scheduleFunctionCall(
    0,
    myAccountId,
    studioConfig.contractName,
    "function",
    scheduleArgs);

  
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

runTest().catch(console.error);

