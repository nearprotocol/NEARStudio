// Loads nearlib and this contract into window scope
async function initContract() {
  console.log("nearConfig", nearConfig); 

  window.near = await nearlib.dev.connect();

  window.contract = await near.loadContract(nearConfig.contractName, {
    // NOTE: This configuration only needed while NEAR is still in development
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ["getTodo", "getAllTodos"],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ["setTodo"],
    // Sender is the account ID to initialize transactions.
    // For devnet we create accounts on demand. See other examples on how to authorize accounts.
    sender: nearlib.dev.myAccountId
  });
}

window.nearInitPromise = initContract().catch(console.error);
