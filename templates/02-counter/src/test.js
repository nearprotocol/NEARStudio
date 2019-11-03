describe('Token', function () {
  let near;
  let contract;
  let accountId;

  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

  beforeAll(async function () {
    console.log('nearConfig', nearConfig);
    near = await nearlib.connect(nearConfig);
    accountId = nearConfig.contractName;
    contract = await near.loadContract(nearConfig.contractName, {
      viewMethods: ['getCounter'],
      changeMethods: ['incrementCounter', 'decrementCounter'],
      sender: accountId
    });
  });

  describe('counter', function () {
    it('can be incremented', async function () {
      const startCounter = await contract.getCounter();
      await contract.incrementCounter({value: 1});
      const endCounter = await contract.getCounter();
      expect(endCounter).toEqual(startCounter + 1);
    });
    it('can be decremented', async function () {
      await contract.incrementCounter();
      const startCounter = await contract.getCounter();
      await contract.decrementCounter({value: 1});
      const endCounter = await contract.getCounter();
      expect(endCounter).toEqual(startCounter - 1);
    });
  });
});