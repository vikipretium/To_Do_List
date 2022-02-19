import "./style.css";
import menuIcon from "./asset/images/3dots-grey.svg";
import delIcon from "./asset/images/test1.svg";

const todoInput = document.querySelector(".todo-input");
const addButton = document.querySelector(".add-button");
const todoList = document.querySelector(".ulList");
const menuButton = document.querySelector(".menu");

addButton.addEventListener("click", addTodo);

let dotImg;

function addTodo(event) {
  event.preventDefault();

  //create list
  const todoLi = document.createElement("li");
  todoLi.classList.add("todo-item");

  //create div class list-content
  const listDiv = document.createElement("div");
  listDiv.classList.add("list-content");

  //create checkbox
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  listDiv.appendChild(checkbox);

  //create span for text
  const spanText = document.createElement("span");
  spanText.innerText = todoInput.value;
  spanText.classList.add("textEdit");
  listDiv.appendChild(spanText);
  const todoEdit = listDiv.querySelector(".textEdit");
  todoEdit.addEventListener("click", editTodo);

  function editTodo(event) {
    spanText.contentEditable = true;
  }

  let dotImg = document.createElement("img");
  dotImg.src = menuIcon;
  dotImg.classList.add("menu");
  dotImg.addEventListener("click", menu);

  //appending tags
  todoLi.appendChild(listDiv);
  todoLi.appendChild(dotImg);
  todoList.appendChild(todoLi);

  //clear input
  todoInput.value = "";

  const menuButton = document.querySelector(".menu");
  function menu(event) {
    if (dotImg.src === menuIcon) {
      dotImg.src = delIcon;
      dotImg.classList.add("del");
      document.querySelector(".del").addEventListener("click", delTodo);
      function delTodo() {
        this.parentElement.style.display = "none";
      }
    }
  }
}
menu.addEventListener("click", menu);
