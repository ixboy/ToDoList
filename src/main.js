/* eslint-disable max-len */
const todoItemsList = document.querySelector('.todo-items');

export default function renderTodos(todos) {
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
    // if item is completed, then add a class to <li> called 'checked', which will add line-through style
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