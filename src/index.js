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

// iteration through array

//functions

const isValid = (value) => {
  if (!value) {
    return false;
  } else {
    return true;
  }
};

todoEdit

//add function

const addtodo = (event) => {
  const todoInput = document.querySelector(".todo-input").value;
  const valid = isValid(todoInput);
  if (!valid) return;
  event.preventDefault();
  const index = ListContent.length;
  ListContent.push({ id: index + 1, description: todoInput, completed: false });
  const ListElement = document.createElement("li");
  ListElement.id = ListContent[index].id;
  const ListTemplate = `<div class="list-content">
    <input type="checkbox">
    <span>${ListContent[index].description}</span>
    </div>
    <img src="${Image1}" alt="dots" class="todo-menu" onclick = "(event) => todoEdit(event)" >;
  ListElement.innerHTML = ListTemplate;
  const ListSection = document.getElementById("ulList");
  ListSection.appendChild(ListElement);
  localStorage.setItem("tasks", JSON.stringify(ListContent));
  document.querySelector(".todo-input").value = null;
};
addButton.addEventListener("click", addtodo);

//remove
const todoMenu = document.querySelector;
//edit the task

//verify checkbox

//set index value
