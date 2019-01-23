describe("Token", function() {
  let contract;
  const alice = "alice.near";
  const bob = "bob.near";
  const eve = "eve.near";

  beforeAll(async function() {
    console.log("nearConfig", near.getConfig());

    contract = await near.requireDefault(
      ["totalSupply", "balanceOf", "allowance"],
      ["_init", "transfer", "approve", "transferFrom"]);
  });

  it("can init total supply owner", async function() {
    await contract._init({ initialOwner: alice });
    await sleep(500);

    const aliceStartBalance = await contract.balanceOf({tokenOwner: alice});
    expect(aliceStartBalance).toBe("1000000");
  });


  it("can transfer to other account", async function() {
    const aliceStartBalance = await contract.balanceOf({tokenOwner: alice});
    const bobStartBalance = await contract.balanceOf({tokenOwner: bob});
    
    await contract.transfer({ to: bob, tokens: "100" });
    await sleep(500);

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
    await sleep(500);

    const aliceMidBalance = await contract.balanceOf({tokenOwner: alice});
    const bobMidBalance = await contract.balanceOf({tokenOwner: bob});
    const eveMidBalance = await contract.balanceOf({tokenOwner: eve});
    expect(aliceMidBalance).toBe(aliceStartBalance);    
    expect(bobMidBalance).toBe(bobStartBalance);
    expect(eveMidBalance).toBe(eveStartBalance);

    // TODO: Use "eve" as sender
    await contract.transferFrom({ from: alice, to: eve, tokens: "50" });
    await sleep(500);
    
    const aliceEndBalance = await contract.balanceOf({tokenOwner: alice});
    const bobEndBalance = await contract.balanceOf({tokenOwner: bob});
    const eveEndBalance = await contract.balanceOf({tokenOwner: eve});
    expect(parseInt(aliceEndBalance)).toBe(parseInt(aliceStartBalance) - 50);
    expect(bobEndBalance).toBe(bobStartBalance);
    expect(parseInt(eveEndBalance)).toBe(parseInt(eveStartBalance) + 50);
  });
});

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}
