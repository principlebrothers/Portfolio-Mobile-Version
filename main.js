const menuButton = document.querySelector('#metaMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const closedButton = document.querySelector('.closed-btn'); 
const menuLinks = document.querySelectorAll('.in-text-link'); 

menuButton.addEventListener('click', () => { 
    mobileMenu.style.display = 'block'; }) 