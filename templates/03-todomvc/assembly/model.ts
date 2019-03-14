export class Todo {
  id: string;
  title: string;
  completed: bool;
}

export function forceBindingGeneration(arg: Todo): Todo {
  return null;
}