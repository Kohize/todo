import { mainTodoList, todoListWrapper, createTodoTemplate } from './renderTodo';

const navList = document.querySelector('.nav__list');
const inputWrapper = document.querySelector('.nav__input-wrapper');
const navInput = document.querySelector('.nav__input');
let mainWorkspaceArray = JSON.parse(localStorage.getItem('listArray'))
let indexCounter = 0;

class Workspace {
    constructor(index, project) {
        this.index = index;
        this.project = project;
    }
}

export const showInput = () => {
    inputWrapper.style.display = 'flex';
}

export const closeInput = () => {
    inputWrapper.style.display = 'none';
}

export const addWorkspaceToList = () => {
    const workspace = new Workspace(indexCounter++, navInput.value)
    mainWorkspaceArray.push(workspace);
    localStorage.setItem('listArray', JSON.stringify(mainWorkspaceArray))
    console.log(mainWorkspaceArray);
    createNewWorkspace(workspace);
}


export const createNewWorkspace = (workspace) => {
    const buttonWrapper = document.createElement('div');
    const newTab = document.createElement('button');
    const cross = document.createElement('span');
    buttonWrapper.classList.add('nav__button-wrapper');
    cross.classList.add('nav__delete');
    newTab.classList.add('nav__button');
    newTab.textContent = workspace.project;
    buttonWrapper.append(newTab);
    buttonWrapper.append(cross);
    navList.append(buttonWrapper);
    cross.innerHTML = '&times;'
    navInput.value = '';
    inputWrapper.style.display = 'none';
    console.log(mainTodoList);

    newTab.addEventListener('click', (e) => {
        changeActiveAttribute();
        e.target.classList.add('nav__button--active');
        switchWorkspace();
    });

    buttonWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav__delete')) {
            removeWorkspace(workspace)
            e.target.parentNode.remove();
            localStorage.setItem('listArray', JSON.stringify(mainWorkspaceArray))
        }
    })

}

export const renderWorkspaces = () => {
    if (mainWorkspaceArray === null) {
        mainWorkspaceArray = [];
    } else {
        mainWorkspaceArray.forEach(workspace => createNewWorkspace(workspace));
    }
    console.log(mainWorkspaceArray);

}

export const switchWorkspace = () => {
    todoListWrapper.innerHTML = '';
    const currentArray = mainTodoList.filter(todo => todo.project === document.querySelector('.nav__button--active').innerHTML)
    console.log('currentarray is');
    console.log(currentArray);
    currentArray.forEach(todo => createTodoTemplate(todo));
}

export const changeActiveAttribute = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => button.classList.remove('nav__button--active'))
}

export const removeWorkspace = (workspace) => {
    mainWorkspaceArray.splice(workspace.index, 1)
}



