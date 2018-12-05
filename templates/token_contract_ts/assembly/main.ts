import "allocator/arena";
export { memory };

import { contractContext, globalStorage, _near_setContractContext } from "./near";
export { _near_setContractContext };

import { u128 } from "./bignum/integer/safe/u128";

function balanceKey(address: Address): string {
  return "balances:" + address.toString(16);
}

function approvedKey(from: Address, to: Address): string {
  return "approved:" + from.toString(16) + ":" +  to.toString(16);
}

let TOTAL_SUPPLY = u128.fromI32(1000000);
export function _init(initialOwner: Address): void {
  globalStorage.setU128(balanceKey(initialOwner), TOTAL_SUPPLY);
}

export function totalSupply(): MoneyNumber {
  return TOTAL_SUPPLY;
}

export function balanceOf(tokenOwner: Address): MoneyNumber {
  let ownerKey = balanceKey(tokenOwner);
  return u128.fromString(globalStorage.getItem(ownerKey) || "0");
}

export function allowance(tokenOwner: Address, spender: Address): MoneyNumber {
  let spenderKey = approvedKey(tokenOwner, spender);
  return u128.fromString(globalStorage.getItem(spenderKey));
}

export function transfer(to: Address, tokens: MoneyNumber): boolean {
  let fromKey = balanceKey(contractContext.sender);
  let toKey = balanceKey(to);
  globalStorage.setU128(fromKey, globalStorage.getU128(fromKey) - tokens);
  globalStorage.setU128(toKey, globalStorage.getU128(toKey) + tokens);
  onTransfer(contractContext.sender, to, tokens);
  return true;
}

export function approve(spender: Address, tokens: MoneyNumber): boolean {
  let spenderKey = approvedKey(contractContext.sender, spender);
  globalStorage.setU128(spenderKey, tokens);
  onApproval(contractContext.sender, spender, tokens);
  return true;
}

export function transferFrom(from: Address, to: Address, tokens: MoneyNumber): boolean {
  let fromKey = balanceKey(from);
  let toKey = balanceKey(to);
  let spenderKey = approvedKey(contractContext.sender, to);
  globalStorage.setU128(fromKey, globalStorage.getU128(fromKey) - tokens);
  globalStorage.setU128(spenderKey, globalStorage.getU128(spenderKey) - tokens);
  globalStorage.setU128(toKey, globalStorage.getU128(toKey) + tokens);
  onTransfer(from, to, tokens);
  return true;
}

declare function onTransfer(from: Address, to: Address, tokens: MoneyNumber): void;
declare function onApproval(tokenOwner: Address, spender: Address, tokens: MoneyNumber): void;

