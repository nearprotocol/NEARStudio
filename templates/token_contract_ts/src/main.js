let contractModule;
loader.instantiateStreaming(fetch("../out/main.wasm"), {
  main: {
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
    },
    onTransfer(from, to, tokens) {
      console.log("onTransfer", from, to, tokens);
    },
    onApproval(tokenOwner, spender, tokens) {
      console.log("onTransfer", tokenOwner, spender, tokens);
    }
  },
  env: {
    abort(msg, file, line, column) {
      console.error("abort called at main.ts:" + line + ":" + column);
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

  // TODO: Make sure signs are handled properly
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

  function testRoundtrip(numStr, base) {
    const newNumPtr = contractModule.newU128(bigInt(numStr, base));
    console.log("U128 roundtrip", numStr, contractModule.readU128(newNumPtr).toString(base));
  }

  testRoundtrip("12345", 10);
  testRoundtrip("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", 16);

  localStorage.clear();

  const account1 = contractModule.newU128(bigInt("11111111111111111111111111111111", 16));
  const account2 = contractModule.newU128(bigInt("22222222222222222222222222222222", 16));
  const account3 = contractModule.newU128(bigInt("33333333333333333333333333333333", 16));

  contractModule._init(account1);

  contractModule._near_setContractContext(account1);
  contractModule.transfer(account2, contractModule.newU128(bigInt("10000")));
  console.log("balance 1", contractModule.readU128(contractModule.balanceOf(account1)));
  console.log("balance 2", contractModule.readU128(contractModule.balanceOf(account2)));
  console.log("balance 3", contractModule.readU128(contractModule.balanceOf(account3)));

  contractModule._near_setContractContext(account2);
  contractModule.transfer(account3, contractModule.newU128(bigInt("100")));
  contractModule.approve(account3, contractModule.newU128(bigInt("200")));
  console.log("balance 1", contractModule.readU128(contractModule.balanceOf(account1)));
  console.log("balance 2", contractModule.readU128(contractModule.balanceOf(account2)));
  console.log("balance 3", contractModule.readU128(contractModule.balanceOf(account3)));

  contractModule.transferFrom(account2, account3, contractModule.newU128(bigInt("150")));
  console.log("balance 1", contractModule.readU128(contractModule.balanceOf(account1)));
  console.log("balance 2", contractModule.readU128(contractModule.balanceOf(account2)));
  console.log("balance 3", contractModule.readU128(contractModule.balanceOf(account3)));

  document.getElementById("container").innerHTML =
    "Total Supply: " + contractModule.readU128(contractModule.totalSupply());
}).catch(console.error);
