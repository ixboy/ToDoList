/* eslint-disable eqeqeq */
/* eslint-disable import/no-cycle */
import { todoItemsList, todos, addToLocalStorage } from './index.js';

export function renderTodos(todos) {
  // clear everything inside <ul> with class=todo-items
  todoItemsList.innerHTML = '';
  todos.forEach((item) => {
    // check if the item is completed
    const checked = item.completed ? 'checked' : null;

    const li = document.createElement('li');
    // <li class="item"> </li>
    li.setAttribute('class', 'item');
    // <li class="item" data-key="20200708"> </li>
    li.setAttribute('data-key', item.id);
    /* <li class="item" data-key="20200708">
          <input type="checkbox" class="checkbox">
          <span>Go to Gym </span>
          <button class="delete-button">X</button>
        </li> */
    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      <span>${item.description}</span>
      <button class="delete-button">X</button>
    `;
    todoItemsList.append(li);
  });
}

// toggle the value to completed and not completed
export function toggle(id) {
  todos.forEach((item) => {
    // use == not ===, because here types are different. One is number and other is string
    if (item.id == id) {
      // toggle the value
      item.completed = !item.completed;
    }
  });
  addToLocalStorage(todos);
}