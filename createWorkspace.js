import { mainTodoList, todoList, createTodoTemplate } from './renderTodo';

const navList = document.querySelector('.nav__list');
const inputWrapper = document.querySelector('.nav__input-wrapper');
const navInput = document.querySelector('.nav__input');



export const showInput = () => {
    inputWrapper.style.display = 'flex';
}

export const createNewWorkspace = () => {
    const newTab = document.createElement('button');
    newTab.classList.add('nav__button');
    newTab.textContent = navInput.value;
    navList.append(newTab);
    navInput.value = '';
    inputWrapper.style.display = 'none';
    console.log(mainTodoList);
    newTab.addEventListener('click', (e) => {
        changeActiveAttribute();
        switchWorkspace();
        e.target.classList.add('nav__button--active');
    });

}

export const switchWorkspace = () => {
    // todoList.innerHTML = '';
    const currentArray = mainTodoList.filter(todo => todo.project === document.querySelector('.nav__button--active').textContent)
    currentArray.forEach(todo => createTodoTemplate(todo));
}

const changeActiveAttribute = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('nav__button--active'))
}



