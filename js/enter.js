const button = document.querySelector('.menu__functional-btn');
const buttonMobile = document.querySelector('.logo-1024_link');
const enter = document.querySelector('.menu-enter');
const enterWindow = document.querySelector('.enter-window')
const buttonOut = document.querySelector('.enter-window__article-out')

button.addEventListener('click', () => {
    enter.classList.add('open');
    enterWindow.classList.add('open');
});

buttonMobile.addEventListener('click', () => {
    enter.classList.add('open');
    enterWindow.classList.add('open');
});

buttonOut.addEventListener('click', () => {
    enter.classList.remove('open');
    enterWindow.classList.remove('open');
});
