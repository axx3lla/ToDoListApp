const inputElement = document.getElementById("todo-input");

const buttonElement = document.querySelector("button");
const listElement = document.getElementById("todo-list");

inputElement.addEventListener("keyup", enableAddButton);
inputElement.addEventListener("keyup", enterItems);
buttonElement.addEventListener("click", onAddToDo);
buttonElement.addEventListener("keyup", onAddToDo);

function enableAddButton() {
  if (inputElement.value.trim().length > 0) buttonElement.disabled = false;
  else buttonElement.disabled = true;
}

// function onTypeToDo() {
//     buttonElement.disabled = input.value.length === 0
// }

function enterItems(e) {
  if (e.key === "Enter") onAddToDo();
}

function onAddToDo() {
  const li = createListItem(inputElement.value);
  listElement.appendChild(li);
  clearInput();
}

function createListItem(name) {
  const li = document.createElement("li");
  const title = document.createElement("p");
  title.textContent = name;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "x";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", onDeleteToDo);

  li.appendChild(title);
  li.appendChild(deleteButton);
  return li;
}

function clearInput() {
  inputElement.value = "";
  buttonElement.disabled = true;
}

function onDeleteToDo(e) {
  e.target.parentElement.remove();
}
