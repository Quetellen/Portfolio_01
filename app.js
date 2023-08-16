const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() { 
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// https://www.youtube.com/watch?v=3-2Pj5hxwrw
// https://github.com/briancodex/html-css-js-website-smooth-scroll/blob/master/app.js