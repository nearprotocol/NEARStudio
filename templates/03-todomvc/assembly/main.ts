import { context, storage, near, collections } from "./near";

import { Todo } from "./model.near";

// --- contract code goes below

// Map from string key ID to a Todo
// collections.map is a persistent collection. Any changes to it will
// be automatically saved in the storage.
// The parameter to the constructor needs to be unique across a single contract.
// It will be used as a prefix to all keys required to store data in the storage.
let todos = collections.map<string, Todo>("todos");

export function setTodo(id: string, todo: Todo): void {
  near.log("setTodo " + id);
  todos.set(id, todo);
}

export function getTodo(id: string): Todo {
  return todos.get(id);
}

export function getAllTodos(): Array<Todo> {
  // Map currently doesn't support getting all keys, so we use storage prefix.
  let allKeys = storage.keys("todos::");
  near.log("allKeys: " + allKeys.join(", "));

  let loaded = Array.create<Todo>(allKeys.length);
  for (let i = 0; i < allKeys.length; i++) {
    loaded[i] = Todo.decode(storage.getBytes(allKeys[i]));
  }
  return loaded;
}
