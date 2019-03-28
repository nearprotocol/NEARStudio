# NEAR Chess

## Description

This example demonstrates how to create on-chain turn-based game (chess in this case) integrated with NEAR Wallet.


## To Run

*In NEAR Studio (https://studio.nearprotocol.com)*

1. Click the "Run" button on the top of the Studio window

2. You will be redirected to the new window where you can interract with the app.
3. You'd be asked to sign-up with NEAR wallet (https://wallet.nearprotocol.com). If you don't have an account yet, then the wallet asks you to create one. 
4. Once you have an account, you would be asked to authorize the application and the contract.
5. Once authorized, you would be redirected back to the application and it would have access to your account ID and be able to issue transactions on behalf of your account. The transactions can only go to the authorized contract and can't include any tokens with them.
6. Press "New Game" and start playing.


## To Test

*In NEAR Studio (https://studio.nearprotocol.com)*

1. Click the "Test" button on the top of the Studio window

2. You will be redirected to the output for the JavaScript tests described in `src/test.js` to show that the contract is performing properly.

## To Explore

- `assembly/main.ts` for the contract code
- `assembly/modelts` for the data model code
- `src/main.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract
