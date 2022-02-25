import './style.css';
// input section
import Image from './asset/images/add-grey.svg';
import Image1 from './asset/images/3dots-grey.svg';
import Image2 from './asset/images/trash.svg';
import statusCheckBox from './asset/modules/statusCheck.js';

const render = `<a href="#"><img src="${Image}" alt="img"></a>`;
const addButton = document.getElementById('add-button');
addButton.innerHTML = render;

// list section
let ListContent = [];

// functions

// sorting index values
const sortIndex = () => {
  ListContent = ListContent.map((item, index) => ({
    index: index + 1,
    description: item.description,
    completed: item.completed,
  }));
  localStorage.setItem('tasks', JSON.stringify(ListContent));
};

// update local storage
const updateLocalStorage = (arr, item) => {
  const index = Array.from(arr).indexOf(item.parentNode.parentNode);
  ListContent[index].description = item.value;
  localStorage.setItem('tasks', JSON.stringify(ListContent));
};

// input validation
const isValid = (value) => {
  if (!value) {
    return false;
  }
  return true;
};

// after editing todo list - hit enter to save
const saveValue = (event) => {
  if (
    event.target.classList.contains('todo-description')
    && event.keyCode === 13
  ) {
    event.target.disabled = true;
    event.target.parentNode.parentNode.children[1].src = Image1;
    const todoContent = document.querySelector('#ulList').children;
    updateLocalStorage(todoContent, event.target);
    sortIndex();
  }
};

// enable editing and removing todolist
const todoEdit = (event) => {
  if (event.target.src === Image1) {
    event.target.src = Image2;
    event.target.parentNode.children[0].children[1].removeAttribute('disabled');
  } else {
    const lists = document.querySelector('#ulList').children;
    const indexList = Array.from(lists).indexOf(event.target.parentNode);
    ListContent.splice(indexList, 1);
    localStorage.setItem('tasks', JSON.stringify(ListContent));
    event.target.parentNode.remove();
    sortIndex();
  }
};

// to check key press enter
document.addEventListener('keypress', saveValue);

// add function
const addtodo = (event) => {
  const todoInput = document.querySelector('.todo-input').value;
  const valid = isValid(todoInput); // checking input validation

  if (!valid) return;
  event.preventDefault();
  const index = ListContent.length;
  ListContent.push({
    index: index + 1,
    description: todoInput,
    completed: false,
  });
  const ListElement = document.createElement('li');
  ListElement.id = ListContent[index].index;
  const menuIcon = document.createElement('img');
  menuIcon.src = Image1;
  menuIcon.alt = 'menu';
  menuIcon.className = 'todo-menu';
  const ListTemplate = `<div class="list-content">
    <input type="checkbox" class="checkbox">
    <input type="text" value="${ListContent[index].description}" class="todo-description" disabled>
    </div>`;

  menuIcon.addEventListener('click', todoEdit);
  ListElement.innerHTML = ListTemplate;
  ListElement.appendChild(menuIcon);
  const ListSection = document.getElementById('ulList');
  ListSection.appendChild(ListElement);
  const getCheckBoxes = document.querySelectorAll('.checkbox');
  const checkBoxIndex = getCheckBoxes.length - 1;
  getCheckBoxes[checkBoxIndex].addEventListener('change', (event) => statusCheckBox(event, ListContent));
  localStorage.setItem('tasks', JSON.stringify(ListContent));
  document.querySelector('.todo-input').value = null;
};

// adds the task from input
addButton.addEventListener('click', addtodo);

// create list for reloading
const addingTodos = (task) => {
  const { index } = task;
  ListContent.push({
    index,
    description: task.description,
    completed: task.completed,
  });
  const ListElement = document.createElement('li');
  ListElement.id = task.index;
  const menuIcon = document.createElement('img');
  menuIcon.src = Image1;
  menuIcon.alt = 'menu';
  menuIcon.className = 'todo-menu';
  const ListTemplate = `<div class="list-content">
    <input type="checkbox" class="checkbox" >
    <input type="text" value="${task.description}" class="todo-description" disabled>
    </div>`;

  menuIcon.addEventListener('click', todoEdit);
  ListElement.innerHTML = ListTemplate;
  ListElement.appendChild(menuIcon);
  const ListSection = document.getElementById('ulList');
  ListSection.appendChild(ListElement);
  const getCheckBoxes = document.querySelectorAll('.checkbox');
  const checkBoxIndex = getCheckBoxes.length - 1;
  getCheckBoxes[checkBoxIndex].addEventListener('change', (event) => statusCheckBox(event, ListContent));
  if (task.completed === true) {
    getCheckBoxes[checkBoxIndex].click();
  }
};

// show todolist
const showTodoList = () => {
  const grabList = JSON.parse(localStorage.getItem('tasks'));
  if (grabList === null) return;
  grabList.forEach((item) => addingTodos(item));
  localStorage.setItem('tasks', JSON.stringify(ListContent));
};

const clearAll = () => {
  const disabled = document.querySelectorAll('.disabled');
  Array.from(disabled).forEach((item) => item.remove());
  ListContent = ListContent.filter((item) => item.completed === false);
  sortIndex();
};

document.querySelector('#clear').addEventListener('click', clearAll);

showTodoList();
