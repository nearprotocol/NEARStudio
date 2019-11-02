// Connects to NEAR and provides `near`, `walletAccount` and `contract` objects in `window` scope
async function connect() {
  // Initializing connection to the NEAR node.
  window.near = await nearlib.connect(Object.assign(nearConfig, { deps: { keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore() }}));

  // Needed to access wallet login
  window.walletAccount = new nearlib.WalletAccount(window.near);

  // Initializing our contract APIs by contract name and configuration.
  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ['totalSupply', 'balanceOf', 'allowance'],
    changeMethods: ['init', 'transfer', 'approve', 'transferFrom'],
    sender: window.walletAccount.getAccountId()
  });
}

function updateUI() {
  if (!window.walletAccount.getAccountId()) {
    Array.from(document.querySelectorAll('.sign-in')).map(it => it.style = 'display: block;');
  } else {
    Array.from(document.querySelectorAll('.after-sign-in')).map(it => it.style = 'display: block;');
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
