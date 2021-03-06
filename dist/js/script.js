'use stritch';

document.addEventListener('DOMContentLoaded', () => {   
    
/***********Открытие/закрытие бургерменю */
    const header__burger = document.querySelector('.header__burger'),
          menu__body = document.querySelector('.menu__body');
          

    header__burger.addEventListener('click', () => {
        header__burger.classList.toggle('active');
        menu__body.classList.toggle('active');
        document.body.classList.toggle('lock');
    });

/***Добавление фона*******/
    window_width = document.documentElement.clientWidth;
    header_bg = document.querySelector('header');
    pageYscroll = pageYOffset;

    function addBackgroun_width() {
        if (window_width<=1100 && pageYscroll>280) {
            header_bg.classList.add('header__bg');
        } else if (window_width>=1100){
            header_bg.classList.remove('header__bg');            
        }
    }

    window.onresize = function() {
        window_width = document.documentElement.clientWidth;
    };

    window.addEventListener('scroll', function() {
        pageYscroll = pageYOffset; 
        if (pageYscroll>280) {
            header_bg.classList.add('header__bg');
        } else if (pageYscroll<280 && window_width>=1100) {
            header_bg.classList.remove('header__bg');            
        }
      });
    
;
        const goAbout = document.querySelector('#goAbout');

    goAbout.addEventListener('click', function() {
        window.scrollTo(0,820);
    });   
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
     
    new Swiper('.testimonials-slider', { 
    //Авто высота
    autoHeight:true,
    pagination: {
        el:'.swiper-pagination',
        clickable: true}
});
  
});