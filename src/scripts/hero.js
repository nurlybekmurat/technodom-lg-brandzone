import Swiper from "./swiper";

const swiper = new Swiper(".hero__slider", {
  loop: true,
  clickable: true,
  slidesPerView: 1,
  touchEventsTarget: "container",

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});