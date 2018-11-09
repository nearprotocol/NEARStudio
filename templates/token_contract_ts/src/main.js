loader.instantiateStreaming(fetch("../out/main.wasm"), {
  main: {
    sayHello() {
      console.log("Hello from WebAssembly!");
    }
  },
  env: {
    abort(msg, file, line, column) {
      console.error("abort called at main.ts:" + line + ":" + column);
    }
  },
}).then(contractModule => {
  contractModule.readBytes = function(ptr, length) {
    var result = [];
    for (let i = 0; i < length; i++) {
      result.push(this.I8[ptr + i]);
    }
    return result;
  }

  contractModule.readUInt128 = function(ptr) {
    return bigInt.fromArray(this.readBytes(ptr, 16).reverse(), 0x100);
  }

  const numPtr = contractModule.totalSupply();
  console.log("mem", contractModule.readBytes(numPtr, 16));
  document.getElementById("container").textContent = "Result: " + contractModule.readUInt128(contractModule.totalSupply()).toString();
}).catch(console.error);
