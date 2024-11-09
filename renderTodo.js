import { formDateInput, formDescription, formTitle } from './toggleSpoiler';
import { switchWorkspace } from './createWorkspace';
export const todoListWrapper = document.querySelector('.todo__wrapper');
export let mainTodoList = JSON.parse(localStorage.getItem('todoArray'))

let indexCounter = 0;

class Todo {
  constructor(date, title, description, priority, project, index) {
    this.date = date;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.project = project;
    this.index = index;
  }
}

export const renderOnPageLoad = () => {
  if (mainTodoList === null) {
    mainTodoList = [];
  } else {
    switchWorkspace();
  }
}

export const addTodoToList = () => {
  const todo = new Todo(formDateInput.value, formTitle.value, formDescription.value, document.querySelector('input[name=radio]:checked').value, document.querySelector('.nav__button--active').textContent, indexCounter++);
  mainTodoList.push(todo);
  clearFormOnSubmit();
  console.log('main todolist');
  console.log(mainTodoList);
  createTodoTemplate(todo);
  localStorage.setItem('todoArray', JSON.stringify(mainTodoList))
}

export const createTodoTemplate = (todo) => {
  const todoList = document.createElement('div')
  todoList.classList.add('todo');
  const todoItem = document.createElement('div');
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
              <button class="todo__remove" data-index="${todo.index}">Remove</button>
            </div>
    `
  todoItem.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo__remove')) {
      removeTodo(todo)
      e.target.parentNode.parentNode.remove();
      localStorage.setItem('todoArray', JSON.stringify(mainTodoList))
    } else if (mainTodoList.length == 1 && e.target.classList.contains('todo__remove')) {
      e.target.parentNode.remove();
      removeTodo(todo)
    }
  })
  todoList.append(todoItem)
  todoListWrapper.append(todoList);
}

const clearFormOnSubmit = () => {
  formDateInput.value = '';
  formTitle.value = '';
  formDescription.value = '';
  document.querySelector('input[name=radio]').value = '';
}

const removeTodo = (todo) => {
  if (mainTodoList.length == 1) {
    localStorage.clear();
    mainTodoList.splice(0, 1)
  }
  mainTodoList.splice(todo.index, 1)
  console.log(mainTodoList.length);
}