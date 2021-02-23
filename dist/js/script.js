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

});
;
