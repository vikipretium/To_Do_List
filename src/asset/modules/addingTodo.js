import Image1 from "../images/3dots-grey.svg";
import todoEdit from "./todoEdit.js";
import statusCheckBox from "../modules/checkbox.js";
// create list for reloading
const addingTodos = (task, ListContent) => {
  const { index } = task;
  ListContent.push({
    index,
    description: task.description,
    completed: task.completed,
  });
  const ListElement = document.createElement("li");
  ListElement.id = task.index;
  const menuIcon = document.createElement("img");
  menuIcon.src = Image1;
  menuIcon.alt = "menu";
  menuIcon.className = "todo-menu";
  const ListTemplate = `<div class="list-content">
      <input type="checkbox" class="checkbox" >
      <input type="text" value="${task.description}" class="todo-description" disabled>
      </div>`;

  menuIcon.addEventListener("click", (event) => todoEdit(event, ListContent));
  ListElement.innerHTML = ListTemplate;
  ListElement.appendChild(menuIcon);
  const ListSection = document.getElementById("ulList");
  ListSection.appendChild(ListElement);
  const getCheckBoxes = document.querySelectorAll(".checkbox");
  const checkBoxIndex = getCheckBoxes.length - 1;
  getCheckBoxes[checkBoxIndex].addEventListener("change", (event) =>
    statusCheckBox(event, ListContent)
  );
  if (task.completed === true) {
    getCheckBoxes[checkBoxIndex].click();
  }
};

export default addingTodos;
