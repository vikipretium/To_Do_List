import './style.css';

// input section
import Image from './asset/images/add-grey.svg';
import Image1 from './asset/images/3dots-grey.svg';

const render = `<a href="#"><img src="${Image}" alt="img"></a>`;
const addButton = document.getElementById('add-button');
addButton.innerHTML = render;

// list section
const ListContent = [{
  id: 0,
  description: 'task1',
  status: false,
},
{
  id: 1,
  description: 'task2',
  status: false,
}, {
  id: 2,
  description: 'task3',
  status: false,
}, {
  id: 4,
  description: 'task4',
  status: false,
},
];

// iteration through array
for (let i = 0; i < ListContent.length; i += 1) {
  const ListElement = document.createElement('li');
  const ListTemplate = `<div class="list-content">
    <input type="checkbox">
    <span>${ListContent[i].description}</span>
    </div>
    <img src="${Image1}" alt="dots">`;
  ListElement.innerHTML = ListTemplate;
  const ListSection = document.getElementById('ulList');
  ListSection.appendChild(ListElement);
}