import "allocator/arena";
export { memory };

import { contractContext, globalStorage, near } from "./near";

// --- contract code goes below

// To be able to call this function in the contract we need to export it
// using `export` keyword. 
export function hello(): string {
  return "Hello, World!";
}
