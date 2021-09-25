/* eslint-disable eqeqeq */
/* eslint-disable import/no-cycle */
import { todoItemsList, todos, updateLocalStorage } from './index.js';

class App { 
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
    todos.forEach(list => {
      if (list.id == id) list.description = newValue
    })
    updateLocalStorage(todos);
  }

  static deleteTodo(id) {
    let ind = todos.findIndex(obj => obj.id == id);
    todos.splice(ind, 1);
    updateLocalStorage(todos);
  }

  static deleteAll() {
    let toRemove = []
    todos.forEach((item, index) => {
      if (item.completed) toRemove.push(index)
    });
    
    for (let i = toRemove.length -1; i >= 0; i--)
      todos.splice(toRemove[i],1);
    updateLocalStorage(todos);
  }
  
}
 

export default App;