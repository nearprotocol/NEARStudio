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
export function init(initialOwner: string): void {
  near.log("initialOwner: " + initialOwner);
  assert(globalStorage.getItem("init") == null, "Already initialized token supply");
  globalStorage.setU64(balanceKey(initialOwner), TOTAL_SUPPLY);
  globalStorage.setItem("init", "done");
}

export function totalSupply(): string {
  return TOTAL_SUPPLY.toString();
}

export function balanceOf(tokenOwner: string): u64 {
  let ownerKey = balanceKey(tokenOwner);
  near.log("balanceOf: " + tokenOwner);
  let result = globalStorage.getU64(ownerKey);
  near.log("result: " + result.toString());
  return result;
}

export function allowance(tokenOwner: string, spender: string): u64 {
  let spenderKey = approvedKey(tokenOwner, spender);
  return globalStorage.getU64(spenderKey);
}

export function transfer(to: string, tokens: u64): boolean {
  near.log("transfer: " + to + " tokens: " + tokens.toString());
  let fromKey = balanceKey(contractContext.sender);
  let toKey = balanceKey(to);
  near.log("from: " + fromKey + " to: " + toKey);
  let fromAmount = globalStorage.getU64(fromKey);
  assert(fromAmount >= tokens, "not enough tokens on account");
  globalStorage.setU64(fromKey, fromAmount - tokens);
  globalStorage.setU64(toKey, globalStorage.getU64(toKey) + tokens);
  return true;
}

export function approve(spender: string, tokens: u64): boolean {
  let spenderKey = approvedKey(contractContext.sender, spender);
  globalStorage.setU64(spenderKey, tokens);
  return true;
}

export function transferFrom(from: string, to: string, tokens: u64): boolean {
  let fromKey = balanceKey(from);
  let toKey = balanceKey(to);
  let spenderKey = approvedKey(contractContext.sender, to);
  let fromAmount = globalStorage.getU64(fromKey);
  assert(fromAmount >= tokens, "not enough tokens on account");
  globalStorage.setU64(fromKey, fromAmount - tokens);
  let approvedAmount = globalStorage.getU64(spenderKey)
  assert(fromAmount >= tokens, "not enough tokens approved");
  globalStorage.setU64(spenderKey, approvedAmount - tokens);
  globalStorage.setU64(toKey, globalStorage.getU64(toKey) + tokens);
  return true;
}
