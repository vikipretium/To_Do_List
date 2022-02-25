// update local storage
const updateLocalStorage = (arr, item) => {
  const index = Array.from(arr).indexOf(item.parentNode.parentNode);
  ListContent[index].description = item.value;
  localStorage.setItem("tasks", JSON.stringify(ListContent));
};

export default updateLocalStorage;
