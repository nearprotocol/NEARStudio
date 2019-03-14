// Defining some global constants
const animateClass = 'glyphicon-refresh-animate';
const loadingHtml = '<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading'; 
const appTitle = 'NEAR DAI Bridge';

// Defining global variables that we initialize asynchronously later.
let config;
let walletAccount;
let accountId;
let contractId;
let baseUrl;
let near;
let contract;
let refreshTimeout;

// TODO: This should point to ERC-20 compatible contract on NEAR
let TOKEN_CONTRACT = "studio-31fz6jnjv";
let tokenContract;

// Function that initializes the signIn button using WalletAccount 
function signedOutFlow() {
  $('#login-button').click(() => {
    walletAccount.requestSignIn(
      contractId,
      appTitle,
      baseUrl + '/',
      baseUrl + '/',
    );
  });
}

// Main function for the signed-in flow (already authorized by the wallet).
function signedInFlow() {
  // Hiding sign-in html parts and showing post message things
  $('#sign-in-container').addClass('hidden');
  $('#guest-book-container').removeClass('hidden');
  $('#logout-option').removeClass('hidden');

  // Displaying the accountId
  $('.account-id').text(accountId);
  // Adding handling for logging out
  $('#logout-button').click(() => {
    // It removes the auth token from the local storage.
    walletAccount.signOut();
    // Forcing redirect.
    window.location.replace(baseUrl + '/');
  });

  tokenContract.balanceOf({'tokenOwner': accountId}).then(x => $('#near-balance').text(x));
}

// Initialization code
async function init() {
  // Fetching studio/app specific config. It contains contract name and devnet url.
  config = await nearlib.dev.getConfig();
  contractId = config.contractName;
  baseUrl = config.appUrl;

  // Enable wallet link now that config is available
  $('a.wallet').removeClass('disabled').attr('href', config.walletUrl);

  // Initializing Wallet based Account. It can work with NEAR DevNet wallet that
  // is hosted at https://wallet.nearprotocol.com
  // The wallet is managing the accounts and keys for the user using localStorage.
  // It never exposes the keys to the application, so in order to send transactions
  // on behalf of the user we need to talk to the wallet page.
  // To talk to the wallet we use the in-browser iframe messaging system and auth tokens.
  // Then wallet uses keys from the local storage under wallet.nearprotocol.com
  // and signs the transaction and returns it back to our app.
  walletAccount = new nearlib.WalletAccount(contractId, config.walletUrl);

  // Getting the Account ID. If unauthorized yet, it's just empty string.
  accountId = walletAccount.getAccountId();

  console.log("accountId", accountId);

  // Initializing near and near client from the nearlib.
  near = new nearlib.Near(new nearlib.NearClient(
      walletAccount,
      new nearlib.LocalNodeConnection(config.nodeUrl),
  ));

  // Initializing the contract.
  // For now we need to specify method names from the contract manually.
  // It also takes the Account ID which it would use for signing transactions.
  contract = await near.loadContract(config.contractName, {
    viewMethods: ["getDeal"],
    changeMethods: ["makeDeal", "fundDeal", "cancelDeal", "confirmDeal"],
    sender: accountId,
  });

  tokenContract = await near.loadContract(TOKEN_CONTRACT, {
    viewMethods: ["totalSupply", "balanceOf", "allowance"],
    changeMethods: ["init", "transfer", "approve", "transferFrom"],
    sender: accountId,
  });

  // Based on whether you've authorized, checking which flow we should go.
  if (!walletAccount.isSignedIn()) {
    signedOutFlow();
  } else {
    signedInFlow();
  }
}

init().catch(console.log);