//табы для гостей
let tabsBtn = document.querySelectorAll('.guest__author-btn'); //кнопка на которую нажимаем
let tabsItem = document.querySelectorAll('.guest__author-info');//то, что надо открыть
let tabsPlug = document.querySelector('.guest__plag');

tabsBtn.forEach(function(element) {
    element.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;
        tabsBtn.forEach(function(btn) {
            btn.classList.remove('guest__author-btn_active'); //снимает цвет с уже выделенной
        });
        e.currentTarget.classList.add('guest__author-btn_active'); //меняет цвет кнопки, что она активна

        tabsItem.forEach(function(element) {
            element.classList.remove('guest__author-info_active'); //видимость убирает
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('guest__author-info_active'); // добавляет видимость
        tabsItem.forEach(function(element) {
            element.scrollIntoView();
        });
    });
});

