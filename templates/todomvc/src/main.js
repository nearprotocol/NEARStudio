let near = null;

async function init() {
  let getConfig = null;
  if (window.__near_getConfig) {
    getConfig = __near_getConfig;
  } else {
    getConfig = async function () {
      return JSON.parse(decodeURIComponent(getCookie("fiddleConfig")));
    }
  }

  studioConfig = await getConfig();
  near = window.nearLib.Near.createDefaultConfig(studioConfig.nodeUrl);
  myAccountId = window.localStorage.getItem("nearstudio_account_id");
  near.getConfig = getConfig;
  near.requireDefault = async function(viewMethods, changeMethods) {
    let nearConfig = await this.getConfig();
    return this.require(nearConfig.contractName, viewMethods, changeMethods);
  }

  near.require = async function(contractName, viewMethods, changeMethods) {
    let nearConfig = await this.getConfig();

    // TODO: Introspection of contract methods
    let contract = {};
    viewMethods.forEach((methodName) => {
      contract[methodName] = async function(args) {
        //console.log(methodName, args);
        args = args || {};
        let response = await sendJson("POST", `${nearConfig.baseUrl}/contract/view/${contractName}/${methodName}`, { args });
        return response.result;
      };
    });
    changeMethods.forEach((methodName) => {
      contract[methodName] = async function(args) {
        console.log(methodName, args);
        args = args || {};
        await sendJson("POST", `${nearConfig.baseUrl}/contract/${contractName}/${methodName}`, { args });
      };
    });
    return contract;
  }
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}

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

async function runTest() {
  await init();

  window.contract = await near.requireDefault(
    ["getTodo", "getAllTodos", "getLog"],
    ["_init", "setTodo", "clearLog"]);

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


