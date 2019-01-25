describe("Token", function() {
  let near;
  let contract;
  const alice = "alice.near";
  const bob = "bob.near";
  const eve = "eve.near";

  beforeAll(async function() {
    const config = await nearlib.dev.getConfig();
    console.log("nearConfig", config);
    near = await nearlib.dev.connect();
    contract = await near.loadContract(config.contractName, {
      // NOTE: This configuration only needed while NEAR is still in development
      viewMethods: ["totalSupply", "balanceOf", "allowance"],
      changeMethods: ["_init", "transfer", "approve", "transferFrom"],
      sender: nearlib.dev.myAccountId
    });
  });

  describe("with alice as initial owner", function() {
    beforeAll(async function() {
      let hash = await contract._init({ initialOwner: alice });

      const aliceStartBalance = await contract.balanceOf({tokenOwner: alice});
      expect(aliceStartBalance).toBe("1000000");
    });

    it("can transfer to other account", async function() {
      const aliceStartBalance = await contract.balanceOf({tokenOwner: alice});
      const bobStartBalance = await contract.balanceOf({tokenOwner: bob});

      await contract.transfer({ to: bob, tokens: "100" });

      const aliceEndBalance = await contract.balanceOf({tokenOwner: alice});
      const bobEndBalance = await contract.balanceOf({tokenOwner: bob});
      expect(parseInt(aliceEndBalance)).toBe(parseInt(aliceStartBalance) - 100);
      expect(parseInt(bobEndBalance)).toBe(parseInt(bobStartBalance) + 100);
    });

    it("can transfer from approved account to another account", async function() {
      const aliceStartBalance = await contract.balanceOf({tokenOwner: alice});
      const bobStartBalance = await contract.balanceOf({tokenOwner: bob});
      const eveStartBalance = await contract.balanceOf({tokenOwner: eve});

      await contract.approve({ spender: eve, tokens: "100" });

      const aliceMidBalance = await contract.balanceOf({tokenOwner: alice});
      const bobMidBalance = await contract.balanceOf({tokenOwner: bob});
      const eveMidBalance = await contract.balanceOf({tokenOwner: eve});
      expect(aliceMidBalance).toBe(aliceStartBalance);
      expect(bobMidBalance).toBe(bobStartBalance);
      expect(eveMidBalance).toBe(eveStartBalance);

      // TODO: Use "eve" as sender, as this fails under "alice"
      await contract.transferFrom({ from: alice, to: eve, tokens: "50" });

      const aliceEndBalance = await contract.balanceOf({tokenOwner: alice});
      const bobEndBalance = await contract.balanceOf({tokenOwner: bob});
      const eveEndBalance = await contract.balanceOf({tokenOwner: eve});
      expect(parseInt(aliceEndBalance)).toBe(parseInt(aliceStartBalance) - 50);
      expect(bobEndBalance).toBe(bobStartBalance);
      expect(parseInt(eveEndBalance)).toBe(parseInt(eveStartBalance) + 50);
    });
  });
});