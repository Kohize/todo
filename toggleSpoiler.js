export const formDescription = document.querySelector('.form__description');
export const formDate = document.querySelector('.form__date');
export const formPriority = document.querySelector('.form__priority');
export const fromTitle = document.querySelector('.form__title');


export const showSpoiler = () => {
    formDescription.style.display = 'block';
    formDate.style.display = 'flex';
    formPriority.style.display = 'flex';
}

export const hideSpoiler = () => {
    formDescription.style.display = 'none';
    formDate.style.display = 'none';
    formPriority.style.display = 'none';
}