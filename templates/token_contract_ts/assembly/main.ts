import "allocator/arena";
import { u128 } from "./bignum/integer/u128";

interface Storage {
  setItem(key:String, value:String): void;
  getItem(key:String): String;
  removeItem(key:String): void;
}

type Address = u128;
type MoneyNumber = u128;

export function totalSupply(): MoneyNumber {
  // TODO
  return u128.fromI32(1337);
}

export function balanceOf(tokenOwner: Address): MoneyNumber {
  // TODO
  return u128.Zero;
}

export function allowance(tokenOwner: Address, spender: Address): MoneyNumber {
  // TODO
  return u128.Zero;
}

export function transfer(to: Address, tokens: MoneyNumber): boolean {
  // TODO
  return false;
}

export function approve(spender: Address, tokens: MoneyNumber): boolean {
  // TODO
  return false;
}

export function transferFrom(from: Address, to: Address, tokens: MoneyNumber): boolean {
  // TODO
  return false;
}

declare function onTransfer(from: Address, to: Address, tokens: MoneyNumber): void;
declare function onApproval(tokenOwner: Address, spender: Address, tokens: MoneyNumber): void;

