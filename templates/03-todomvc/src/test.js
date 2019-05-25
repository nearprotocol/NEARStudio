describe("Token", function() {
    let near;
    let contract;
    let accountId;

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    // Common setup below
    beforeAll(async function() {
      if (window.testSettings === undefined) {
        window.testSettings = {};
      }
      near = await nearlib.dev.connect(testSettings);
      accountId = testSettings.accountId ? testSettings.accountId : nearlib.dev.myAccountId;
      const contractName = testSettings.contractName ?
        testSettings.contractName :
        (new URL(window.location.href)).searchParams.get("contractName");
      contract = await near.loadContract(contractName, {
        // NOTE: This configuration only needed while NEAR is still in development
        viewMethods: ["getTodo", "getAllTodos"],
        changeMethods: ["setTodo"],
        sender: alice
      });
    });

    describe("MVC", function() {
      it("placeholder test", async function() {
        expect(1).toBe(1);
      });
    });
  });
