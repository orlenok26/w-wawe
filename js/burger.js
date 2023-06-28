let burger = document.querySelector('.menu-burger'); //кнопка для открытия меню
let menu = document.querySelector('.menu__nav-list'); //верхнее меню
let lowerMenu = document.querySelector('.lower-menu__list') //нижние меню
let menuLinks = menu.querySelectorAll('.menu__nav-link'); //ссылки верхнего меню
let lowerMenuLinks = lowerMenu.querySelectorAll('.lower-menu__link'); //ссылки нижнего меню
let burgerList = menu.querySelector('.menu__burger-list');

burger.addEventListener('click', function () {
    menu.classList.toggle('menu__nav_active');
    lowerMenu.classList.toggle('lower-menu_active');
})

menuLinks.forEach(function (el) {
    el.addEventListener('click', function() {
        burger.classList.remove('menu__burger-list_active');
        menu.classList.remove('menu__nav_active');
        lowerMenu.classList.remove('lower-menu_active');
    })
    burgerList.addEventListener('click', function() {
        menu.classList.toggle('menu__nav_active');
        lowerMenu.classList.toggle('lower-menu_active');
    })
})

