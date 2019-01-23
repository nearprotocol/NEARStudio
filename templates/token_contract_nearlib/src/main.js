async function runTest() {
  const near = await nearlib.dev.connect();
  const studioConfig = await nearlib.dev.getConfig();
  console.log("studioConfig", studioConfig);

  const result = await near.callViewFunction(
    nearlib.dev.myAccountId,
    studioConfig.contractName,
    "totalSupply", {});
  console.log(result);

  const scheduled = await near.scheduleFunctionCall(
    0,
    nearlib.dev.myAccountId,
    studioConfig.contractName,
    "totalSupply", {});
}

runTest().catch(console.error);