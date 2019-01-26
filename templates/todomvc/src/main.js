async function runTest() {    
  const config = await nearlib.dev.getConfig();
  console.log("nearConfig", config);
  
  window.near = await nearlib.dev.connect();
  
  window.contract = await near.loadContract(config.contractName, {
    viewMethods: ["getTodo", "getAllTodos"],
    changeMethods: ["_init", "setTodo"],
    sender: nearlib.dev.myAccountId
  });
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

runTest().catch(console.error);

