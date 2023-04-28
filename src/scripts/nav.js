const navBtn = document.querySelector('.nav__btn');
const navCloseBtn = document.querySelector('.nav__close-btn');
const nav = document.querySelector('.nav__list');
const navIcon = document.querySelector('.nav__btn-icon');
const navLinks = document.querySelectorAll('.nav__item-link');
const navElement = document.querySelector('.nav');
const navBtnText = document.querySelector('.nav__btn-text');

function navBtnHandler() {
  nav.classList.toggle('nav__list--active');
  navIcon.classList.toggle('nav__btn-icon--active');
  navBtnText.classList.toggle('nav__btn-text--active');
}

navBtn.addEventListener('click', navBtnHandler);
navCloseBtn.addEventListener('click', navBtnHandler);
navLinks.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.remove('nav__list--active');
  })
})

navLinks.forEach((link) => {
  const path = link.getAttribute('href');
  let block = document.querySelector(path);

  link.addEventListener('click', (event) => {
    event.preventDefault();
    block.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
});

const params = (new URL(document.location)).searchParams;
var source = params.get('source');
if (source === 'mobile-app') {
  navElement.classList.add('nav--mobile');
}