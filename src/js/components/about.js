window.$ = window.jQuery = require('jquery');

function about() {
  const section = document.querySelector('.about');

  if (!section) return;

  const showMoreBtn = section.querySelector('.about__show-more');
  const hideBlock = section.querySelector('.about__requests-wrap');

  showMoreBtn.addEventListener('click', () => {
    showMoreBtn.classList.toggle('isOpen');
    $(hideBlock).slideToggle();
  });
}

export default about;
