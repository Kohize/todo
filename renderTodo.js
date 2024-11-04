import { formDateInput, formDescription, formTitle } from './toggleSpoiler';
const mainContent = document.querySelector('.content');
const mainTodoList = [];

class Todo {
  constructor(date, title, description, priority) {
    this.date = date;
    this.title = title;
    this.description = description;
    this.priority = priority;
  }
}

export const addTodoToList = () => {
  const todo = new Todo(formDateInput.value, formTitle.value, formDescription.value, document.querySelector('input[name=radio]:checked').value)
  mainTodoList.push(todo);
  clearFormOnSubmit();
  console.log(mainTodoList);
  createTodoTemplate(todo);

}

const createTodoTemplate = (todo) => {
  const todoList = document.createElement('ul');
  const todoItem = document.createElement('li');
  todoList.classList.add('todo');
  todoItem.classList.add('todo__item');
  todoItem.innerHTML = `
    <input type="checkbox" />
            <div class="todo__wrapper">
              <div class="todo__item-name">
                <p class="todo__date">${todo.date}</p>
                <h3 class="todo__title">${todo.title}</h3>
              </div>
              <div class="todo__item-extra">
                <p class="todo__description">${todo.description}</p>
                <span class="todo__priority">${todo.priority}</span>
              </div>
            </div>
    `
  todoList.append(todoItem);
  mainContent.append(todoList)
}

const clearFormOnSubmit = () => {
  formDateInput.value = '';
  formTitle.value = '';
  formDescription.value = '';
  document.querySelector('input[name=radio]').value = '';
}




