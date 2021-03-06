/* eslint-disable eqeqeq */
/* eslint-disable import/no-cycle */
import {
  todoItemsList, todos, todoInput, updateLocalStorage,
} from './index.js';

class App {
  static addTodo(item) {
    if (item !== '') {
      const todo = {
        id: Date.now(),
        description: item,
        completed: false,
        index: todos.length + 1,
      };

      todos.push(todo);
      updateLocalStorage(todos);
      todoInput.value = '';
    }
  }

  static renderTodos(todos) {
    todoItemsList.innerHTML = '';
    todos.forEach((item) => {
      // check if the item is completed
      const checked = item.completed ? 'checked' : null;

      const li = document.createElement('li');
      li.setAttribute('class', 'item');
      // <li class="item" data-key="20200708"> </li>
      li.setAttribute('data-key', item.id);

      if (item.completed === true) {
        li.classList.add('checked');
      }

      li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        <input type="text" value="${item.description}" class="input-desc ${checked}">
        <button class="delete-button">X</button>
      `;
      todoItemsList.append(li);
    });
  }

  static toggle(id) {
    todos.forEach((item) => {
      // use == not ===, because here types are different. One is number and other is string
      if (item.id == id) item.completed = !item.completed; // toggle the value
    });
    updateLocalStorage(todos);
  }

  static updateItem(newValue, id) {
    todos.forEach((list) => {
      if (list.id == id) list.description = newValue;
    });
    updateLocalStorage(todos);
  }

  static deleteTodo(id) {
    const ind = todos.findIndex((obj) => obj.id == id);
    todos.splice(ind, 1);
    updateLocalStorage(todos);
  }

  static deleteAll() {
    const toRemove = [];
    todos.forEach((item, index) => {
      if (item.completed) toRemove.push(index);
    });

    for (let i = toRemove.length - 1; i >= 0; i -= 1) todos.splice(toRemove[i], 1);
    updateLocalStorage(todos);
  }
}

export default App;