

import Swiper from 'swiper/bundle';
import { rem } from '../utils/constants';
window.$ = window.jQuery = require('jquery');

function reviews() {
  const section = document.querySelector('.reviews');

  if (!section) return;

  const swiper = new Swiper('.reviews__swiper', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: rem(1.6),
    navigation: {
      prevEl: section.querySelector('.swiper-button-prev'),
      nextEl: section.querySelector('.swiper-button-next')
    },
    breakpoints: {
      769: {
        slidesPerView: 4,
        spaceBetween: rem(2)
      }
    }
  });
}

export default reviews;
