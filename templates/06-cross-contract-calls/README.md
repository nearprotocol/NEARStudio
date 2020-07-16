# Using Token in AssemblyScript

## Description

This project contains example of contract using token similar to [ERC20](https://theethereum.wiki/w/index.php/ERC20_Token_Standard).

The contract allows multiple participants to lock up same amount of funds in a "deal". They cannot unlock finances until they all confirm that "deal" conditions have been upheld.

This is a back-end contract only so there is no front-end included.


## To Run

*In NEAR Studio (https://studio.nearprotocol.com)*

1. Click the "Run" button on the top of the Studio window

2. You will be redirected to the output for the JavaScript tests described in `src/main.js` to show that the contract is performing properly. This is a fully back-end contract so there is no front end.


## To Explore

See `assembly/main.ts` for the contract code and `src/main.js` for the JavaScript tests which define its usage.

## Usage Example (from JS)

Create a deal to lock 5 tokens between <code>test1.near</code> and <code>vasya.near</code>:

```
await contract.makeDeal({ dealId: DEAL_ID, amount: "5", participants: ["test1.near", "vasya.near"] });
```

Lock funds into the deal:
```
await tokenContract.approve({ spender: "studio-853u597r1", tokens: "5" });
await contract.fundDeal({ dealId: DEAL_ID });
```

To see current state of the deal:
```
await contract.getDeal({ dealId: DEAL_ID });
```

Funds are returned back when all participants confirm deal completion:
```
await contract.confirmDeal({ dealId: DEAL_ID })
```
<code>DEAL_ID</code> can be any unique string used to identify given deal.