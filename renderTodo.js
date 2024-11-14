import { formDateInput, formDescription, formTitle } from "./toggleSpoiler";
import { switchWorkspace } from "./createWorkspace";
export const todoListWrapper = document.querySelector(".todo__wrapper");
export let mainTodoList = JSON.parse(localStorage.getItem("todoArray"));

let indexCounter = 0;

class Todo {
  constructor(date, title, description, priority, project, index, done) {
    this.date = date;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.project = project;
    this.index = index;
    this.done = done;
  }
}

export const renderOnPageLoad = () => {
  if (mainTodoList === null) {
    mainTodoList = [];
  } else {
    switchWorkspace();
  }
};

export const addTodoToList = () => {
  const todo = new Todo(
    formDateInput.value,
    formTitle.value,
    formDescription.value,
    document.querySelector("input[name=radio]:checked").value,
    document.querySelector(".nav__button--active").textContent,
    indexCounter++,
    false
  );

  mainTodoList.push(todo);
  clearFormOnSubmit();
  console.log("main todolist");
  console.log(mainTodoList);
  createTodoTemplate(todo);
  localStorage.setItem("todoArray", JSON.stringify(mainTodoList));
};

export const createTodoTemplate = (todo) => {
  const todoList = document.createElement("div");
  todoList.classList.add("todo");
  const todoItem = document.createElement("div");
  todoItem.classList.add("todo__item");
  todoItem.innerHTML = `
    <input type="checkbox" class="todo__checkbox" ${todo.done ? 'checked' : ''}/>
            <div class="todo__wrapper">
              <div class="todo__item-name">
                <p class="todo__date">${todo.date}</p>
                <h3 class="todo__title">${todo.title}</h3>
              </div>
              <div class="todo__item-extra">
                <p class="todo__description">${todo.description}</p>
                <span class="todo__priority">${todo.priority}</span>
              </div>
              <div class="todo__buttons">
              <button class="todo__remove" data-index="${todo.index}">Remove</button>
                <button class="todo__edit" data-index="${todo.index}">Edit</button>
              </div>
            </div>
    `;
  todoItem.addEventListener("click", (e) => {
    if (e.target.classList.contains("todo__remove")) {
      removeTodo(todo);
      e.target.parentNode.parentNode.remove();
      localStorage.setItem("todoArray", JSON.stringify(mainTodoList));
    } else if (
      mainTodoList.length == 1 &&
      e.target.classList.contains("todo__remove")
    ) {
      e.target.parentNode.remove();
      removeTodo(todo);
    } else if (e.target.classList.contains("todo__edit")) {
      showTodoForm(todoItem, todo);
    } 
  });
  todoList.append(todoItem);
  todoListWrapper.append(todoList);

  todoItem.addEventListener('change', (e) => {
    if (e.target.classList.contains('todo__checkbox')) {
      changeTodoStatus(todo)
    }
  })
};

const clearFormOnSubmit = () => {
  formDateInput.value = "";
  formTitle.value = "";
  formDescription.value = "";
  document.querySelector("input[name=radio]").value = "";
};

const changeTodoStatus = (todo) => {
     const currentTodo = mainTodoList.find(element => element.index == todo.index)
      if (currentTodo && currentTodo.done == true) {
        console.log(currentTodo);
        currentTodo.done = false;
        localStorage.setItem("todoArray", JSON.stringify(mainTodoList));
      } else if (currentTodo && currentTodo.done == false) {
           console.log(currentTodo);
        currentTodo.done = true;
         localStorage.setItem("todoArray", JSON.stringify(mainTodoList));
      }
}

const removeTodo = (todo) => {
  if (mainTodoList.length == 1) {
    localStorage.clear();
    mainTodoList.splice(0, 1);
  }
  mainTodoList.splice(todo.index, 1);
};

export const showTodoForm = (todoItem, todo) => {
  todoItem.innerHTML = "";
  todoItem.innerHTML = `
               <div class="form">
        <input type="text" placeholder="Title" class="form__title todo__title" />
        <input type="text" placeholder="Description" class="form__description todo__description" />
        <div class="form__date todo__day">
          <label for="date">Date</label>
          <input type="date" name="date" id="date" class="form__date-input todo__date-input" />
        </div>

        <div class="form__priority todo__rank">
          <p>Priority</p>
          <div class="form__radio">
            <div class="form__radio-item">
              <label for="low">Low</label>
              <input type="radio" id="Low" value="Low" name="todo_radio" class="todo__radio"/>
            </div>
            <div class="form__radio-item">
              <label for="medium">Medium</label>
              <input type="radio" id="Medium" value="Medium" name="todo_radio" />
            </div>
            <div class="form__radio-item">
              <label for="high">High</label>
              <input type="radio" id="High" value="High" name="todo_radio" /></input>
            </div>
          </div>
          <button class="form__button-add todo__button-save">Save</button>
        </div>
      </div>
      `;

  const todoDescription = document.querySelector(".todo__description");
  const todoDate = document.querySelector(".todo__day");
  const todoPriority = document.querySelector(".todo__rank");
  const saveButton = document.querySelector(".todo__button-save");

  todoDescription.style.display = "flex";
  todoDate.style.display = "flex";
  todoPriority.style.display = "flex";

  saveButton.addEventListener("click", () => {
    let newArray = mainTodoList.map((element) => {
      if (element.index === todo.index) {
        return {
          ...element,
          date: document.querySelector(".todo__date-input").value,
          title: document.querySelector(".todo__title").value,
          description: document.querySelector(".todo__description").value,
          priority: document.querySelector("input[name=todo_radio]:checked")
            .value,
        };
      }
      return element;
    });
  todoDescription.style.display = 'none';
  todoDate.style.display = 'none';
  todoPriority.style.display = 'none';

    mainTodoList = newArray;
    localStorage.setItem("todoArray", JSON.stringify(mainTodoList));
    switchWorkspace();
  });
};
