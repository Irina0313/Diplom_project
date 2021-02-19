const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.arow-left',
      prevEl: '.arow-right',
    },
    grabCursor: true,
    autoplay:{
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    //Вариант прокрутки 3D, интересно, но не сюда, при изменении конткнта можно пробовать
    /*effect: 'cube',
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94
    }*/
  });