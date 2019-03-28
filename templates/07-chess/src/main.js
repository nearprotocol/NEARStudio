// Initializing contract
async function doInitContract() {
  // Getting config from cookies that are provided by the NEAR Studio.
  const config = await nearlib.dev.getConfig();
  window.config = config;
  console.log("nearConfig", config);
  
  // Initializing Wallet based Account. It can work with NEAR DevNet wallet that
  // is hosted at https://wallet.nearprotocol.com
  // The wallet is managing the accounts and keys for the user using localStorage.
  // It never exposes the keys to the application, so in order to send transactions
  // on behalf of the user we need to talk to the wallet page.
  // To talk to the wallet we use the in-browser iframe messaging system and auth tokens.
  // Then wallet uses keys from the local storage under wallet.nearprotocol.com
  // and signs the transaction and returns it back to our app.
  const walletBaseUrl = 'https://wallet.nearprotocol.com';
  window.walletAccount = new nearlib.WalletAccount(config.contractName, walletBaseUrl);

  // Getting the Account ID. If unauthorized yet, it's just empty string.
  window.accountId = window.walletAccount.getAccountId();
  
  // Initializing near and near client from the nearlib.
  near = new nearlib.Near(new nearlib.NearClient(
      window.walletAccount,
      // We need to provide a connection to the blockchain node which we're going to use
      new nearlib.LocalNodeConnection(config.nodeUrl),
  ));
  
  // Initializing our contract APIs by contract name and configuration.
  window.contract = await near.loadContract(config.contractName, {
    // NOTE: This configuration only needed while NEAR is still in development
    // View methods are read only. They don't modify the state, but usually return some value. 
    viewMethods: ["getCurrentGame", "getGame"],
    // Change methods can modify the state. But you don't receive the returned value when called.
    changeMethods: ["createOrJoinGame", "makeMove"],
    // Sender is the account ID to initialize transactions.
    sender: window.accountId,
  });

  // Once everything is ready, we can start using contract
  return doWork();
}

// Using initialized contract
async function doWork() {
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
      window.config.contractName,
      // This is the app name. It can be anything.
      'NEAR Chess',
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

  document.querySelector('.new-game').addEventListener('click', () => {
    newGame().catch(console.error); 
  });

  document.getElementById('sign-out-button').addEventListener('click', () => {
    walletAccount.signOut();
    // Forcing redirect.
    window.location.replace(window.location.origin + window.location.pathname);
  });

  loadGame().catch(console.error);
}

let serverGame;
let gameId;
let playerSide;
async function loadGame() {
  gameId = await window.contract.getCurrentGame({player: window.accountId});
  console.log("gameId", gameId);
  serverGame = await window.contract.getGame({gameId});
  console.log("game", serverGame);
  updateServerStatus();

  if (serverGame.player1 == window.accountId) {
    playerSide = "w";
  }
  if (serverGame.player2 == window.accountId) {
    playerSide = "b";
  }

  if (game.fen() != serverGame.fen) {
    game.load(serverGame.fen);
    updateBoard();
  }

  if (game.turn() != playerSide) {
    setTimeout(() => loadGame().catch(console.error), 3000);
  }
}

async function newGame() {
  await window.contract.createOrJoinGame();
  await loadGame();
}

let board;
let game = new Chess();

// do not pick up pieces if the game is over
// only pick up pieces for the side to move
var onDragStart = function(source, piece, position, orientation) {
  if (game.game_over() === true ||
      (game.turn() === 'w' && piece.search(/^b/) !== -1) ||
      (game.turn() === 'b' && piece.search(/^w/) !== -1)) {
    return false;
  }
};

var onDrop = function(source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  });

  // illegal move
  if (move === null) return 'snapback';

  updateStatus();

  // Make move on chain
  window.contract.makeMove({gameId, fen: game.fen()}).finally(loadGame);
};

// update the board position after the piece snap 
// for castling, en passant, pawn promotion
var onSnapEnd = function() {
  board.position(game.fen());
};

function updateBoard() {
  board.position(game.fen());
  updateStatus();
}

function getStatusText() {
  let moveColor = game.turn() === 'b' ? 'Black' : 'White';

  // checkmate?
  if (game.in_checkmate() === true) {
    return 'Game over, ' + moveColor + ' is in checkmate.';
  }

  // draw?
  else if (game.in_draw() === true) {
    return 'Game over, drawn position';
  }

  // game still on
  else {
    let status = moveColor + ' to move';

    // check?
    if (game.in_check() === true) {
      return status + ', ' + moveColor + ' is in check';
    }

    return status;
  }

  return '';
} 
 
function updateStatus() {
  $('.status').text(getStatusText());
  updateServerStatus();
}

function getServerStatus() {
  if (!serverGame || !serverGame.player2) {
    return 'Waiting for player to join...';
  } 
  
  return `Playing with ${serverGame.player2}`;
}

function updateServerStatus() {
  $('.server-status').html(getServerStatus());
}

var cfg = {
  pieceTheme: 'http://chessboardjs.com/img/chesspieces/alpha/{piece}.png',
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
};
board = ChessBoard('board', cfg);

updateStatus();


// COMMON CODE BELOW:
// Loads nearlib and this contract into window scope.

window.nearInitPromise = doInitContract().catch(console.error);







