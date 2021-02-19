const swiper = new Swiper('.swiper-container', {
     pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
 
    navigation: {
      nextEl: '.arow-left',
      prevEl: '.arow-right',
    },
    slidesPerView: 5,
    slidesPerColumn: 2,
    spaceBetween: 15,
    breakpoints: {
        1160:{
            slidesPerView: 5,
        },
        1023:{
            slidesPerView: 4,
        },
        750:{
            slidesPerView: 3,
        },
       680:{
            slidesPerView: 2,
        },
        300:{
            slidesPerView: 1,
        }
    },
  });