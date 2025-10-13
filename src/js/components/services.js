function services() {
  const section = document.querySelector('.services');

  if (!section) return;

  function handlePopupAttributes() {
    const items = document.querySelectorAll('.services__item-btn');
    let isMobile = null; // флаг состояния

    function update() {
      const nowMobile = window.innerWidth < 768;

      if (nowMobile !== isMobile) {
        isMobile = nowMobile;

        items.forEach((btn) => {
          if (isMobile) {
            btn.dataset.originalPopup = btn.getAttribute('data-popup'); // сохраняем
            btn.removeAttribute('data-popup'); // убираем
          } else {
            if (btn.dataset.originalPopup) {
              btn.setAttribute('data-popup', btn.dataset.originalPopup);
              delete btn.dataset.originalPopup;
            }
          }
        });
      }
    }

    update();
    window.addEventListener('resize', update);
  }

  handlePopupAttributes();
}

export default services;
