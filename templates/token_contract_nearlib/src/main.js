const studio = {};
studio.getConfig = __near_getConfig;
let nearjs = null;
let myAccountId = null;

async function runTest() {
  studioConfig = await studio.getConfig();
  console.log("studioConfig", studioConfig);

  const result = await nearjs.callViewFunction(
    myAccountId,
    studioConfig.contractName,
    "totalSupply", {});
  console.log(result);

  const scheduled = await nearjs.scheduleFunctionCall(
    0,
    myAccountId,
    studioConfig.contractName,
    "transfer",
    {
      "to": "alice.near",
      "tokens": "1"
    });
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

async function init() {
  studioConfig = await studio.getConfig();
  console.log("studioConfig", studioConfig);
  nearjs = window.nearLib.Near.createDefaultConfig(studioConfig.nodeUrl);
  myAccountId = window.localStorage.getItem("nearstudio_account_id");
}

init().catch(console.error);
runTest().catch(console.error);