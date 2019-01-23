async function runTest() {
  await init();

  const result = await near.callViewFunction(
    near.dev.myAccountId,
    studioConfig.contractName,
    "totalSupply", {});
  console.log(result);

  const scheduled = await near.scheduleFunctionCall(
    0,
    near.dev.myAccountId,
    studioConfig.contractName,
    "totalSupply", {});
}

runTest().catch(console.error);

