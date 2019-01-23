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
    near.getConfig = getConfig;
    near.sendJson = async (method, url, json) => {
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
  
    // dev functionality
    near.dev = {};
    near.dev.myAccountId = await initDevUser(near, studioConfig);
  }
  
  async function initDevUser(near, nearConfig) {
    const localStorageAccountIdKey = "dev_near_user";
    let tempUserAccountId = window.localStorage.getItem(localStorageAccountIdKey);
    if (tempUserAccountId) {
      return tempUserAccountId;
    }
    tempUserAccountId = "devuser" + Date.now();
    const keypair = await window.nearLib.KeyPair.fromRandomSeed();
    const args = {
      newAccountId: tempUserAccountId,
      newAccountPublicKey: keypair.getPublicKey()
    };
    let response = await near.sendJson(
      "POST",
      `${nearConfig.baseUrl}/account`, args);
    var keyStore = new window.nearLib.BrowserLocalStorageKeystore();
    keyStore.setKey(tempUserAccountId, keypair);
    window.localStorage.setItem(localStorageAccountIdKey, tempUserAccountId);
    return tempUserAccountId;
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