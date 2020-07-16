describe("Token", function() {
    let near;
    let contract;
    let alice;
    let bob = "bob.near";
    let carol = "carol.near";
    let dave = "dave.near";
    let eve = "eve.near";

    let validators;
  
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    beforeAll(async function() {
      const config = await nearlib.dev.getConfig();
      near = await nearlib.dev.connect();
      alice = nearlib.dev.myAccountId;
      const url = new URL(window.location.href);
      config.contractName = url.searchParams.get("contractName");
      console.log("nearConfig", config);
      console.log("alice", alice);
      contract = await near.loadContract(config.contractName, {
        // NOTE: This configuration only needed while NEAR is still in development
        viewMethods: ["totalSupply", "balanceOf", "allowance", "getValidatorApprovals", "getValidatorToEthereumData"],
        changeMethods: ["init", "transfer", "approve", "transferFrom", "validatorApprove", "transferToEthereum", "updateToEthereumIndex"],
        sender: alice
      });
    });

    describe("with alice, bob, dave, carol as validators", function() {
      beforeAll(async function() {
        validators = [alice, bob, carol, dave];
        let hash = await contract.init({ initialOwner: alice, approvedValidators: validators });
      });
  
      it("alice can approve 100 tokens for Eve", async function() {
        await contract.validatorApprove({'destination': eve, 'tokens': "100"});
        const approvals = await contract.getValidatorApprovals({destination: eve});
        expect(approvals).toBe("100;0;0;0;");

        //await contract.transfer({'to': 'alex3.near', 'tokens': '100000'})
      });
  
      it("alice can send tokens to Ethereum, and validate it", async function() {
        await contract.transferToEthereum({'to': "0xDEADBEEF", 'tokens': "110"});
        const data = await contract.getValidatorToEthereumData({"who": alice});
        expect(data.address).toBe("0xDEADBEEF");
        expect(data.amount).toBe("110");
        await contract.updateToEthereumIndex();
        const data2 = await contract.getValidatorToEthereumData({"who": alice});
        expect(data2).toBe(null);
      });
    });

    describe("with alice as initial owner", function() {
      beforeAll(async function() {
        validators = [alice, bob, carol, dave];
        let hash = await contract.init({ initialOwner: alice, approvedValidators: validators });
  
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
  
        // TODO: Use "eve" as sender
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