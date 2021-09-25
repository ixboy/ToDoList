/* eslint-disable eqeqeq */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */

import '@fortawesome/fontawesome-free/js/fontawesome.js';
import '@fortawesome/fontawesome-free/js/solid.js';
import '@fortawesome/fontawesome-free/js/regular.js';
import '@fortawesome/fontawesome-free/js/brands.js';
import './style.scss';
import App from './main';

const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');
const clearAll = document.querySelector('.clear-all');

let todos = [];

if (localStorage.todos !== undefined) {
  todos = JSON.parse(localStorage.todos);
}

function updateIndex(todos){
  let count = 1
  todos.forEach(elem => {
    elem.index = count
    count++
  });
}

function updateLocalStorage(todos) {
  updateIndex(todos)
  localStorage.setItem('todos', JSON.stringify(todos));
  App.renderTodos(todos);
}

export { todos, todoItemsList, todoInput, updateLocalStorage };
App.renderTodos(todos);

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  App.addTodo(todoInput.value);
});

todoItemsList.addEventListener('click', (event) => {
  // check if the event is on checkbox
  if (event.target.type === 'checkbox') {
    // toggle the state
    App.toggle(event.target.parentElement.getAttribute('data-key'));
  }
  // check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    App.deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});

todoItemsList.addEventListener('keyup', (e) => {
  if (e.target.classList.contains('input-desc') && (e.key === 'Enter')) {
    console.log(e.target.value)
    console.log(e.target.parentElement.getAttribute('data-key'))
    App.updateItem(e.target.value, e.target.parentElement.getAttribute('data-key'));
  }
});

clearAll.addEventListener('click', App.deleteAll)