const links = document.querySelectorAll('.category-cards__btn');

links.forEach(item => {
  let parentEl = item.parentElement.parentElement;
  let parentLink = parentEl.querySelector('.category-cards__link');
  if(item.href) {
    parentLink.href = item.href;
  }
})