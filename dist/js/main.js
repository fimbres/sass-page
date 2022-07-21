const menuBtn = document.querySelector('.menu-btn');
const hamburguer = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburguer.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        showMenu = true;
    }
    else {
        hamburguer.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        showMenu = false;
    }
}