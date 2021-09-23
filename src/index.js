/* eslint-disable eqeqeq */
/* eslint-disable import/no-mutable-exports */
/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './style.scss';
import { renderTodos, toggle } from './main';

const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');

let todos = [];

if (localStorage.todos !== undefined) {
  todos = JSON.parse(localStorage.todos);
}

function addToLocalStorage(todos) {
  // conver the array to string then store it.
  localStorage.setItem('todos', JSON.stringify(todos));
  // render them to screen
  renderTodos(todos);
}

export { todos, todoItemsList, addToLocalStorage };
renderTodos(todos);

function addTodo(item) {
  // if item is not empty
  if (item !== '') {
    const todo = {
      id: Date.now(),
      description: item,
      completed: false,
      index: todos.length + 1,
    };

    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.value = '';
  }
}

// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
  // filters out the <li> with the id and updates the todos array
  // console.log(id)
  todos = todos.filter((item) => item.id != id);

  // update the localStorage
  addToLocalStorage(todos);
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(todoInput.value);
});

todoItemsList.addEventListener('click', (event) => {
  // check if the event is on checkbox
  if (event.target.type === 'checkbox') {
    // toggle the state
    toggle(event.target.parentElement.getAttribute('data-key'));
  }
  // check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});
