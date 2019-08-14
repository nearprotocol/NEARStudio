// Connects to NEAR and provides `near`, `walletAccount` and `contract` objects in `window` scope
async function connect() {
  // Initializing connection to the NEAR node.
  window.near = await nearlib.connect(Object.assign(nearConfig, { deps: { keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore() }}));

  // Initializing Wallet based Account. It can work with NEAR DevNet wallet that
  // is hosted at https://wallet.nearprotocol.com
  window.walletAccount = new nearlib.WalletAccount(window.near);

  // Getting the Account ID. If unauthorized yet, it's just empty string.
  if (window.walletAccount.getAccountId()) {
    //Creating account object
    account = await near.account(await window.walletAccount.getAccountId());
    // Initializing our contract APIs by contract name and configuration.
    window.contract = new nearlib.Contract(account, nearConfig.contractName, {
    // NOTE: This configuration only needed while NEAR is still in development
    // View methods are read only. They don't modify the state, but usually return some value.
    viewMethods: ["getCounter"],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ["incrementCounter", "decrementCounter"],
    });
  }
}

function updateUI() {
  if (!window.walletAccount.getAccountId()) {
    Array.from(document.querySelectorAll('.sign-in')).map(it => it.style = "display: block;");
  } else {
    Array.from(document.querySelectorAll('.after-sign-in')).map(it => it.style = "display: block;");
  }
}

// Log in user using NEAR Wallet on "Sign In" button click
document.querySelector('.sign-in .btn').addEventListener('click', () => {
  walletAccount.requestSignIn(nearConfig.contractName, 'NEAR Studio Counter');
});

document.querySelector('.sign-out .btn').addEventListener('click', () => {
  walletAccount.signOut();
  // TODO: Move redirect to .signOut() ^^^
  window.location.replace(window.location.origin + window.location.pathname);
});

window.nearInitPromise = connect()
  .then(updateUI)
  .catch(console.error);
