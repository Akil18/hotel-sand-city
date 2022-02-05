const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: false,
    slideShadows: true,
    shadowOffset: 2,
    shadowScale: 0.8,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});