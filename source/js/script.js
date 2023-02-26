const navSwitch = document.querySelector('.button-switch');
const mainNav = document.querySelector('.main-nav');
const lineMenu = document.querySelector('.page-header__content');

navSwitch.classList.remove('button-switch--nojs');
mainNav.classList.remove('main-nav--nojs');

navSwitch.addEventListener('click', function() {

  if (navSwitch.classList.contains('button-switch--closed') && mainNav.classList.contains('main-nav--closed')) {
    navSwitch.classList.remove('button-switch--closed');
    mainNav.classList.remove('main-nav--closed');
    navSwitch.classList.add('button-switch--open');
    mainNav.classList.add('main-nav--open');
    lineMenu.classList.remove('page-header__content--line');
  } else {
    navSwitch.classList.add('button-switch--closed');
    mainNav.classList.add('main-nav--closed');
    navSwitch.classList.remove('button-switch--open');
    mainNav.classList.remove('main-nav--open');
    lineMenu.classList.add('page-header__content--line');
  };
})
