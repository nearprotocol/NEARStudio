import "allocator/arena";
export { memory };

import { contractContext, globalStorage, near } from "./near";

import { Todo } from "./model.near";

// --- contract code goes below

export function _init(): void {
  globalStorage.setItem("all_todos", "");
}

export function setTodo(id: string, todo: Todo): void {
  near.log("setTodo " + id);
  globalStorage.setBytes("todos:" + id, todo.encode());
}

export function getTodo(id: string): Todo {
  let todoBytes = globalStorage.getBytes("todos:" + id);
  return Todo.decode(todoBytes);
}

export function getAllTodos(): Array<Todo> {
  let allKeys = globalStorage.keys("todos:");
  near.log("allKeys: " + allKeys.join(", "));

  let loaded = new Array<Todo>();
  for (let i = 0; i < allKeys.length; i++) {
    let todo = Todo.decode(globalStorage.getBytes(allKeys[i]));
    if (todo) {
      loaded.push(todo);
    }
  }
  return loaded;
}
