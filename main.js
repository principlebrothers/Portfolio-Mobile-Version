const menuButton = document.querySelector('#metaMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const closedButton = document.querySelector('.closed-btn');
const menuLinks = document.querySelectorAll('.in-text-link');

menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'block';
})

closedButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
})

for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  })
}