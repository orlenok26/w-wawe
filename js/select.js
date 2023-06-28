const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false,
    shouldSort: false,
    position: 'bottom',
    itemSelectText: '',
});

let ariaLabel = element.getAttribute('aria-label');
element.closest('select').setAttribute('aria-label', ariaLabel);
