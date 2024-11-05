import './styles/style.scss'
import { showSpoiler, hideSpoiler } from './toggleSpoiler'
import { addTodoToList } from './renderTodo';
import { createNewWorkspace, showInput, switchWorkspace } from './createWorkspace';
const form = document.querySelector('.form');
const addButton = document.querySelector('.form__button-add');
const addNewListButton = document.querySelector('.nav__list-add');
const createButton = document.querySelector('.nav__create');
const navButton = document.querySelector('.nav__button');

/* 
TODO
✅Разметка: Колонка слева с разными видами туду. сами туду справа
✅Логика создания туду class + Пару моковых
Логика создание разных листов (слева) Для каждого листа создать свой массив, который будет отрисовываться
Удаление туду
Пометка завершенности туду
Логика переключения видов туду
Сохранение туду в LocalStorage

Есть общий массив туду, в котором есть массивы с объектами. Так 0 массив из общего массива туду,
включает в себя список туду (объекты)

Есть массив листов (слева). При создании листа создается новый объект со своим ID, который помещается
в общий массив листов.

0 объект листа из общего массива отвечает за отрисовку 0 массива, где есть список туду (объекты)

*/


navButton.addEventListener('click', (e) => {
    switchWorkspace();
    e.target.classList.add('nav__button--active')
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
