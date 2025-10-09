import Swiper from 'swiper/bundle';
import { rem } from '../utils/constants';
window.$ = window.jQuery = require('jquery');

function hero() {
  const section = document.querySelector('.hero');

  if (!section) return;

  const removeVideoBtn = document.querySelector('.hero__video-close');

  if (removeVideoBtn) {
    removeVideoBtn.addEventListener('click', () => {
      removeVideoBtn.parentElement.classList.add('isRemoved');
      setTimeout(() => {
        removeVideoBtn.parentElement.remove;
      }, 400);
    });
  }

  const swiper = new Swiper('.hero__swiper', {
    slidesPerView: 1,
    speed: 800,
    spaceBetween: rem(2),
    pagination: {
      el: section.querySelector('.swiper-pagination')
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        spaceBetween: rem(2)
      }
    }
  });
}

export default hero;
