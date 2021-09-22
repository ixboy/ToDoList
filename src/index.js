import './style.scss';
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
const list = document.querySelector('#list');
const toDoList = [
  {
    description: 'Eat breakfast today',
    completed: false,
    index: 0,
  },
  {
    description: 'watch video tutorials',
    completed: false,
    index: 1,
  },
  {
    description: 'attend microverse classes',
    completed: false,
    index: 2,
  },
];

function addItems() {
  list.innerHTML = '';
  toDoList.forEach((e) => {
    list.innerHTML += `<li>
    <a class="text"> ${e.description} </a>
    <i class="de fa fa-trash"></i>
  </li>`;
  });
}
window.addEventListener('DOMContentLoaded', addItems());