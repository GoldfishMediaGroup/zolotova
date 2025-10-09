import Swiper from 'swiper/bundle';
import { rem } from '../utils/constants';
window.$ = window.jQuery = require('jquery');

function education() {
  const section = document.querySelector('.education');

  if (!section) return;

  const swiper = new Swiper('.education__swiper', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: rem(1.6),
    navigation: {
      prevEl: section.querySelector('.swiper-button-prev'),
      nextEl: section.querySelector('.swiper-button-next')
    },
    breakpoints: {
      769: {
        slidesPerView: 3,
        spaceBetween: rem(2)
      }
    }
  });
}

export default education;
