const animateClass = 'glyphicon-refresh-animate';
const loadingHtml = '<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> Loading'; 
const appTitle = 'NEAR Guest Book';
const walletBaseUrl = 'https://wallet.nearprotocol.com';

let config;
let walletAccount;
let accountId;
let contractId;
let baseUrl;
let near;
let contract;
let refreshTimeout;

function singIn() {
  $('#login-button').click(() => {
    walletAccount.requestSignIn(
      contractId,
      appTitle,
      baseUrl + '/',
      baseUrl + '/',
    );
  });
}

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

function refreshMessages() {
  if (!!refreshTimeout) {
    clearTimeout(refreshTimeout);
    refreshTimeout = null;
  }
  refreshTimeout = setTimeout(refreshMessages, 5000);
  if (document.hidden) {
    return;
  }
  $('#refresh-span').addClass(animateClass);
  contract.getMessages({})
    .then(renderMessages)
    .catch(console.log);
}

function submitMessage() {
  let text = $('#text-message').val();
  $('#text-message').val('');
  contract.addMessage({text})
    .then(() => {
      $('#refresh-span').addClass(animateClass);
      setTimeout(() => {
        refreshMessages();
      }, 500);
    })
    .catch(config.log);
}

function run() {
  $('#sign-in-container').addClass('hidden');
  $('#guest-book-container').removeClass('hidden');
  $('#logout-option').removeClass('hidden');

  $('.account-id').text(accountId);
  $('#messages').html(loadingHtml);

  $('#text-message').focus();

  $('#logout-button').click(() => {
    walletAccount.signOut();
    window.location.replace(baseUrl + '/');
  });

  $('#refresh-button').click(refreshMessages);
  $('#text-message').keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault();
      submitMessage();
      return false;
    }
  });
  $('#submit-tx-button').click(submitMessage);

  refreshMessages();
}

async function init() {
  config = await nearlib.dev.getConfig();
  contractId = config.contractName;
  baseUrl = "https://app.near.ai/" + contractId.substring(contractId.length - 9);
  
  walletAccount = new nearlib.WalletAccount(contractId, walletBaseUrl);

  let near;
  if (!walletAccount.isSignedIn()) {
    singIn();
  } else {
    accountId = walletAccount.getAccountId();
    near = new nearlib.Near(new nearlib.NearClient(
        walletAccount,
        new nearlib.LocalNodeConnection(config.nodeUrl),
    ));

    contract = await near.loadContract(config.contractName, {
      viewMethods: ["getMessages"],
      changeMethods: ["addMessage"],
      sender: accountId,
    });
    run();
  }
}

init();