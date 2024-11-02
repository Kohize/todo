
const todoDescription = document.querySelector('.todo__description');
const todoDate = document.querySelector('.todo__date');
const todoPriority = document.querySelector('.todo__priority');


export const showSpoiler = () => {
    todoDescription.style.display = 'block';
    todoDate.style.display = 'flex';
    todoPriority.style.display = 'flex';
}

export const hideSpoiler = () => {
    todoDescription.style.display = 'none';
    todoDate.style.display = 'none';
    todoPriority.style.display = 'none';
}