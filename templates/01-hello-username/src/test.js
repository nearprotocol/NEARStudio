describe('Authorizer', function () {
  let near;
  let contract;
  let accountId;

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  // Common setup below
  beforeAll(async function () {
    near = await nearlib.connect(nearConfig);
    accountId = nearConfig.contractName;
    contract = await near.loadContract(accountId, {
      // NOTE: This configuration only needed while NEAR is still in development
      // View methods are read only. They don't modify the state, but usually return some value. 
      viewMethods: ['whoSaidHi'],
      // Change methods can modify the state. But you don't receive the returned value when called.
      changeMethods: ['sayHi'],
      sender: nearConfig.contractName
    });
    window.near = near;
  });

  // Multiple tests can be described below. Search Jasmine JS for documentation.
  describe('simple', function () {
    beforeAll(async function () {
      // There can be some common setup for each test.
    });

    it('check, say hi, check again', async function () {
      // Checking that no one said Hi before us.
      const nobody = await contract.whoSaidHi();
      expect(nobody).toBeFalsy();
      // Saying Hi!
      await contract.sayHi();
      // Checking again
      const shouldBeMe = await contract.whoSaidHi();
      expect(shouldBeMe).toBe(accountId);
    });
  });
});