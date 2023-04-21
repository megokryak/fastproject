var navMain = document.querySelector('.header');
var navToggle = document.querySelector('.header__toggle');
var map = document.querySelector('.contacts__img');
var toggleColor = document.querySelector('.main-nav__toggle-color');

navMain.classList.remove('header--nojs');
map.classList.remove('contacts__img--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header--closed-menu')) {
    navMain.classList.remove('header--closed-menu');
    navMain.classList.add('header--open-menu');
  } else {
    navMain.classList.remove('header--open-menu');
    navMain.classList.add('header--closed-menu');
  }
});

toggleColor.addEventListener('click', function() {
  if (toggleColor.classList.contains('main-nav__toggle-color--dark')) {
    toggleColor.classList.remove('main-nav__toggle-color--dark');
  } else {
    toggleColor.classList.add('main-nav__toggle-color--dark');
  }
});

window.addEventListener('scroll', function (e) {
    e.preventDefault();

    if (window.pageYOffset >= 70) {
      navMain.classList.add('header--fixed');

    } else {
      navMain.classList.remove('header--fixed');
    }
  });