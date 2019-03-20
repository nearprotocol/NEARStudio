import "allocator/arena";
export { memory };

import { context, storage, near } from "./near";

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
  assert(storage.getItem("init") == null, "Already initialized token supply");
  storage.setU64(balanceKey(initialOwner), TOTAL_SUPPLY);
  storage.setItem("init", "done");
}

export function totalSupply(): string {
  return TOTAL_SUPPLY.toString();
}

export function balanceOf(tokenOwner: string): u64 {
  let ownerKey = balanceKey(tokenOwner);
  near.log("balanceOf: " + tokenOwner);
  let result = storage.getU64(ownerKey);
  near.log("result: " + result.toString());
  return result;
}

export function allowance(tokenOwner: string, spender: string): u64 {
  let spenderKey = approvedKey(tokenOwner, spender);
  return storage.getU64(spenderKey);
}

export function transfer(to: string, tokens: u64): boolean {
  near.log("transfer: " + to + " tokens: " + tokens.toString());
  let fromKey = balanceKey(context.sender);
  let toKey = balanceKey(to);
  near.log("from: " + fromKey + " to: " + toKey);
  let fromAmount = storage.getU64(fromKey);
  assert(fromAmount >= tokens, "not enough tokens on account");
  storage.setU64(fromKey, fromAmount - tokens);
  storage.setU64(toKey, storage.getU64(toKey) + tokens);
  return true;
}

export function approve(spender: string, tokens: u64): boolean {
  let spenderKey = approvedKey(context.sender, spender);
  storage.setU64(spenderKey, tokens);
  return true;
}

export function transferFrom(from: string, to: string, tokens: u64): boolean {
  let fromKey = balanceKey(from);
  let toKey = balanceKey(to);
  let spenderKey = approvedKey(context.sender, to);
  let fromAmount = storage.getU64(fromKey);
  assert(fromAmount >= tokens, "not enough tokens on account");
  storage.setU64(fromKey, fromAmount - tokens);
  let approvedAmount = storage.getU64(spenderKey)
  assert(fromAmount >= tokens, "not enough tokens approved");
  storage.setU64(spenderKey, approvedAmount - tokens);
  storage.setU64(toKey, storage.getU64(toKey) + tokens);
  return true;
}
