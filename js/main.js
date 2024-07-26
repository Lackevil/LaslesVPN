// Menu burger

const burger = document.querySelector('#burger')
const header = document.querySelector('.header')
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  header.classList.toggle('active')
  body.classList.toggle('overflow')
})

// Slider

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  centeredSlides: true,
  freeMode: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    702: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1066: {
      slidesPerView: 3,
      spaceBetween: 50
    }
  }
});