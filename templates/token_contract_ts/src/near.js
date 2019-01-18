const near = {};

if (window.__near_getConfig) {
  near.getConfig = __near_getConfig;
} else {
  near.getConfig = async function () {
    return JSON.parse(decodeURIComponent(getCookie("fiddleConfig")));
  }
}

near.requireDefault = async function(viewMethods, changeMethods) {
  let nearConfig = await this.getConfig();
  return this.require(nearConfig.contractName, viewMethods, changeMethods);
}

near.require = async function(contractName, viewMethods, changeMethods) {
  let nearConfig = await this.getConfig();

  // TODO: Introspection of contract methods
  let tokenContract = {};
  viewMethods.forEach((methodName) => {
    tokenContract[methodName] = async function(args) {
      //console.log(methodName, args);
      args = args || {};
      let response = await sendJson("POST", `${nearConfig.baseUrl}/contract/view/${contractName}/${methodName}`, { args });
      return response.result;
    };
  });
  changeMethods.forEach((methodName) => {
    tokenContract[methodName] = async function(args) {
      console.log(methodName, args);
      args = args || {};
      await sendJson("POST", `${nearConfig.baseUrl}/contract/${contractName}/${methodName}`, { args });
    };
  });
  return tokenContract;
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

