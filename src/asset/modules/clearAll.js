import sortIndex from "./sortIndex.js";
const clearAll = (ListContent) => {
  const disabled = document.querySelectorAll(".disabled");
  Array.from(disabled).forEach((item) => item.remove());
  sortIndex(ListContent);
};
export default clearAll;
