import { formDateInput, formDescription, formTitle } from './toggleSpoiler';
export const todoListWrapper = document.querySelector('.todo__wrapper');
export const mainTodoList = JSON.parse(localStorage.getItem('todoArray'))

class Todo {
  constructor(date, title, description, priority, project) {
    this.date = date;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.project = project;
  }
}
export const renderOnPageLoad = () => {
  mainTodoList.forEach(todo => createTodoTemplate(todo));
}
export const addTodoToList = () => {
  const todo = new Todo(formDateInput.value, formTitle.value, formDescription.value, document.querySelector('input[name=radio]:checked').value, document.querySelector('.nav__button--active').textContent);
  mainTodoList.push(todo);
  clearFormOnSubmit();
  console.log('main todolist');
  console.log(mainTodoList);
  createTodoTemplate(todo);
  localStorage.setItem('todoArray', JSON.stringify(mainTodoList))
}

export const createTodoTemplate = (todo) => {
  const todoList = document.createElement('ul')
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
  // todoList.style.background = '#3d3d3d'
  todoList.append(todoItem)
  todoListWrapper.append(todoList);
}

const clearFormOnSubmit = () => {
  formDateInput.value = '';
  formTitle.value = '';
  formDescription.value = '';
  document.querySelector('input[name=radio]').value = '';
}

