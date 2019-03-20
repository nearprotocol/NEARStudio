import "allocator/arena";
export { memory };

import { context, storage, near } from "./near";

// --- contract code goes below

export function incrementCounter(): void {
  let newCounter = storage.getU64("counter") + 1;
  storage.setU64("counter", newCounter)
  near.log("Counter is now: " + newCounter.toString());
}

export function decrementCounter(): void {
  let newCounter = storage.getU64("counter") - 1;
  storage.setU64("counter", newCounter)
  near.log("Counter is now: " + newCounter.toString());
}

export function getCounter(): i32 {
  return <i32>storage.getU64("counter");
}
