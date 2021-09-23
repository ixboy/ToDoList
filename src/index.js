/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './style.scss';
import './main.js';

const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');

const todos = [];

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
    renderTodos(todos); // then renders them between <ul>
    todoInput.value = '';
  }
}

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addTodo(todoInput.value);
});
