function test() {
  const quiz = document.querySelector('.quiz');
  if (!quiz) return;

  const fieldsets = document.querySelectorAll('.quiz__fieldset');
  const progTrack = document.querySelector('.quiz__prog-track');
  const progPoint = document.querySelector('.quiz__prog-point');
  const progPointNum = document.querySelector('.quiz__prog-point-num span');
  const progBox = document.querySelector('.quiz__prog-box');

  const result = document.querySelector('.quiz__result');
  const btn = document.querySelector('.quiz__btn-arr');

  let critical = +quiz.dataset.critical;
  let meaning = quiz.dataset.meaning;

  let percentage = (1 / fieldsets.length) * 100;
  progTrack.style.width = `${percentage}%`;
  progPoint.style.left = `${percentage}%`;

  let markers = 0;
  function declensionOfPoints(points) {
    const lastDigit = points % 10;
    const lastTwoDigits = points % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
      return 'баллов';
    }

    if (lastDigit === 1) {
      return 'балл';
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
      return 'балла';
    }

    return 'баллов';
  }

  fieldsets.forEach((fieldset) => {
    fieldset.addEventListener('click', (e) => {
      let target = e.target;

      const id = fieldset.getAttribute('data-question_id');

      percentage = ((+id + 2) / fieldsets.length) * 100;

      if (target.classList.contains('quiz__label')) {
        if (id != fieldsets.length - 1) {
          e.preventDefault();
          target.classList.add('isClick');
          markers += +target.dataset.mark;

          if (id == fieldsets.length - 2) {
            setTimeout(() => {
              progBox.classList.add('isEnd');
              progPointNum.parentElement.textContent = 'Результат';
              result.textContent = `${markers} ${declensionOfPoints(markers)}`;
            }, 300);
            if (!eval(markers + meaning + critical)) {
              btn.style.display = 'none';
            }
          }
          // markers += +el.dataset.mark;

          setTimeout(() => {
            progTrack.style.width = `${percentage}%`;
            progPoint.style.left = `${percentage}%`;

            if (progPointNum) progPointNum.textContent = +id + 2;

            fieldsets.forEach((fieldset) => {
              fieldset.classList.remove('isActive');
            });
            fieldsets[+id + 1].classList.add('isActive');
          }, 300);
        }
      }
    });
  });
}

export default test;
