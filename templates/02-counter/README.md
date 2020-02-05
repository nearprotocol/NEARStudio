# Counter example in AssemblyScript

## Description

This contract implements a simple counter backed by storage on blockchain.
Contract in `assembly/main.ts` provides methods to increment & decrement the counter, get the current value, and reset to zero.

The frontend is defined in `src/index.html` and `src/main.js`. It uses a portable-game-console-inspired interface with plus and minus buttons to increase and decrease the counter, as well as some extra goodies: 

* When the L button is toggled, the counter will add or subtract 10 a time
* The RS button resets the countre to zero
* LE and RE make the robot wink at you 😉

## To Run

1. Click the "Run" button on the top of the Studio window
3. You'll be asked to sign up with NEAR wallet (https://wallet.nearprotocol.com) and create an account if you don't have one yet
4. Once you have an account, you'll be asked to authorize the application
5. Once authorized, you'll be redirected back to the application. It will have access to your account ID and will be able to issue transactions on behalf of your account. The transactions can only go to this application's contract, and can't include any tokens.Studio window
6. Start counting!


## To Test

1. Click the "Test" button on the top of the Studio window
2. You will be redirected to the output for the JavaScript tests described in `src/test.js` to show that the contract is performing properly


## To Explore

- `assembly/main.ts` for the contract code
- `src/index.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract


