describe("Token", function() {
    let near;
    let contract;
    let alice;
    let bob = "bob.near";
    let eve = "eve.near";
  
    beforeAll(async function() {
      const config = await nearlib.dev.getConfig();
      console.log("nearConfig", config);
      near = await nearlib.dev.connect();
      alice = nearlib.dev.myAccountId;
      contract = await near.loadContract(config.contractName + "test", {
        // NOTE: This configuration only needed while NEAR is still in development
        viewMethods: ["totalSupply", "balanceOf", "allowance"],
        changeMethods: ["_init", "transfer", "approve", "transferFrom"],
        sender: alice
      });
    });
  
    describe("MVC", function() {
      it("placeholder test", async function() {
        expect(1).toBe(1);
      });
    });
  });