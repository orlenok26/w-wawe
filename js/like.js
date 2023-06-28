//увеличение лайков
document.addEventListener('click', ({ target: t }) => {
    if (t.classList.contains('like')) {
        const index = [...document.querySelectorAll('.like')].indexOf(t);
        const count = document.querySelectorAll('.like')[index];
        count.classList.toggle('like_active');
        count.innerText -= [ 1, -1 ][+count.classList.contains('like_active')];
    }
});

//увеличение поделиться
document.addEventListener('click', ({ target: t }) => {
    if (t.classList.contains('social')) {
        const index = [...document.querySelectorAll('.social')].indexOf(t);
        const count = document.querySelectorAll('.social')[index];
        count.classList.toggle('social_active');
        count.innerText -= [ 1, -1 ][+count.classList.contains('social_active')];
    }
});