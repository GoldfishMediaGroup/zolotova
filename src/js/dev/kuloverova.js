import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, ScrollToPlugin } from 'gsap/all';
window.$ = window.jQuery = require('jquery');

import { rem } from '../utils/constants';

import popup from '../utils/popup';
import form from '../utils/form';
import scroll from '../utils/scroll';
import fancybox from '../utils/fancybox';

import smoothScroll from '../components/smoothScroll';
import headerBurger from '../components/headerBurger';
import footerCookieDisclamer from '../components/footerCookieDisclamer';
import about from '../components/about';
import hero from '../components/hero';
import way from '../components/way';
import services from '../components/services';
import education from '../components/education';
import cert from '../components/cert';
import reviews from '../components/reviews';
import showMoreMob from '../components/showMoreMob';
import test from '../components/test';
import otherArticles from '../components/otherArticles';

import '../libs/dynamic_adapt';

export const modules = {};
// if (history.scrollRestoration) {
//   history.scrollRestoration = 'manual';
// }
// window.scrollTo(0, 0);

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  popup();
  form();
  scroll();
  fancybox();
  footerCookieDisclamer();
  smoothScroll();
  headerBurger();
  about();
  hero();
  way();
  services();
  education();
  cert();
  reviews();
  showMoreMob('.education__text', 114, '42rem', '.education__show-more');
  test();
  otherArticles();
});
