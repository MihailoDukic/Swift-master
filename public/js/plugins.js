import Swiper from './vendors/swiper';

const luxy = require("./vendors/luxy");

// luxy init
luxy.init({
  wrapperSpeed: .1
});

const swiper = new Swiper(".products", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 2,
    spaceBetween: 60,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    breakpoints: {

      // when window width is <= 499px
      50: {
          slidesPerView: 1,
          spaceBetweenSlides: 0,

      
      },
      // when window width is <= 999px
      1024: {
          slidesPerView: 2,
          spaceBetweenSlides: 0
      }
  }

  });

  const swiperProducts = new Swiper(".product-swiper", {
    spaceBetween: 0,
    slidesPerView: 2,
    effect: "fade",
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },

  });

  const swiperInnovations = new Swiper(".product-innovation", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: false,
    effect: "fade",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });