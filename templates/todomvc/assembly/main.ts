import "allocator/arena";
export { memory };

import { contractContext, globalStorage, near } from "./near";

import { JSONEncoder } from "./json/encoder";
import { DecoderState } from "./json/decoder";
import { Todo, __near_encode_Todo, __near_decode_Todo } from "./model.near";

// --- contract code goes below

export function _init(): void {
  globalStorage.setItem("all_todos", "");
}

export function setTodo(id: string, todo: Todo): void {
  globalLog("setTodo " + id);

  let encoder = new JSONEncoder();
  encoder.pushObject(null);
  __near_encode_Todo(todo, encoder)
  encoder.popObject();
  let encodedTodo = encoder.serialize();

  globalStorage.setBytes("todos:" + id, encodedTodo);

  let allTodosStr = globalStorage.getItem("all_todos") || "";
  let allTodos = allTodosStr.split(",");
  if (allTodos.length > 0 && allTodos[0].trim().length == 0) {
    allTodos.splice(0);
  }
  if (allTodos.indexOf(id) == -1) {
    allTodos.push(id);
    globalStorage.setItem("all_todos", allTodos.join(","));
  }
}

export function getTodo(id: string): Todo {
  let todoBytes = globalStorage.getBytes("todos:" + id);
  return __near_decode_Todo(todoBytes, null);
}

export function getAllTodos(): Array<Todo> {
  let allTodosStr = globalStorage.getItem("all_todos");
  if (!allTodosStr) {
    return [];
  }
  let allTodos = allTodosStr.split(",");
  let loaded = new Array<Todo>();
  for (let i = 0; i < allTodos.length; i++) {
    let todo = getTodo(allTodos[i]);
    if (todo) {
      loaded.push(todo);
    }
  }
  return loaded;
}

export function getLog(): string {
  return globalStorage.getItem("log") || "";
}

export function clearLog(): void {
  globalStorage.setItem("log", "");
}

function globalLog(msg: string): void {
  globalStorage.setItem("log", getLog() + "\n" + msg);
  near.log(msg);
}
