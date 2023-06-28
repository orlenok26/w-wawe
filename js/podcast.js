let podcastBtn = document.querySelector('.podcast__btn');
let podcast = document.querySelector('.podcast__card-list_yet');
let podcastBtnExit = document.querySelector('.podcast__btn_exit');
let podcastYet480 = document.querySelectorAll('.podcast__card-item_yet');

podcastBtn.addEventListener('click', function () {
    podcast.classList.toggle('podcast__card-list_yet__active');
    podcastYet480.forEach((el) => {
        el.classList.toggle('podcast__card-item_yet_active')
    });
    podcastBtn.classList.toggle('podcast__btn_none');
    podcastBtnExit.classList.toggle('podcast__btn_exit_active');
})

podcastBtnExit.addEventListener('click', function () {
    podcast.classList.remove('podcast__card-list_yet__active');
    podcastYet480.forEach((el) => {
        el.classList.remove('podcast__card-item_yet_active')
    });
    podcastBtnExit.classList.remove('podcast__btn_exit_active');
    podcastBtn.classList.toggle('podcast__btn_none');

})


