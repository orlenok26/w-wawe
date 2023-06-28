let search = document.querySelector('.menu__functional-serch-form'); //форма поиска
let iconSearch = document.querySelector('.menu__functional-search-btn'); //лупа
let inputSearch = document.querySelector('.menu__functional-search-input');//инпут

iconSearch.addEventListener('click', function() {
    search.classList.toggle('menu__functional-serch-form_active');
    inputSearch.focus();
})
