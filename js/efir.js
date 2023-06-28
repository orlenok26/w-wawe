let btn = document.querySelector('.btn-efir__btn4'); //кнопка для открытия меню
let lowerMenuBtn = document.querySelector('.btn-efir__btn-grp'); //меню
//let menuLinks = menu.querySelectorAll('.menu__nav_link'); //ссылки верхнего меню
//let lowerMenuLinks = lowerMenu.querySelectorAll('.lower_menu__nav_link'); //ссылки нижнего меню
// let burgerList = menu.querySelector('.menu__burger_list');

btn.addEventListener('click', function () {
    lowerMenuBtn.classList.toggle('btn-efir__btn-grp_active');
    btn.classList.toggle('btn-efir__btn4_active');
    //lowerMenu.classList.toggle('lower_menu__nav_active');
})
