// status checkbox
const statusCheckBox = (e, ListContent) => {
  const list = e.target.parentNode.parentNode;
  list.children[0].children[1].classList.toggle('strike');
  const completed = !list.classList.contains('disabled');
  list.classList.toggle('disabled');
  const getLists = document.querySelector('#ulList').children;
  const index = Array.from(getLists).indexOf(list);
  ListContent[index].completed = completed;
  localStorage.setItem('tasks', JSON.stringify(ListContent));
};
export default statusCheckBox;
