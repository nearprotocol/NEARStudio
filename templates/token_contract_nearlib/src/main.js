const studio = {};
studio.getConfig = __near_getConfig;

async function runTest() {
  studioConfig = await studio.getConfig();
  console.log("studioConfig", studioConfig);
  let near = window.nearLib.Near.createDefaultConfig(studioConfig.nodeUrl);
  const myAccountId = "jane.near10";
  if (!(await near.nearClient.keyStore.getKey(myAccountId))["secret_key"]) {
    console.log("creating account")
    const account = new window.nearLib.Account(near.nearClient);
    const createResult = await account.createAccountWithRandomKey(
        myAccountId, 10, "alice.near");
    console.log(createResult["key"]);
  }

  const aliceAccount = await near.nearClient.viewAccount("alice.near");
  console.log(aliceAccount["account_id"]);

  const result = await near.callViewFunction(
    "alice.near",
    studioConfig.contractName,
    "totalSupply", {});
  console.log(result);

  const scheduled = await near.scheduleFunctionCall(
    0,
    "alice.near",
    studioConfig.contractName,
    "totalSupply", {});
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

runTest().catch(console.error);

