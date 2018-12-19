const baseUrl = "http://localhost:3000";
// TODO: Pass contract name from studio somehow
const contractName = "studio-M5X4N4R";

async function runTest(tokenContract) {
  let alice = "3x9az88Dkbxa6tkKByxqEn7jBTJCJCD4dVvou49L24ET";
  let bob = "9jLkNAaW9E47LQMHvjohy2uAAyr1331bAxgJKFRU7wF6";

  console.log("balanceOf alice", await tokenContract.balanceOf({tokenOwner: alice}));
  console.log("balanceOf bob", await tokenContract.balanceOf({tokenOwner: bob}));

  await sleep(1000);
  await tokenContract._init({ initialOwner: bob });
  await sleep(1000);
  console.log("balanceOf alice", await tokenContract.balanceOf({tokenOwner: alice}));
  console.log("balanceOf bob", await tokenContract.balanceOf({tokenOwner: bob}));

  await sleep(1000);
  await tokenContract.transfer({ from: bob, to: alice, tokens: "100" });
  await sleep(2000);
  console.log("balanceOf alice", await tokenContract.balanceOf({tokenOwner: alice}));
  console.log("balanceOf bob", await tokenContract.balanceOf({tokenOwner: bob}));
}

// TODO: What's proper way to wait for method execution
function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

// TODO: Introspection of contract methods
let tokenContract = {};
["totalSupply", "balanceOf"].forEach((methodName) => {
  tokenContract[methodName] = async function(args) {
    //console.log(methodName, args);
    args = args || {};
    let response = await sendJson("POST", `${baseUrl}/contract/view/${contractName}/near_func_${methodName}`, { args });
    return response.result;
  };
});
["_init", "transfer"].forEach((methodName) => {
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
  if (response.status === 204) {
    // No Content
    return null;
  }
  return await response.json();
}