new Swiper('.image-slider', { 
    //Авто высота
    autoHeight:true,
    slidesPerView:3,
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        1470: {slidesPerView:3},
        1000: {slidesPerView:2},
        800: {slidesPerView:1},
        0: {slidesPerView:1}
      },
    //Булеты, навигация, текущее положение
    pagination: {
        el:'.swiper-pagination',
        clickable: true
    }
});
  