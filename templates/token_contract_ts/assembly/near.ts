import { u128 } from "./bignum/integer/safe/u128";

// TODO: Figure out what's best way to export these types from near module. Looks like type automatically exported.
// TODO: I guess wrapper classes might be needed, which also allows to select subset of relevant ops
type Address = u128;
type MoneyNumber = u128;

class ContractContext {
  // TODO: Should return u256 instead
  get sender(): string {
    // TODO: Use Uint8Array
    let arr = new Uint8Array(32);
    sender_id(arr.buffer.data);
    return bin2hex(arr);
  }
}

export class GlobalStorage {
  setItem(key: string, value: string): void {
    storage_write(<usize>key, <usize>value);
  }
  getItem(key: string): string {
    let len = storage_read_len(<usize>key);
    let buf = memory.allocate(len);
    storage_read_into(<usize>key, buf);
    return <string>buf;
  }
  removeItem(key: string): void {
    assert(false, "storage_remove not implemented yet.");
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

function bin2hex(bin: Uint8Array, uppercase: boolean = false): string {
    let hex = uppercase ? "0123456789ABCDEF" : "0123456789abcdef";
    let str = "";
    for (let i = 0, len = bin.length; i < len; i++) {
        str += hex.charAt((bin[i] >>> 4) & 0x0f) + hex.charAt(bin[i] & 0x0f);
    }
    return str;
}

// TODO: Other functions exposed by runtime should be defined here

@external("env", "storage_write")
declare function storage_write(key: usize, value: usize): void;
@external("env", "storage_read_len")
declare function storage_read_len(key: usize): usize;
@external("env", "storage_read_into")
declare function storage_read_into(key: usize, value: usize): void;

@external("env", "input_read_len")
declare function input_read_len(): u32;
@external("env", "input_read_into")
declare function input_read_into(ptr: usize): void;

// Alias is standard length prefix buffer, but ID is always 32 bytes.
@external("env", "account_alias_to_id")
declare function account_alias_to_id(account_alias: usize, account_id: usize) : void;
// Sender's account id. Writes 32 bytes.
@external("env", "sender_id")
declare function sender_id(account_id: usize) : void;
// Current account id. Writes 32 bytes.
@external("env", "account_id")
declare function account_id(account_id: usize) : void;

@external("env", "return_value")
declare function return_value(value_ptr: u32): void;

/*
    // First 4 bytes are the length of the remaining buffer.
    fn storage_write(key: *const u8, value: *const u8);
    fn storage_read_len(key: *const u8) -> u32;
    fn storage_read_into(key: *const u8, value: *mut u8);

    fn input_read_len() -> u32;
    fn input_read_into(value: *mut u8);

    fn result_count() -> u32;
    fn result_is_ok(index: u32) -> bool;
    fn result_read_len(index: u32) -> u32;
    fn result_read_into(index: u32, value: *mut u8);

    fn return_value(value: *const u8);
    fn return_promise(promise_index: u32);

    // Alias is standard length prefix buffer, but ID is always 32 bytes.
    fn account_alias_to_id(account_alias: *const u8, account_id: *mut u8);
    // Sender's account id. Writes 32 bytes.
    fn sender_id(account_id: *mut u8);
    // Current account id. Writes 32 bytes.
    fn account_id(account_id: *mut u8);

    // AccountID is just 32 bytes without the prefix length.
    fn promise_create(
        account_id: *const u8,
        method_name: *const u8,
        arguments: *const u8,
        mana: u32,
        amount: u64,
    ) -> u32;

    fn promise_then(
        promise_index: u32,
        method_name: *const u8,
        arguments: *const u8,
        mana: u32,
    ) -> u32;

    fn promise_and(promise_index1: u32, promise_index2: u32) -> u32;

    fn balance() -> u64;
    fn mana_left() -> u32;
    fn gas_left() -> u64;
    fn received_amount() -> u64;
    fn assert(expr: bool);
*/