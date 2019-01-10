async function runTest() {
  console.log("nearConfig", near.getConfig());
  nearlib = window.nearLib;
  const myAccountId = "jane.near10";
  if (!(await nearlib.nearClient.keyStore.getKey(myAccountId))["secret_key"]) {
    console.log("creating account")
    const createResult =
    await nearlib.createAccountWithRandomKey(myAccountId, 10, "alice.near");
    console.log(createResult["key"]);
  }

  const aliceAccount = await nearlib.viewAccount("alice.near");
  console.log(aliceAccount["account_id"]);

  const result = await nearlib.callViewFunction(
    "alice.near",
    "studio-WTc9sxy",
    "near_func_totalSupply", {});
  console.log(result);

  const sched = await nearlib.scheduleFunctionCall(
    0,
    "alice.near",
    "studio-WTc9sxy",
    "near_func_totalSupply", {});
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

runTest().catch(console.error);

