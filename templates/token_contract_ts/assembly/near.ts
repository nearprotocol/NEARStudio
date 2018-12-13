import { u128 } from "./bignum/integer/safe/u128";

// TODO: Figure out what's best way to export these types from near module. Looks like type automatically exported.
// TODO: I guess wrapper classes might be needed, which also allows to select subset of relevant ops
type Address = u128;
type MoneyNumber = u128;

class ContractContext {
  sender: string;
}

declare function _near_globalStorage_setItem(key: string, value: string): void;
declare function _near_globalStorage_getItem(key: string): string;
declare function _near_globalStorage_removeItem(key: string): void;

export class GlobalStorage {
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

export let globalStorage: GlobalStorage = new GlobalStorage();
export let contractContext: ContractContext = new ContractContext();

export function _near_setContractContext(sender: string): void {
  contractContext = new ContractContext();
  contractContext.sender = sender;
} 