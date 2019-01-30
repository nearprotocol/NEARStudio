describe("Token", function() {
    let near;
    let contract;
    let alice;
    let bob = "bob.near";
    let eve = "eve.near";
  
    beforeAll(async function() {
      const config = await nearlib.dev.getConfig();
      near = await nearlib.dev.connect();
      alice = nearlib.dev.myAccountId;
      const url = new URL(window.location.href);
      config.contractName = url.searchParams.get("contractName");
      console.log("nearConfig", config);
      contract = await near.loadContract(config.contractName, {
        // NOTE: This configuration only needed while NEAR is still in development
        viewMethods: ["totalSupply", "balanceOf", "allowance"],
        changeMethods: ["_init", "transfer", "approve", "transferFrom"],
        sender: alice
      });
    });

    describe("Guestbook", function() {
      it("returns 0 messages in initial empty states", async function() {
        const messages = await contract.getMessages({});
        expect(messages.length).toBe(0);
      });
    });
  });