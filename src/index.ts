const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoInput")! as HTMLInputElement;

btn.addEventListener("click", function () {
  alert(input.value);
  input.value = "";
});

// let mystery: unknown = "안녕하세요.";

// const numChars = (mystery as string).length;
