async function runTest() {
  console.log("nearConfig", near.getConfig());

  window.contract = await near.requireDefault(
    ["getTodo", "getAllTodos", "getLog"],
    ["_init", "setTodo", "clearLog"]);

  //await window.contract._init({});
  printServerLog();
}

async function printServerLog() {
  let logText = await window.contract.getLog();
  for (let line of logText.split("\n")) {
    console.log(`[server log] ${line}`);
  }
  await window.contract.clearLog();
}

function sleep(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, time);
  });
}

runTest().catch(console.error);

