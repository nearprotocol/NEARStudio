const near = {};

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
      }
    },
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
      // TODO: Figure out clean way to do memory management. If our contracts are short-lived enough might be viable always allocating new memory blocks.
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