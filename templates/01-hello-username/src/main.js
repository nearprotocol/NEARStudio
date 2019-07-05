// Initializing contract
async function initContract() {
  console.log("nearConfig", nearConfig);
  
  // Initializing Wallet based Account. It can work with NEAR DevNet wallet that
  // is hosted at https://wallet.nearprotocol.com
  // The wallet is managing the accounts and keys for the user using localStorage.
  // It never exposes the keys to the application, so in order to send transactions
  // on behalf of the user we need to talk to the wallet page.
  // To talk to the wallet we use the in-browser iframe messaging system and auth tokens.
  // Then wallet uses keys from the local storage under wallet.nearprotocol.com
  // and signs the transaction and returns it back to our app.
  window.walletAccount = new nearlib.WalletAccount(nearConfig.networkId, nearConfig.contractName, nearConfig.walletUrl);

  // Getting the Account ID. If unauthorized yet, it's just empty string.
  window.accountId = window.walletAccount.getAccountId();
  
  // Initializing connection to the NEAR DevNet.
  window.near = await nearlib.connect(Object.assign({ deps: { keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore() } }, nearConfig));
  
  // Initializing our contract APIs by contract name and configuration.
  window.contract = await near.loadContract(nearConfig.contractName, {
    // NOTE: This configuration only needed while NEAR is still in development
    // View methods are read only. They don't modify the state, but usually return some value. 
    viewMethods: ["whoSaidHi"],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ["sayHi"],
    // Sender is the account ID to initialize transactions.
    sender: window.accountId,
  });
}

// Using initialized contract
async function doWork() {
  // Setting up refresh button
  document.getElementById('refresh-button').addEventListener('click', updateWhoSaidHi);

  // Based on whether you've authorized, checking which flow we should go.
  if (!window.walletAccount.isSignedIn()) {
    signedOutFlow();
  } else {
    signedInFlow();
  }
}

// Function that initializes the signIn button using WalletAccount 
function signedOutFlow() {
  // Displaying the signed out flow container.
  document.getElementById('signed-out-flow').classList.remove('d-none');
  // Adding an event to a sing-in button.
  document.getElementById('sign-in-button').addEventListener('click', () => {
    window.walletAccount.requestSignIn(
      // The contract name that would be authorized to be called by the user's account.
      window.nearConfig.contractName,
      // This is the app name. It can be anything.
      'Who was the last person to say "Hi!"?',
      // We can also provide URLs to redirect on success and failure.
      // The current URL is used by default.
    );
  });
}

// Main function for the signed-in flow (already authorized by the wallet).
function signedInFlow() {
  // Displaying the signed in flow container.
  document.getElementById('signed-in-flow').classList.remove('d-none');

  // Displaying current account name.
  document.getElementById('account-id').innerText = window.accountId;

  // Adding an event to a say-hi button.
  document.getElementById('say-hi').addEventListener('click', () => {
    // We call say Hi and then update who said Hi last.
    window.contract.sayHi().then(updateWhoSaidHi);
  });

  // Adding an event to a sing-out button.
  document.getElementById('sign-out-button').addEventListener('click', () => {
    walletAccount.signOut();
    // Forcing redirect.
    window.location.replace(window.location.origin + window.location.pathname);
  });
}

// Function to update who said hi
function updateWhoSaidHi() {
  // JavaScript tip:
  // This is another example of how to use promises. Since this function is not async, 
  // we can't await for `contract.whoSaidHi()`, instead we attaching a callback function
  // usin `.then()`. 
  contract.whoSaidHi().then((who) => {
    // If the result doesn't have a value we fallback to the text
    document.getElementById('who').innerText = who || "Nobody (but you can be the first)";
  });
}

// COMMON CODE BELOW:
// Loads nearlib and this contract into window scope.

window.nearInitPromise = initContract()
  .then(doWork)
  .catch(console.error);

