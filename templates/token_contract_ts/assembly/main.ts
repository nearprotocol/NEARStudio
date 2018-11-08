interface Storage {
  setItem(key:String, value:String): void;
  getItem(key:String): String;
  removeItem(key:String): void;
}

// TODO: Looks like i64 itself needs Polyfill for JS https://github.com/AssemblyScript/assemblyscript/tree/master/examples/i64-polyfill
// TODO: bignum for addresses https://github.com/MaxGraey/bignum.wasm
type Address = i64;

export function totalSupply(): i64 {
  // TODO
  return 0;
}

export function balanceOf(tokenOwner: Address): i64 {
  // TODO
  return 0;
}

export function allowance(tokenOwner: Address, spender: Address): i64 {
  // TODO
  return 0;
}

export function transfer(to: Address, tokens: i64): boolean {
  // TODO
  return false;
}

export function approve(spender: Address, tokens: i64): boolean {
  // TODO
  return false;
}

export function transferFrom(from: Address, to: Address, tokens: i64): boolean {
  // TODO
  return false;
}

declare function onTransfer(from: Address, to: Address, tokens: i64): void;
declare function onApproval(tokenOwner: Address, spender: Address, tokens: i64): void;

