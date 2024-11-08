import './styles/style.scss'
import { showSpoiler, hideSpoiler } from './toggleSpoiler'
import { addTodoToList, renderOnPageLoad } from './renderTodo';
import { createNewWorkspace, showInput, switchWorkspace, changeActiveAttribute } from './createWorkspace';
const form = document.querySelector('.form');
const addButton = document.querySelector('.form__button-add');
const addNewListButton = document.querySelector('.nav__list-add');
const createButton = document.querySelector('.nav__create');
const navButton = document.querySelector('.nav__button');

/* 
TODO
✅Разметка: Колонка слева с разными видами туду. сами туду справа
✅Логика создания туду class + Пару моковых
✅Логика создание разных листов (слева) Для каждого листа создать свой массив, который будет отрисовываться
✅Логика переключения видов туду
Удаление туду
Пометка завершенности туду
Сохранение туду в LocalStorage
*/
renderOnPageLoad();

navButton.addEventListener('click', (e) => {
    changeActiveAttribute();
    e.target.classList.add('nav__button--active')
    switchWorkspace();
});

// Показать форму для создания туду
form.addEventListener('click', (e) => {
    if (e.target.classList.contains('form__title')) {
        showSpoiler();
    }
})
// Спрятать форму для создания туда
document.addEventListener('click', (e) => {
    if (form !== e.target && !form.contains(e.target)) {
        hideSpoiler();
    }
})

// Добавить новое туду в список
addButton.addEventListener('click', addTodoToList);

// Создать новый лист (слева)
addNewListButton.addEventListener('click', createNewWorkspace);

// Показать инпут для нового листа
createButton.addEventListener('click', showInput);

