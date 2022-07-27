const navSlide = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')
const navLinks = document.querySelector('.nav-links li')
const nightDay = document.querySelector('.nav-img')

navSlide.addEventListener('click', navShow)

function navShow() {
  // to toggle navs
  navSlide.classList.toggle('toggle')
  nav.classList.toggle('nav-active')


}

// OR arrow function method

// navSlide.onclick =() =>{
// nav.classList.toggle('nav-active')
// }

nightDay.onclick = () => {
  document.body.classList.toggle('darkTheme')
}

// to prevent form resubmission
if(window.history.replaceState){
  window.history.replaceState(null, null, window.location.href)
}
