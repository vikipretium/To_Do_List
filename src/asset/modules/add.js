import isValid from "./isValid.js";
import Image1 from "../images/3dots-grey.svg";
import todoEdit from "./todoEdit.js";
import statusCheckBox from "../modules/checkbox.js";

// add function
const addtodo = (event, ListContent) => {
  const todoInput = document.querySelector(".todo-input").value;
  const valid = isValid(todoInput); // checking input validation

  if (!valid) return;
  event.preventDefault();
  const index = ListContent.length;
  ListContent.push({
    index: index + 1,
    description: todoInput,
    completed: false,
  });
  const ListElement = document.createElement("li");
  ListElement.id = ListContent[index].index;
  const menuIcon = document.createElement("img");
  menuIcon.src = Image1;
  menuIcon.alt = "menu";
  menuIcon.className = "todo-menu";
  const ListTemplate = `<div class="list-content">
      <input type="checkbox" class="checkbox">
      <input type="text" value="${ListContent[index].description}" class="todo-description" disabled>
      </div>`;

  menuIcon.addEventListener("click", (event) => todoEdit(event, ListContent));
  ListElement.innerHTML = ListTemplate;
  ListElement.appendChild(menuIcon);
  const ListSection = document.getElementById("ulList");
  ListSection.appendChild(ListElement);
  const getCheckBoxes = document.querySelectorAll(".checkbox");
  const checkBoxIndex = getCheckBoxes.length - 1;
  console.log("before add.js", ListContent);
  getCheckBoxes[checkBoxIndex].addEventListener("change", (event) =>
    statusCheckBox(event, ListContent)
  );
  console.log("after add.js", ListContent);
  localStorage.setItem("tasks", JSON.stringify(ListContent));
  document.querySelector(".todo-input").value = null;
};

export default addtodo;
