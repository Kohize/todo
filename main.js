import './styles/style.scss'
import { showSpoiler, hideSpoiler } from './toggleSpoiler'
const todo = document.querySelector('.todo');

/* 
TODO
Разметка: Колонка слева с разными видами туду. сами туду справа
Логика создания туду class + Пару моковых
Удаление туду
Пометка завершенности туду
Логика переключения видов туду
Сохранение туду в LocalStorage

*/


todo.addEventListener('click', (e) => {
    if (e.target.classList.contains('todo__title')) {
        showSpoiler();
    }
})
document.addEventListener('click', (e) => {
    if (todo !== e.target && !todo.contains(e.target)) {
        hideSpoiler();
    }
})
