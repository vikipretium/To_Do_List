import "./style.css";
// input section
import Image from "./asset/images/add-grey.svg";
import addtodo from "./asset/modules/add.js";
import clearAll from "./asset/modules/clearAll.js";
import saveValue from "./asset/modules/saveValue.js";
import showTodoList from "./asset/modules/showTodo.js";

const render = `<a href="#"><img src="${Image}" alt="img"></a>`;
const addButton = document.getElementById("add-button");
addButton.innerHTML = render;

// list section
let ListContent = [];

// to check key press enter
document.addEventListener("keypress", (event) => saveValue(event, ListContent));

// adds the task from input
addButton.addEventListener("click", (event) => addtodo(event, ListContent));

document.querySelector("#clear").addEventListener("click", () => {
  ListContent = ListContent.filter((item) => item.completed === false);
  clearAll(ListContent);
});

showTodoList(ListContent);
