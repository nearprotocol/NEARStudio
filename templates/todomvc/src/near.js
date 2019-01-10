const near = {};

near.getConfig = __near_getConfig;

near.requireDefault = async function(viewMethods, changeMethods) {
  let nearConfig = await __near_getConfig();
  return this.require(nearConfig.contractName, viewMethods, changeMethods);
}

near.require = async function(contractName, viewMethods, changeMethods) {
  let nearConfig = await __near_getConfig();

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

const nearRuntime = {
  _near_globalStorage_getItem(key) {
    key = contractModule.getString(key);
    value = localStorage.getItem(key)
    console.log("getItem", key, value);
    return value ? contractModule.newString(value) : null;
  },
  _near_globalStorage_setItem(key, value) {
    key = contractModule.getString(key);
    value = contractModule.getString(value);
    console.log("setItem", key, value);
    localStorage.setItem(key, value);
  },
  _near_globalStorage_removeItem(key) {
    key = contractModule.getString(key);
    console.log("removeItem", key);
    localStorage.removeItem(key);
  }
};

near.loadContract = function(uri, eventHandlers, abortHandler) {
  let contractModule;
  return loader.instantiateStreaming(fetch(uri), {
    near: nearRuntime,
    main: eventHandlers,
    env: {
      abort(msg, file, line, column) {
        msg = contractModule.getString(msg);
        file = contractModule.getString(file);
        abortHandler(msg, file, line, column);
      },
      log(str) {
        str = contractModule.getString(str);
        console.log(str);
      },
      return_value(ptr) {
        console.log("return_value", ptr);
      }
    }
  }).then(module => {
    contractModule = module;
    window.contractModule = module;
    contractModule.readBytes = function(ptr, length) {
      var result = [];
      for (let i = 0; i < length; i++) {
        result.push(this.U8[ptr + i]);
      }
      return result;
    }

    contractModule.readU128 = function(ptr) {
      return bigInt.fromArray(this.readBytes(ptr, 16).reverse(), 0x100);
    }

    contractModule.newU128 = function(big) {
      const bytesArray = big.toArray(0x100).value.reverse();
      console.assert(bytesArray.length <= 16, "Passed BigInteger should fit into 128-bit");
      while (bytesArray.length < 16) {
        bytesArray.push(0);
      }
      const ptr = this.memory.allocate(bytesArray.length);
      for (let i = 0; i < 16; i++) {
        this.U8[ptr + i] = bytesArray[i];
      }
      return ptr;
    }

    return {
      contractModule,
      run: function(fn) {
        fn(this.contractModule);
      }
    }
  });
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

