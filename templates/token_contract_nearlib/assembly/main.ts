import "allocator/arena";
export { memory };

import { contractContext, globalStorage, near } from "./near";

import { u128 } from "./bignum/integer/safe/u128";

// --- contract code goes below
// --- bigints temporarily stringly typed, need support in bindgen

function balanceKey(address: string): string {
  return "balances:" + address;
}

function approvedKey(from: string, to: string): string {
  return "approved:" + from + ":" +  to;
}

let TOTAL_SUPPLY = u128.fromI32(1000000);
export function _init(initialOwner: string): void {
  near.log("initialOwner: " + initialOwner);
  globalStorage.setU128(balanceKey(initialOwner), TOTAL_SUPPLY);
}

export function totalSupply(): string {
  return TOTAL_SUPPLY.toString();
}

export function balanceOf(tokenOwner: string): string {
  let ownerKey = balanceKey(tokenOwner);
  near.log("balanceOf: " + tokenOwner);
  let result = globalStorage.getItem(ownerKey) || "0";
  near.log("result: " + result);
  return result;
}

export function allowance(tokenOwner: string, spender: string): string {
  let spenderKey = approvedKey(tokenOwner, spender);
  return globalStorage.getItem(spenderKey);
}

export function transfer(to: string, tokens: string): boolean {
  near.log("transfer: " + to + " tokens: " + tokens);
  let fromKey = balanceKey(contractContext.sender.toString());
  let toKey = balanceKey(to);
  let tokensNum = u128.fromString(tokens);
  near.log("from: " + fromKey + " to: " + toKey);
  globalStorage.setU128(fromKey, globalStorage.getU128(fromKey) - tokensNum);
  globalStorage.setU128(toKey, globalStorage.getU128(toKey) + tokensNum);
  //onTransfer(contractContext.sender, to, tokens);
  return true;
}

export function approve(spender: string, tokens: string): boolean {
  let spenderKey = approvedKey(contractContext.sender.toString(), spender);
  globalStorage.setU128(spenderKey, u128.fromString(tokens));
  //onApproval(contractContext.sender, spender, tokens);
  return true;
}

export function transferFrom(from: string, to: string, tokens: string): boolean {
  let fromKey = balanceKey(from);
  let toKey = balanceKey(to);
  let spenderKey = approvedKey(contractContext.sender.toString(), to);
  let tokensNum = u128.fromString(tokens);
  globalStorage.setU128(fromKey, globalStorage.getU128(fromKey) - tokensNum);
  globalStorage.setU128(spenderKey, globalStorage.getU128(spenderKey) - tokensNum);
  globalStorage.setU128(toKey, globalStorage.getU128(toKey) + tokensNum);
  //onTransfer(from, to, tokens);
  return true;
}

/*
declare function onTransfer(from: Address, to: Address, tokens: MoneyNumber): void;
declare function onApproval(tokenOwner: Address, spender: Address, tokens: MoneyNumber): void;
*/