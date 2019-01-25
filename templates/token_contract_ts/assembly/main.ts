import "allocator/arena";
export { memory };

import { contractContext, globalStorage, near } from "./near";

// --- contract code goes below

function balanceKey(address: string): string {
  return "balances:" + address;
}

function approvedKey(from: string, to: string): string {
  return "approved:" + from + ":" +  to;
}

let TOTAL_SUPPLY: u64 = 1000000;
export function _init(initialOwner: string): void {
  near.log("initialOwner: " + initialOwner);
  globalStorage.setU64(balanceKey(initialOwner), TOTAL_SUPPLY);
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
  let fromKey = balanceKey(contractContext.sender);
  let toKey = balanceKey(to);
  let tokensNum = U64.parseInt(tokens);
  near.log("from: " + fromKey + " to: " + toKey);
  let fromAmount = globalStorage.getU64(fromKey);
  assert(fromAmount >= tokensNum, "not enough tokens on account");
  globalStorage.setU64(fromKey, fromAmount - tokensNum);
  globalStorage.setU64(toKey, globalStorage.getU64(toKey) + tokensNum);
  return true;
}

export function approve(spender: string, tokens: string): boolean {
  let spenderKey = approvedKey(contractContext.sender, spender);
  globalStorage.setU64(spenderKey, U64.parseInt(tokens));
  return true;
}

export function transferFrom(from: string, to: string, tokens: string): boolean {
  let fromKey = balanceKey(from);
  let toKey = balanceKey(to);
  let spenderKey = approvedKey(contractContext.sender, to);
  let tokensNum = U64.parseInt(tokens);
  let fromAmount = globalStorage.getU64(fromKey);
  assert(fromAmount >= tokensNum, "not enough tokens on account");
  globalStorage.setU64(fromKey, fromAmount - tokensNum);
  let approvedAmount = globalStorage.getU64(spenderKey)
  assert(fromAmount >= tokensNum, "not enough tokens approved");
  globalStorage.setU64(spenderKey, approvedAmount - tokensNum);
  globalStorage.setU64(toKey, globalStorage.getU64(toKey) + tokensNum);
  return true;
}
