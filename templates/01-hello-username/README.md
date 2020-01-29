# Example of NEAR Wallet integration

## Description

This example demonstrates how to integrate your application with NEAR Wallet.

The contract is quite simple. It stores the `account_id` of last sender and return it. It also shows how you can debug contracts using logs.


## To Run

1. Click the "Run" button on the top of the Studio window
2. You will be redirected to the new window where you can interact with the app
3. You'll be asked to sign up with NEAR wallet (https://wallet.nearprotocol.com) and create an account if you don't have one yet
4. Once you have an account, you'll be asked to authorize the application
5. Once authorized, you'll be redirected back to the application. It will have access to your account ID and will be able to issue transactions on behalf of your account. The transactions can only go to this application's contract, and can't include any tokens.
6. "Say Hi!"


## To Test

1. Click the "Test" button on the top of the Studio window
2. You will be redirected to the output for the JavaScript tests described in `src/test.js` to show that the contract is performing properly

## To Explore

- `assembly/main.ts` for the contract code
- `src/index.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract
