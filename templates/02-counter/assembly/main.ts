import { context, storage, near } from "./near";

// --- contract code goes below

export function incrementCounter(): void {
  let newCounter = storage.get<i32>("counter") + 1;
  storage.set<i32>("counter", newCounter);
  near.log("Counter is now: " + newCounter.toString());
}

export function decrementCounter(): void {
  let newCounter = storage.get<i32>("counter") - 1;
  storage.set<i32>("counter", newCounter);
  near.log("Counter is now: " + newCounter.toString());
}

export function getCounter(): i32 {
  return storage.get<i32>("counter");
}
