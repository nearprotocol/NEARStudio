import "allocator/arena";
export { memory };

import { contractContext, globalStorage, near } from "./near";

// --- contract code goes below

export function incrementCounter(): void {
  let newCounter = globalStorage.getU64("counter") + 1;
  globalStorage.setU64("counter", newCounter)
  near.log("Counter is now: " + newCounter.toString());
}

export function decrementCounter(): void {
  let newCounter = globalStorage.getU64("counter") - 1;
  globalStorage.setU64("counter", newCounter)
  near.log("Counter is now: " + newCounter.toString());
}

export function getCounter(): i32 {
  return <i32>globalStorage.getU64("counter");
}
