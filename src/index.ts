const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoInput")! as HTMLInputElement;
// const form = document.querySelector("form")!;
const form = document.querySelector("#todoForm")! as HTMLFormElement;
const list = document.getElementById("todoList")!;

interface Todo {
  text: string;
  isCompleted: boolean;
}

const todos: Todo[] = [];

function handleSubmit(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    isCompleted: false,
  };

  todos.push(newTodo);
  createTodoElement(newTodo);
}

function createTodoElement(todo: Todo) {
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  listItem.append(todo.text);
  listItem.append(checkbox);
  list.append(listItem);
  input.value = "";
}

form.addEventListener("submit", handleSubmit);
// btn.addEventListener("click", function () {
//   alert(input.value);
//   input.value = "";
// });
