const studio = {};
studio.getConfig = __near_getConfig;

async function runTest() {
  studioConfig = await studio.getConfig();
  console.log("studioConfig", studioConfig);

  let near = window.nearLib.Near.createDefaultConfig(studioConfig.nodeUrl);
  const aliceKey = {
    public_key: "FTEov54o3JFxgnrouLNo2uferbvkU7fHDJvt7ohJNpZY",
    secret_key: "N3LfWXp5ag8eKSTu9yvksvN8VriNJqJT72StfE6471N8ef4qCfXT668jkuBdchMJVcrcUysriM8vN1ShfS8bJRY"
  };
  near.nearClient.keyStore.setKey("alice.near", aliceKey);

  const myAccountId = "jane.near11";
  if (!(await near.nearClient.keyStore.getKey(myAccountId))["secret_key"]) {
    console.log("creating account")
    const account = new window.nearLib.Account(near.nearClient);
    const createResult = await account.createAccountWithRandomKey(
        myAccountId, 10, "alice.near");
    near.nearClient.keyStore.setKey(myAccountId, createResult["key"]);
    //console.log(createResult["key"]);
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

