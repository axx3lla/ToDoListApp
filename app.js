const inputElement = document.getElementById("todo-input");

const buttonElement = document.querySelector("button");
const listElement = document.getElementById("todo-list");

inputElement.addEventListener("keyup", enableAddButton);
buttonElement.addEventListener("click", onAddToDo);

function enableAddButton() {
  if (inputElement.value.trim().length > 0) buttonElement.disabled = false;
  else buttonElement.disabled = true;
}

// function onTypeToDo() {
//     buttonElement.disabled = input.value.length === 0
// }

function onAddToDo() {
  let listItem = document.createElement("li");
  listItem.innerHTML = inputElement.value;
  listElement.appendChild(listItem);
  inputElement.value = "";
  buttonElement.disabled = true;
}

// vezi cod Alin- functie
