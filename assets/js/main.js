/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*========= MENU SHOW =========*/
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*========= MENU HIDDEN =========*/
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== GSAP ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    reset: true,
})

sr.reveal(`.nav__menu, .nav__logo`, {origin: 'right', opacity: 0, delay: 500})
sr.reveal(`.home__content`, {origin: 'left', delay: 800})
sr.reveal(`.home__planet-1`, {scale: 1, delay: 800})
sr.reveal(`.home__planet-2`, {scale: .8, delay: 700})
sr.reveal(`.home__rocket`, {scale: 1.5, delay: 1000})
sr.reveal(`.home__cloud-1`, {origin: 'bottom', delay: 1200})
sr.reveal(`.home__cloud-2`, {origin: 'bottom', delay: 1300})