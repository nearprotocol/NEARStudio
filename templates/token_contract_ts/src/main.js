const baseUrl = "http://localhost:3000";
// TODO: Pass contract name from studio somehow
const contractName = "studio-M5X4N4R";

async function runTest(tokenContract) {
  let alice = "3x9az88Dkbxa6tkKByxqEn7jBTJCJCD4dVvou49L24ET";
  let bob = "9jLkNAaW9E47LQMHvjohy2uAAyr1331bAxgJKFRU7wF6";
  let eve = "9xkyoPm8xs4PFuonyoTMMbHxi4crcvmpsBsFkukYrELJ";

  await tokenContract._init({ initialOwner: bob });
  await sleep(1000);
  console.log("balanceOf alice", await tokenContract.balanceOf({tokenOwner: alice}));
  console.log("balanceOf bob", await tokenContract.balanceOf({tokenOwner: bob}));

  await tokenContract.transfer({ from: bob, to: alice, tokens: "100" });
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
  // TODO: Looks like atomicity of contract method not guaranteed?
  await tokenContract.transferFrom({ from: bob, to: eve, tokens: "50" });
  await sleep(2000);
  console.log("balanceOf alice", await tokenContract.balanceOf({tokenOwner: alice}));
  console.log("balanceOf bob", await tokenContract.balanceOf({tokenOwner: bob}));
  console.log("balanceOf eve", await tokenContract.balanceOf({tokenOwner: eve}));
}

// TODO: What's proper way to wait for method execution
function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

// TODO: Introspection of contract methods
let tokenContract = {};
["totalSupply", "balanceOf", "allowance"].forEach((methodName) => {
  tokenContract[methodName] = async function(args) {
    //console.log(methodName, args);
    args = args || {};
    let response = await sendJson("POST", `${baseUrl}/contract/view/${contractName}/near_func_${methodName}`, { args });
    return response.result;
  };
});
["_init", "transfer", "approve", "transferFrom"].forEach((methodName) => {
  tokenContract[methodName] = async function(args) {
    console.log(methodName, args);
    args = args || {};
    await sendJson("POST", `${baseUrl}/contract/${contractName}/near_func_${methodName}`, { args });
  };
});

runTest(tokenContract).catch(console.error);

async function sendJson(method, url, json) {
  const response = await fetch(url, {
    credentials: 'include',
    method: method,
    body: JSON.stringify(json),
    headers: new Headers({ "Content-type": "application/json; charset=utf-8" })
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }
  if (response.status === 204) {
    // No Content
    return null;
  }
  return await response.json();
}