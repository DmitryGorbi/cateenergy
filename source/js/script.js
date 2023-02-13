const navSwitch = document.querySelector('.button-switch');
const mainNav = document.querySelector('.main-nav');

navSwitch.addEventListener('click', function() {

  if (navSwitch.classList.contains('button-switch--closed') && mainNav.classList.contains('main-nav--closed')) {
    navSwitch.classList.remove('button-switch--closed');
    mainNav.classList.remove('main-nav--closed');
    navSwitch.classList.add('button-switch--open');
    mainNav.classList.add('main-nav--open');
  } else {
    navSwitch.classList.add('button-switch--closed');
    mainNav.classList.add('main-nav--closed');
    navSwitch.classList.remove('button-switch--open');
    mainNav.classList.remove('main-nav--open');
  };
})

// if (mainNav.classList.contains('main-nav--closed')) {
//   navSwitch.classList.remove('main-nav--closed');
//   navSwitch.classList.add('main-nav--open');
// } else {
//   navSwitch.classList.add('main-nav--closed');
//   navSwitch.classList.remove('main-nav--open');
// };
