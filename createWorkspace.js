const navList = document.querySelector('.nav__list');
const inputWrapper = document.querySelector('.nav__input-wrapper');
const navInput = document.querySelector('.nav__input');
const createButton = document.querySelector('.nav__create');

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
}




