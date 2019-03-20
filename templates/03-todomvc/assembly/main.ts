import "allocator/arena";
export { memory };

import { context, storage, near } from "./near";

import { Todo } from "./model.near";

// --- contract code goes below

export function init(): void {
  storage.setItem("all_todos", "");
}

export function setTodo(id: string, todo: Todo): void {
  near.log("setTodo " + id);
  storage.setBytes("todos:" + id, todo.encode());
}

export function getTodo(id: string): Todo {
  let todoBytes = storage.getBytes("todos:" + id);
  return Todo.decode(todoBytes);
}

export function getAllTodos(): Array<Todo> {
  let allKeys = storage.keys("todos:");
  near.log("allKeys: " + allKeys.join(", "));

  let loaded = new Array<Todo>();
  for (let i = 0; i < allKeys.length; i++) {
    let todo = Todo.decode(storage.getBytes(allKeys[i]));
    if (todo) {
      loaded.push(todo);
    }
  }
  return loaded;
}
