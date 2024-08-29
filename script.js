const navEl = document.querySelector('.nav-link-icon-wrapper')

document.addEventListener('click', function (e) {
  if (e.target.className === 'close-btn') {
    navEl.classList.remove('nav-open')
  } else if (e.target.className === 'menu-hamburger') {
    navEl.classList.add('nav-open')
  }
})
