import Image1 from "../images/3dots-grey.svg";
import Image2 from "../images/trash.svg";
import sortIndex from "./sortIndex.js";

// enable editing and removing todolist
const todoEdit = (event, ListContent) => {
  if (event.target.src === Image1) {
    event.target.src = Image2;
    event.target.parentNode.children[0].children[1].removeAttribute("disabled");
  } else {
    const lists = document.querySelector("#ulList").children;
    const indexList = Array.from(lists).indexOf(event.target.parentNode);
    ListContent.splice(indexList, 1);
    localStorage.setItem("tasks", JSON.stringify(ListContent));
    event.target.parentNode.remove();
    sortIndex(ListContent);
  }
};

export default todoEdit;
