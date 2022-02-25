// sorting index values
const sortIndex = (ListContent) => {
  ListContent = ListContent.map((item, index) => {
    console.log(item);
    return {
      index: index + 1,
      description: item.description,
      completed: item.completed,
    };
  });
  localStorage.setItem("tasks", JSON.stringify(ListContent));
};

export default sortIndex;
