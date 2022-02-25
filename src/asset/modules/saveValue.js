import updateLocalStorage from "./updateLs.js";
import sortIndex from "./sortIndex.js";
// after editing todo list - hit enter to save
const saveValue = (event, ListContent) => {
  if (
    event.target.classList.contains("todo-description") &&
    event.keyCode === 13
  ) {
    event.target.disabled = true;
    event.target.parentNode.parentNode.children[1].src = Image1;
    const todoContent = document.querySelector("#ulList").children;
    updateLocalStorage(todoContent, event.target);
    sortIndex(ListContent);
  }
};

export default saveValue;
