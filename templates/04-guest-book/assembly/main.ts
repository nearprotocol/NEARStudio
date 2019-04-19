import "allocator/arena";
export { memory };

import { context, storage, near, collections } from "./near";

import { PostedMessage } from "./model.near";

// --- contract code goes below

// The maximum number of latest messages the contract returns.
const MESSAGE_LIMIT = 10;

// collections.vector is a persistent collection. Any changes to it will
// be automatically saved in the storage.
// The parameter to the constructor needs to be unique across a single contract.
// It will be used as a prefix to all keys required to store data in the storage.
let messages = collections.vector<PostedMessage>("m");

// Adds a new message under the name of the sender's account id.
// NOTE: This is a change method. Which means it will modify the state.
// But right now we don't distinguish them with annotations yet.
export function addMessage(text: string): void {
  // Creating a new message and populating fields with our data
  let message: PostedMessage = {
    sender: context.sender,
    text: text
  };
  // Adding the message to end of the the persistent collection
  messages.push(message);
}

// Returns an array of last N messages.
// NOTE: This is a view method. Which means it should NOT modify the state.
export function getMessages(): Array<PostedMessage> {
  let numMessages = min(MESSAGE_LIMIT, messages.length);
  let startIndex = messages.length - numMessages;
  let result = new Array<PostedMessage>(numMessages);
  for (let i = 0; i < numMessages; i++) {
    result[i] = messages[i + startIndex];
  }
  return result;
}
