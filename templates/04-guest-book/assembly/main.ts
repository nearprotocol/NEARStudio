import "allocator/arena";
export { memory };

import { context, storage, near } from "./near";

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
  // Get the total number of messages as u64 type
  let numMessages = storage.getU64(NUM_MESSAGES_KEY);
  // Create a new instance of PostedMessage object
  let message = new PostedMessage();
  // Populating fields with our data
  message.sender = context.sender;
  message.text = text;
  // Storing serialized instance using a key like "message:5"
  storage.setBytes(
    MESSAGE_ID_KEY_PREFIX + near.str(numMessages),
    message.encode()
  );
  // Storing the increased number of messages as u64
  storage.setU64(NUM_MESSAGES_KEY, numMessages + 1);
}

// Returns an array of last N messages.
// NOTE: This is a view method. Which means it should NOT modify the state.
// Again there are no annotations for this yet.
export function getMessages(): Array<PostedMessage> {
  // Get the total number of messages as u64 type
  let numMessages = storage.getU64(NUM_MESSAGES_KEY);
  // Initializing the starting index. We have to explicitly set type to u64
  // otherwise the inferred type would be i32
  let startIndex: u64 = 0;
  // Updating the starting index in case we need to cut to last N
  if (numMessages > MESSAGE_LIMIT) {
    startIndex = numMessages - MESSAGE_LIMIT;
  }
  // Creating an dynamic size array
  let loaded = new Array<PostedMessage>();
  // Iterating over indices of the messages. Again we need to explicitly set the type to u64
  for (let i: u64 = startIndex; i < numMessages; i++) {
    // Reading from the storage the bytes and parsing it into a new PostedMessage instance.
    let message = PostedMessage.decode(
      storage.getBytes(MESSAGE_ID_KEY_PREFIX + near.str(i)));
    // Checking if the deserialization worked and then adding it to the array.
    if (message) {
      loaded.push(message);
    }
  }
  // Done
  return loaded;
}
