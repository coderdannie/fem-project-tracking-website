'use strict';
const toggleBar = document.querySelector('.header__bar');
const ulContainer = document.querySelector('.header__mobile-nav');
toggleBar.addEventListener('click', () => {
  if (!toggleBar.classList.contains('active')) {
    toggleBar.classList.add('active');
    ulContainer.style.visibility = 'visible';
    ulContainer.style.opacity = '1';
  } else {
    toggleBar.classList.remove('active');
    ulContainer.style.visibility = 'hidden';
    ulContainer.style.opacity = '0';
  }
});
