// Defining some global constants
const animateClass = 'glyphicon-refresh-animate';
const loadingHtml = '<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading'; 
const appTitle = 'NEAR Guest Book';

// Defining global variables that we initialize asynchronously later.
let config;
let walletAccount;
let accountId;
let contractId;
let baseUrl;
let near;
let contract;
let refreshTimeout;

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

// Renders given array of messages
function renderMessages(messages) {
  let objs = []; 
  for (let i = 0; i < messages.length; ++i) {
    objs.push(
      $('<div/>').addClass('row').append([
        $('<div/>').addClass('col-sm-3').append(
          $('<strong/>').text(messages[i].sender)
        ),
        $('<div/>').addClass('col-sm-9').text(messages[i].text),
      ])
    );
  }
  $('#messages').empty().append(objs.reverse());
  $('#refresh-span').removeClass(animateClass);
}

// Calls view function on the contract and sets up timeout to be called again in 5 seconds
// It only calls the contract if the this page/tab is active.
function refreshMessages() {
  // If we already have a timeout scheduled, cancel it
  if (!!refreshTimeout) {
    clearTimeout(refreshTimeout);
    refreshTimeout = null;
  }
  // Schedules a new timeout
  refreshTimeout = setTimeout(refreshMessages, 5000);
  // Checking if the page is not active and exits without requesting messages from the chain
  // to avoid unnecessary queries to the devnet.
  if (document.hidden) {
    return;
  }
  // Adding animation UI
  $('#refresh-span').addClass(animateClass);
  // Calling the contract to read messages which makes a call to devnet.
  // The read call works even if the Account ID is not provided. 
  contract.getMessages({})
    .then(renderMessages)
    .catch(console.log);
}

// Submits a new message to the devnet
function submitMessage() {
  let text = $('#text-message').val();
  $('#text-message').val('');
  // Calls the addMessage on the contract with arguments {text=text}.
  // Behind the scenes:
  //   1) Contract calls near client to schedule a new async call.
  //   2) Near client prepares a new transaction using your current nonce.
  //   3) Near client talks to the Wallet through in-browser iframe messaging system
  //      and asks Wallet to sign this new transaction.
  //   4) Wallet (under wallet.nearprotocol.com) receives the new transaction
  //      and verifies that the contract_id and account_id are legit
  //   5) Wallet signs the hash of the new transaction and replies through the
  //      iframe messaging system back to the near client with the signature.
  //   6) Near client uses the signature and sends the RPC to the devnet.
  //   7) DevNet replies with the transaction hash.
  contract.addMessage({text})
    .then(() => {
      // Starting refresh animation
      $('#refresh-span').addClass(animateClass);
      // Refreshing the messages in 1 seconds to account for the block creation
      setTimeout(() => {
        refreshMessages();
      }, 1000);
    })
    .catch(config.log);
}

// Main function for the signed-in flow (already authorized by the wallet).
function signedInFlow() {
  // Hiding sign-in html parts and showing post message things
  $('#sign-in-container').addClass('hidden');
  $('#guest-book-container').removeClass('hidden');
  $('#logout-option').removeClass('hidden');

  // Displaying the accountId
  $('.account-id').text(accountId);

  // Focusing on the enter message field.
  $('#text-message').focus();

  // Adding handling for logging out
  $('#logout-button').click(() => {
    // It removes the auth token from the local storage.
    walletAccount.signOut();
    // Forcing redirect.
    window.location.replace(baseUrl + '/');
  });

  // Enablid enter key to send messages as well. 
  $('#text-message').keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault();
      submitMessage();
      return false;
    }
  });
  // Post button to send messages
  $('#submit-tx-button').click(submitMessage);
}

// Initialization code
async function init() {
  // Fetching studio/app specific config. It contains contract name and devnet url.
  config = await nearlib.dev.getConfig();
  contractId = config.contractName;
  baseUrl = "https://app.near.ai/" + contractId.substring(contractId.length - 9);

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

  // Initializing near and near client from the nearlib.
  near = new nearlib.Near(new nearlib.NearClient(
      walletAccount,
      new nearlib.LocalNodeConnection(config.nodeUrl),
  ));

  // Initializing the contract.
  // For now we need to specify method names from the contract manually.
  // It also takes the Account ID which it would use for signing transactions.
  contract = await near.loadContract(config.contractName, {
    viewMethods: ["getMessages"],
    changeMethods: ["addMessage"],
    sender: accountId,
  });

  // Initializing messages and starting auto-refreshing.
  $('#messages').html(loadingHtml);
  $('#refresh-button').click(refreshMessages);
  refreshMessages();

  // Based on whether you've authorized, checking which flow we should go.
  if (!walletAccount.isSignedIn()) {
    signedOutFlow();
  } else {
    signedInFlow();
  }
}

init().catch(console.log);