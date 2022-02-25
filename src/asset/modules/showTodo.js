import addingTodos from "./addingTodo.js";
// show todolist
const showTodoList = (ListContent) => {
  const grabList = JSON.parse(localStorage.getItem("tasks"));
  if (grabList === null) return;
  grabList.forEach((item) => addingTodos(item, ListContent));
  localStorage.setItem("tasks", JSON.stringify(ListContent));
};

export default showTodoList;
