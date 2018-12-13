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

    const account1 = contractModule.newString("11111111111111111111111111111111");
    const account2 = contractModule.newString("22222222222222222222222222222222");
    const account3 = contractModule.newString("33333333333333333333333333333333");

    contractModule._init(account1);

    contractModule._near_setContractContext(account1);
    contractModule.transfer(account2, contractModule.newString("10000"));
    console.log("balance 1", contractModule.getString(contractModule.balanceOf(account1)));
    console.log("balance 2", contractModule.getString(contractModule.balanceOf(account2)));
    console.log("balance 3", contractModule.getString(contractModule.balanceOf(account3)));

    contractModule._near_setContractContext(account2);
    contractModule.transfer(account3, contractModule.newString("100"));
    contractModule.approve(account3, contractModule.newString("200"));
    console.log("balance 1", contractModule.getString(contractModule.balanceOf(account1)));
    console.log("balance 2", contractModule.getString(contractModule.balanceOf(account2)));
    console.log("balance 3", contractModule.getString(contractModule.balanceOf(account3)));

    contractModule.transferFrom(account2, account3, contractModule.newString("150"));
    console.log("balance 1", contractModule.getString(contractModule.balanceOf(account1)));
    console.log("balance 2", contractModule.getString(contractModule.balanceOf(account2)));
    console.log("balance 3", contractModule.getString(contractModule.balanceOf(account3)));

    // Expected to fail
    // contractModule.transferFrom(account2, account3, contractModule.newString("150"));

    document.getElementById("container").innerHTML =
      "Total Supply: " + contractModule.getString(contractModule.totalSupply());
  });
}).catch(console.error);
