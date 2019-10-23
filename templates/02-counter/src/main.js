// Connects to NEAR and provides `near`, `walletAccount` and `contract` objects in `window` scope
async function connect() {
  // Initializing connection to the NEAR node.
  window.near = await nearlib.connect(Object.assign(nearConfig, { deps: { keyStore: new nearlib.keyStores.BrowserLocalStorageKeyStore() }}));

  // Needed to access wallet login
  window.walletAccount = new nearlib.WalletAccount(window.near);

  // Initializing our contract APIs by contract name and configuration.
  window.contract = await near.loadContract(nearConfig.contractName, {
    viewMethods: ["getCounter"],
    changeMethods: ["incrementCounter", "decrementCounter", "resetCounter"],
    sender: window.walletAccount.getAccountId()
  });
}

function updateUI() {
  if (!window.walletAccount.getAccountId()) {
    Array.from(document.querySelectorAll('.sign-in')).map(it => it.style = "display: block;");
  } else {
    Array.from(document.querySelectorAll('.after-sign-in')).map(it => it.style = "display: block;");
    contract.getCounter().then(count => {
      document.querySelector('#show').classList.replace('loader','number')
      document.querySelector('#show').innerText = count == undefined ? "calculating..." : count
      document.querySelector('#left').classList.toggle('eye')
      document.querySelectorAll('button').forEach(button => button.disabled = false)
      if (count >= 0) {
        document.querySelector('#mouth').classList.replace('cry','smile')
      }else {
        document.querySelector('#mouth').classList.replace('smile','cry')
      }
      if (count > 20 || count < -20) {
        document.querySelector('.tongue').style.display = 'block'
      }else {
        document.querySelector('.tongue').style.display = 'none'
      }
    })
  }
}

// counter method
let value = 1

document.querySelector('#plus').addEventListener('click', ()=>{
  document.querySelectorAll('button').forEach(button => button.disabled = true)
  document.querySelector('#show').classList.replace('number','loader')
  document.querySelector('#show').innerText = ''
  contract.incrementCounter({value:value}).then(updateUI)
})
document.querySelector('#minus').addEventListener('click', ()=>{
  document.querySelectorAll('button').forEach(button => button.disabled = true)
  document.querySelector('#show').classList.replace('number','loader')
  document.querySelector('#show').innerText = ''
  contract.decrementCounter({value:value}).then(updateUI)
})
document.querySelector('#a').addEventListener('click', ()=>{
  document.querySelectorAll('button').forEach(button => button.disabled = true)
  document.querySelector('#show').classList.replace('number','loader')
  document.querySelector('#show').innerText = ''
  contract.resetCounter().then(updateUI)
})
document.querySelector('#c').addEventListener('click', ()=>{
  document.querySelector('#left').classList.toggle('eye')
})
document.querySelector('#b').addEventListener('click', ()=>{
  document.querySelector('#right').classList.toggle('eye')
})
document.querySelector('#d').addEventListener('click', ()=>{
  document.querySelector('.dot').classList.toggle('on')
  if (document.querySelector('.dot').classList.contains('on')) {
    value = 10
  }else { 
    value = 1
  }
})
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
