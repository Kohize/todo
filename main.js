import './styles/style.scss'
import { showSpoiler, hideSpoiler } from './toggleSpoiler'
import { addTodoToList } from './renderTodo';
const form = document.querySelector('.form');
const addButton = document.querySelector('.form__button-add');

/* 
TODO
✅Разметка: Колонка слева с разными видами туду. сами туду справа
✅Логика создания туду class + Пару моковых
Логика создание разных листов (слева) Для каждого листа создать свой массив, который будет отрисовываться
Удаление туду
Пометка завершенности туду
Логика переключения видов туду
Сохранение туду в LocalStorage

*/


form.addEventListener('click', (e) => {
    if (e.target.classList.contains('form__title')) {
        showSpoiler();
    }
})
document.addEventListener('click', (e) => {
    if (form !== e.target && !form.contains(e.target)) {
        hideSpoiler();
    }
})

addButton.addEventListener('click', addTodoToList);