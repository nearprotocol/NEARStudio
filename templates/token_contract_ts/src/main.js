async function runTest() {
  console.log("nearConfig", near.getConfig());

  let tokenContract = await near.requireDefault(
    ["totalSupply", "balanceOf", "allowance"],
    ["_init", "transfer", "approve", "transferFrom"]);

  let alice = "alice.near";
  let bob = "bob.near";
  let eve = "eve.near";

  await tokenContract._init({ initialOwner: bob });
  await sleep(1000);
  console.log("balanceOf alice", await tokenContract.balanceOf({tokenOwner: alice}));
  console.log("balanceOf bob", await tokenContract.balanceOf({tokenOwner: bob}));

  await tokenContract.transfer({ to: alice, tokens: "100" });
  await sleep(2000);
  console.log("balanceOf alice", await tokenContract.balanceOf({tokenOwner: alice}));
  console.log("balanceOf bob", await tokenContract.balanceOf({tokenOwner: bob}));
  console.log("balanceOf eve", await tokenContract.balanceOf({tokenOwner: eve}));

  await tokenContract.approve({ spender: eve, tokens: "100" });
  await sleep(2000);
  console.log("balanceOf alice", await tokenContract.balanceOf({tokenOwner: alice}));
  console.log("balanceOf bob", await tokenContract.balanceOf({tokenOwner: bob}));
  console.log("balanceOf eve", await tokenContract.balanceOf({tokenOwner: eve}));

  // TODO: Use "eve" as sender
  await tokenContract.transferFrom({ from: bob, to: eve, tokens: "50" });
  await sleep(2000);
  console.log("balanceOf alice", await tokenContract.balanceOf({tokenOwner: alice}));
  console.log("balanceOf bob", await tokenContract.balanceOf({tokenOwner: bob}));
  console.log("balanceOf eve", await tokenContract.balanceOf({tokenOwner: eve}));
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

runTest().catch(console.error);

