# HelloWorld example in AssemblyScript

## Description

The contract implements a single function to return "Hello, World!":
```
export function hello(): string {
  return "Hello, World!";
}
```

## To Run

*In NEAR Studio (https://studio.nearprotocol.com)*

1. Click the "Run" button on the top of the Studio window

2. You will be redirected to the new window that should display the following:
    
    
    Contract says:

    # Hello, World!


## To Test

*In NEAR Studio (https://studio.nearprotocol.com)*

1. Click the "Test" button on the top of the Studio window

2. You will be redirected to the output for the JavaScript tests described in `src/test.js` to show that the contract is performing properly.

## To Explore

- `assembly/main.ts` for the contract code
- `src/main.html` for the front-end HTML
- `src/main.js` for the JavaScript front-end code and how to integrate contracts
- `src/test.js` for the JS tests for the contract


