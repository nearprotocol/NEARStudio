near.loadContract("../out/main.wasm", {
  onTransfer(from, to, tokens) {
    console.log("onTransfer", from, to, tokens);
  },
  onApproval(tokenOwner, spender, tokens) {
    console.log("onTransfer", tokenOwner, spender, tokens);
  }
},
(msg, file, line, column) => {
  msg = contractModule.getString(msg);
  file = contractModule.getString(file)
  console.error("abort called at " + file + ":" + line + ":" + column + " " + msg);
})
.then((contract) => {
  contract.run(() => {
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

    // Expected to fail
    // contractModule.transferFrom(account2, account3, contractModule.newU128(bigInt("150")));

    document.getElementById("container").innerHTML =
      "Total Supply: " + contractModule.readU128(contractModule.totalSupply());
  });
}).catch(console.error);
