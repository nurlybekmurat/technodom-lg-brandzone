const toggle = document.querySelector("#toggle");
const toggleIcon = document.querySelector(".lg__theme-toggler-icon");
const navLogo = document.querySelector('.nav__logo');

toggle.addEventListener("click", modeSwitch);

let isLight = true;

function modeSwitch() {
  isLight = !isLight;
  isLight ? toggleIcon.classList.remove('lg__theme-toggler-icon--dark') 
          : toggleIcon.classList.add('lg__theme-toggler-icon--dark');
  isLight ? toggleIcon.src = 'https://www.technodom.kz/under/lg-brandzone/light.svg' 
          : toggleIcon.src = 'https://www.technodom.kz/under/lg-brandzone/dark.svg';
  isLight ? navLogo.src = 'https://www.technodom.kz/under/lg-brandzone/new-logo.png' 
          : navLogo.src = 'https://www.technodom.kz/under/lg-brandzone/new-logo-dark.png';
  var rootElement = document.body;
  rootElement.classList.toggle("darkMode");
}