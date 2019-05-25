function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

describe("Guestbook", function () {
  let near;
  let contract;
  let accountId;

  beforeAll(async function () {
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
      viewMethods: ["getMessages"],
      changeMethods: ["addMessage"],
      sender: accountId
    });
  });

  describe("Guestbook", function () {
    it("returns 0 messages in initial empty states", async function () {
      const messages = await contract.getMessages({});
      expect(messages.length).toBe(0);
    });
  });
});