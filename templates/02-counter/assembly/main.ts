//@nearfile
import { storage, logging } from "near-runtime-ts";

// --- contract code goes below

export function incrementCounter(): void {
  let newCounter = storage.getPrimitive<i32>("counter", 0) + 1;
  storage.set<i32>("counter", newCounter);
  logging.log("Counter is now: " + newCounter.toString());
}

export function decrementCounter(): void {
  let newCounter = storage.getPrimitive<i32>("counter", 0) - 1;
  storage.set<i32>("counter", newCounter);
  logging.log("Counter is now: " + newCounter.toString());
}

export function getCounter(): i32 {
  return storage.getPrimitive<i32>("counter", 0);
}
