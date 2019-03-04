describe("Token", function () {
  let near;
  let contract;

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  beforeAll(async function () {
    const config = await nearlib.dev.getConfig();
    near = await nearlib.dev.connect();
    alice = nearlib.dev.myAccountId;
    const url = new URL(window.location.href);
    config.contractName = url.searchParams.get("contractName");
    console.log("nearConfig", config);
    contract = await near.loadContract(config.contractName, {
      viewMethods: ["getCounter"],
      changeMethods: ["incrementCounter", "decrementCounter"],
      sender: nearlib.dev.myAccountId
    });
  });

  describe("counter", function () {
    it("can be incremented", async function () {
      const startCounter = await contract.getCounter();
      await contract.incrementCounter();
      const endCounter = await contract.getCounter();
      expect(endCounter).toEqual(startCounter + 1);
    });
    it("can be decremented", async function () {
      await contract.incrementCounter();
      const startCounter = await contract.getCounter();
      await contract.decrementCounter();
      const endCounter = await contract.getCounter();
      expect(endCounter).toEqual(startCounter - 1);
    });
  });
});