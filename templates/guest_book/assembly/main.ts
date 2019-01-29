import "allocator/arena";
export { memory };

import { contractContext, globalStorage, near } from "./near";

import { PostedMessage } from "./model.near";

// --- contract code goes below

// The maximum number of latest messages the contract returns.
const MESSAGE_LIMIT: u64 = 10;
const NUM_MESSAGES_KEY = "num_messages";
const MESSAGE_ID_KEY_PREFIX = "message:";

// Adds a new message under the name of the sender's account id.
// NOTE: This is a change method. Which means it will modify the state.
// But right now we don't distinguish them with annotations yet.
export function addMessage(text: string): void {
  // Get the total number of messages 
  let numMessages = globalStorage.getU64(NUM_MESSAGES_KEY);
  let message = new PostedMessage();
  message.sender = contractContext.sender;
  message.text = text;

  globalStorage.setBytes(MESSAGE_ID_KEY_PREFIX + near.str(numMessages), message.encode());
  globalStorage.setU64(NUM_MESSAGES_KEY, numMessages + 1);
}

export function getMessages(): Array<PostedMessage> {
  let numMessages = globalStorage.getU64(NUM_MESSAGES_KEY);
  let startIndex: u64 = 0;
  if (numMessages > MESSAGE_LIMIT) {
    startIndex = numMessages - MESSAGE_LIMIT;
  }

  let loaded = new Array<PostedMessage>();
  for (let i: u64 = startIndex; i < numMessages; i++) {
    let message = PostedMessage.decode(globalStorage.getBytes(MESSAGE_ID_KEY_PREFIX + near.str(i)));
    if (message) {
      loaded.push(message);
    }
  }
  return loaded;
}
