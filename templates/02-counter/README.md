# Counter example in AssemblyScript

## Description

This contract implements simple counter backed by storage on blockchain.
Contract in `assembly/main.ts` provides method to increment / decrement counter and get it's current value or reset.

plus and minus button to increase and decrease value. when clicked button L, it will add or minus 10 a time. RS button is for reset. LE and RE button to let the robot wink to you. 

## To Run

*In NEAR Studio (https://studio.nearprotocol.com)*

1. Click the "Run" button on the top of the Studio window

2. You will be redirected to the new window that should display instructions for using counter from JS console.


## To Test

*In NEAR Studio (https://studio.nearprotocol.com)*

1. Click the "Test" button on the top of the Studio window

2. You will be redirected to the output for the JavaScript tests described in `src/test.js` to show that the contract is performing properly.

## To Explore

- `assembly/main.ts` for the contract code
- `src/index.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract


