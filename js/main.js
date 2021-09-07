const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true, /*чтобы слайдер работал бесконечно-перелистывал с последнего слайда на первый*/
  navigation: {
    nextEl: '.arrow',    
  },

   // Responsive breakpoints
   breakpoints: {    
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});

// активируем и убираем меню, при клике на по кнопке-бургер

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');
menuButton.addEventListener('click', function () {
  console.log('Клик по кнопке бургер-меню');
  menuButton.classList.toggle('menu-button-active');
  menu.classList.toggle('header-active');
})