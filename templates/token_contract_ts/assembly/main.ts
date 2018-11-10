import "allocator/arena";
import { u128 } from "./bignum/integer/u128";

export { memory };

type Address = u128;
type MoneyNumber = u128;

class ContractContext {
  sender: Address;
}

declare function _near_globalStorage_setItem(key: string, value: string): void;
declare function _near_globalStorage_getItem(key: string): string;
declare function _near_globalStorage_removeItem(key: string): void;

class GlobalStorage {
  setItem(key: string, value: string): void {
    _near_globalStorage_setItem(key, value);
  }
  getItem(key: string): string {
    return _near_globalStorage_getItem(key);
  }
  removeItem(key: string): void {
    _near_globalStorage_removeItem(key);
  }
  setU128(key: string, value: u128): void {
    this.setItem(key, value.toString());
  }
  getU128(key: string): u128 {
    return u128.fromString(this.getItem(key) || "0");
  }
}

var globalStorage: GlobalStorage;
var contractContext: ContractContext;

export function _near_setContractContext(sender: Address): void {
  contractContext = new ContractContext();
  contractContext.sender = sender;
}

function balanceKey(address: Address): string {
  return "balances:" + address.toString(16);
}

function approvedKey(from: Address, to: Address): string {
  return "approved:" + from.toString(16) + ":" +  to.toString(16);
}

export function totalSupply(): MoneyNumber {
  // TODO: There should be some way to issue tokens
  return u128.fromI32(1337);
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

