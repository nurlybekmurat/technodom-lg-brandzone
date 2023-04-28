import Swiper from "./swiper";

const swiper = new Swiper(".swiper-objet", {
  pagination: {
    el: ".swiper-objet-pagination",
    clickable: true,
  },
  clickable: true,
  slidesPerView: 3,
  spaceBetween: 8,
  breakpoints: {
    550: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    960: {
      slidesPerView: 5,
      spaceBetween: 8,
    },
  },
});

r46(
  "recommend",
  "a62d0bebabd248eb853871098ccbe398",
  {
    locations: [JSON.parse(localStorage.getItem('cityMagentoId'))?.data],
    items: [256792,257698,257000,256999,257180,257001],
    limit: 5,
  },
  function (response) {
      const slides = response.html.match(/(<div class="swiper-slide">)(.*?)(<\/a><\/div>)/g);
      //swiper.removeAllSlides();
      swiper.appendSlide(slides);
  },
  function (error) {
      console.error(`Ошибка в следующем: ${error}`);
  }
);

const swiperTv = new Swiper(".swiper-tv", {
  pagination: {
    el: ".swiper-tv-pagination",
    clickable: true,
  },
  clickable: true,
  slidesPerView: 3,
  spaceBetween: 8,
  breakpoints: {
    550: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    960: {
      slidesPerView: 5,
      spaceBetween: 8,
    },
  },
});

r46(
  "recommend",
  "e0e0c8a85f66e4bc49d060ebaeb7a3fc",
  {
    locations: [JSON.parse(localStorage.getItem('cityMagentoId'))?.data],
    limit: 5,
  },
  function (response) {
      const slides = response.html.match(/(<div class="swiper-slide">)(.*?)(<\/a><\/div>)/g);
      //swiper.removeAllSlides();
      swiperTv.appendSlide(slides);
  },
  function (error) {
      console.error(`Ошибка в следующем: ${error}`);
  }
);

const swiperKitchen = new Swiper(".swiper-kitchen", {
  pagination: {
    el: ".swiper-kitchen-pagination",
    clickable: true,
  },
  clickable: true,
  slidesPerView: 3,
  spaceBetween: 8,
  breakpoints: {
    550: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    960: {
      slidesPerView: 5,
      spaceBetween: 8,
    },
  },
});

r46(
  "recommend",
  "500b90ea996243f8261f260d6c4d5785",
  {
    locations: [JSON.parse(localStorage.getItem('cityMagentoId'))?.data],
    limit: 5,
  },
  function (response) {
      const slides = response.html.match(/(<div class="swiper-slide">)(.*?)(<\/a><\/div>)/g);
      //swiper.removeAllSlides();
      swiperKitchen.appendSlide(slides);
  },
  function (error) {
      console.error(`Ошибка в следующем: ${error}`);
  }
);

const swiperAppliances = new Swiper(".swiper-appliances", {
  pagination: {
    el: ".swiper-appliances-pagination",
    clickable: true,
  },
  clickable: true,
  slidesPerView: 3,
  spaceBetween: 8,
  breakpoints: {
    550: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    960: {
      slidesPerView: 5,
      spaceBetween: 8,
    },
  },
});

r46(
  "recommend",
  "f54076b009672f74decd8372117cd384",
  {
    locations: [JSON.parse(localStorage.getItem('cityMagentoId'))?.data],
    limit: 5,
  },
  function (response) {
      const slides = response.html.match(/(<div class="swiper-slide">)(.*?)(<\/a><\/div>)/g);
      //swiper.removeAllSlides();
      swiperAppliances.appendSlide(slides);
  },
  function (error) {
      console.error(`Ошибка в следующем: ${error}`);
  }
);

const swiperIt = new Swiper(".swiper-it", {
  pagination: {
    el: ".swiper-it-pagination",
    clickable: true,
  },
  clickable: true,
  slidesPerView: 3,
  spaceBetween: 8,
  breakpoints: {
    550: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    960: {
      slidesPerView: 5,
      spaceBetween: 8,
    },
  },
});

r46(
  "recommend",
  "8d2fbde705156f3fa0bf63099ada2254",
  {
    locations: [JSON.parse(localStorage.getItem('cityMagentoId'))?.data],
    limit: 5,
  },
  function (response) {
      const slides = response.html.match(/(<div class="swiper-slide">)(.*?)(<\/a><\/div>)/g);
      //swiper.removeAllSlides();
      swiperIt.appendSlide(slides);
  },
  function (error) {
      console.error(`Ошибка в следующем: ${error}`);
  }
);

const swiperAudio = new Swiper(".swiper-audio", {
  pagination: {
    el: ".swiper-audio-pagination",
    clickable: true,
  },
  clickable: true,
  slidesPerView: 3,
  spaceBetween: 8,
  breakpoints: {
    550: {
      slidesPerView: 4,
      spaceBetween: 8,
    },
    960: {
      slidesPerView: 5,
      spaceBetween: 8,
    },
  },
});

r46(
  "recommend",
  "bc0f91b7a889fcd08614135a43b8abb3",
  {
    locations: [JSON.parse(localStorage.getItem('cityMagentoId'))?.data],
    limit: 5,
  },
  function (response) {
      const slides = response.html.match(/(<div class="swiper-slide">)(.*?)(<\/a><\/div>)/g);
      //swiper.removeAllSlides();
      swiperAudio.appendSlide(slides);
  },
  function (error) {
      console.error(`Ошибка в следующем: ${error}`);
  }
);