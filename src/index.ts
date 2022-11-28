interface Todo {
  text: string;
  isCompleted: boolean;
}

const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoInput")! as HTMLInputElement;
const form = document.querySelector("#todoForm")! as HTMLFormElement;
const list = document.getElementById("todoList")!;
const completedList = document.getElementById("completedTodoList")!;

const todos: Todo[] = readTodoStorage();

todos.filter((todo) => todo.isCompleted === false).forEach(createTodoElement);
todos
  .filter((todo) => todo.isCompleted === true)
  .forEach(createCompletedElement);

function readTodoStorage(): [] {
  const storedTodos = localStorage.getItem("todos");
  if (storedTodos === null) return [];
  return JSON.parse(storedTodos);
}

function saveTodoStorage() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function submitHandler(e: SubmitEvent) {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    isCompleted: false,
  };

  todos.push(newTodo);
  createTodoElement(newTodo);

  saveTodoStorage();
  input.value = "";
}

function createTodoElement(todo: Todo) {
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.isCompleted;
  checkbox.addEventListener("change", function () {
    todo.isCompleted = checkbox.checked;
    saveTodoStorage();
    listItem.remove();
    createCompletedElement(todo);
  });

  listItem.append(todo.text);
  listItem.append(checkbox);
  list.append(listItem);
}

function createCompletedElement(todo: Todo) {
  const listItem = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.isCompleted;
  checkbox.addEventListener("change", function () {
    todo.isCompleted = checkbox.checked;
    saveTodoStorage();
    listItem.remove();
    createTodoElement(todo);
  });

  listItem.append(todo.text);
  listItem.append(checkbox);
  completedList.append(listItem);
}

form.addEventListener("submit", submitHandler);
