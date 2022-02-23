import "./style.css";

// input section
import Image from "./asset/images/add-grey.svg";
import Image1 from "./asset/images/3dots-grey.svg";
import Image2 from "./asset/images/trash.svg";

const render = `<a href="#"><img src="${Image}" alt="img"></a>`;
const addButton = document.getElementById("add-button");
addButton.innerHTML = render;

// list section
const ListContent = [];

//functions

//update local storage

const updateLocalStorage = (arr, item) => {
  arr.m;
};

// input validation
const isValid = (value) => {
  if (!value) {
    return false;
  } else {
    return true;
  }
};

//after editing todo list - hit enter to save
const saveValue = (event) => {
  if (
    event.target.classList.contains("todo-description") &&
    event.keyCode === 13
  ) {
    event.target.disabled = true;
    event.target.parentNode.parentNode.children[1].src = Image1;
  }
};

// enable editing and removing todolist
const todoEdit = (event) => {
  if (event.target.src === Image1) {
    event.target.src = Image2;
    event.target.parentNode.children[0].children[1].removeAttribute("disabled");
    // document.querySelector(".todo-description").removeAttribute("disabled");
  } else {
    event.target.parentNode.remove();
  }
};

// to check key press enter
document.addEventListener("keypress", saveValue);

//add function
const addtodo = (event) => {
  const todoInput = document.querySelector(".todo-input").value;
  const valid = isValid(todoInput); // checking input validation
  if (!valid) return;
  event.preventDefault();
  const index = ListContent.length;
  ListContent.push({ id: index + 1, description: todoInput, completed: false });
  const ListElement = document.createElement("li");
  ListElement.id = ListContent[index].id;
  const menuIcon = document.createElement("img");
  menuIcon.src = Image1;
  menuIcon.alt = "menu";
  menuIcon.className = "todo-menu";
  const ListTemplate = `<div class="list-content">
    <input type="checkbox">
    <input type="text" value="${ListContent[index].description}" class="todo-description" disabled>
    </div>`;
  menuIcon.addEventListener("click", todoEdit);
  ListElement.innerHTML = ListTemplate;
  ListElement.appendChild(menuIcon);
  const ListSection = document.getElementById("ulList");
  ListSection.appendChild(ListElement);
  localStorage.setItem("tasks", JSON.stringify(ListContent));
  document.querySelector(".todo-input").value = null;
};
addButton.addEventListener("click", addtodo);
