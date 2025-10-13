import { gsap, ScrollTrigger } from 'gsap/all';

function headerBurger() {
  const burger = document.querySelector('.burger');
  if (!burger) return;

  const body = document.body;

  const logo = document.querySelector('.header__logo');

  const navWrapper = document.querySelector('.header__nav-wrapper');

  // Класс для блокировки скролла
  const disableScrollClass = 'no-scroll';

  function openBurger() {
    body.classList.add(disableScrollClass);

    burger.classList.add('isOpen');
    navWrapper.classList.add('isOpen');

    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: 'smooth'
    // });
  }

  function closeBurger() {
    body.classList.remove(disableScrollClass);

    burger.classList.remove('isOpen');
    navWrapper.classList.remove('isOpen');
  }

  burger.addEventListener('click', () => {
    burger.classList.contains('isOpen') ? closeBurger() : openBurger();
  });

  logo.addEventListener('click', closeBurger);

  navWrapper.addEventListener('click', (e) => {
    if (
      e.target.classList.contains('header__link') ||
      e.target.classList.contains('btn-arr') ||
      e.target.classList.contains('header__social')
    ) {
      e.stopPropagation();
      closeBurger();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && burger.classList.contains('isOpen')) {
      closeBurger();
    }
  });
}

export default headerBurger;
