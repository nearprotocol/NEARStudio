function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

describe("Guestbook", function() {
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
      await sleep(1000);
      contract = await near.loadContract(config.contractName, {
        // NOTE: This configuration only needed while NEAR is still in development
        viewMethods: ["getMessages"],
        changeMethods: ["addMessage"],
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