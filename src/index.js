/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './style.scss';
import renderTodos from './main';

const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');

const todos = [];

function addToLocalStorage(todos) {
  // conver the array to string then store it.
  localStorage.setItem('todos', JSON.stringify(todos));
  // render them to screen
  renderTodos(todos);
}

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

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(todoInput.value)
  addTodo(todoInput.value);
});
