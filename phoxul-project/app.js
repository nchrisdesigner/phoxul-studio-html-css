const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.hamburger');

const burgerFirstLine = document.querySelector('.hamburger__line:nth-child(1)');
const burgerSecondLine = document.querySelector('.hamburger__line:nth-child(2)');
const burgerThirdLine = document.querySelector('.hamburger__line:nth-child(3)');

burger.addEventListener('click', () => {
    burgerFirstLine.classList.toggle('hamburger__line-1');
    burgerSecondLine.classList.toggle('hamburger__line-2');
    burgerThirdLine.classList.toggle('hamburger__line-3');

    nav.classList.toggle('display__nav');
})