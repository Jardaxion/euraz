$(document).ready(function(){
    // Открытие закрытие меню-каталог
    $('.js-open-desktop-menu').on('click',function(e){
        e.preventDefault();

        if($(window).width() > 960){
            $('.header__menu:not(.mobile)').toggleClass("active");
            $(this).toggleClass('reverse');
        } else{
            $('.header__menu.mobile').toggleClass("active");
            $(this).toggleClass('reverse');
        }
    })

    //Октрытие закрытие меню на телефоне
    $('.js-open-mobile-menu').on('click', function(e){
        e.preventDefault();

        openCloseMobMenu();
    })
    $('.header__mobileMenu-item').on('click', function(){
        if(!$(this).hasClass('js-open-desktop-menu')){
            openCloseMobMenu();
        }
    })

    //Закрытие открытие вопроса в faq
    $('.js-close-open-question').on('click', function(){
        $(this).toggleClass('select');

        $(this).parent().next().slideToggle();
    })

    //Слайдеры
    //Начальный слайдер
    $('.sliderMain__content').slick({
        nextArrow: '.sliderMain__rightArrow',
        prevArrow: '.sliderMain__leftArrow',
        customPaging : function(slider, i) {
            return '<div class="slider__dots"></div>';
        },
        dots: true,
        autoplay: true,
        speed: 650,
        autoplaySpeed: 5000,
        slidesPerRow: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 961,
                settings: {
                    arrows: false
                },
            }
        ]
    });
    //Слайдер как происходит получение услуги
    $('.questions__content').slick({
        dots: false,
        autoplay: false,
        nextArrow: '.questions__rightArrow',
        prevArrow: '.questions__leftArrow',
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 961,
                settings: {
                    slidesToShow: 2
                },
            },
            {
                breakpoint: 569,
                settings: {
                    slidesToShow: 1
                },
            }
        ]
    })

    //Прокручиваемая строка с картиками
    $('.partners__content').marquee({
        duration: 10000,
        startVisible: true,
    })

    //Модальные окна
    //Открытие
    $('.js-open-modal').on('click', function(e){
        e.preventDefault();

        if($('.js-open-desktop-menu').hasClass('reverse')){
            openCloseMenu();
        }

        if($('.js-open-mobile-menu').hasClass('reverse')){
            openCloseMobMenu();
        }

        openModal($(this).data('modal'));
    })
    //Закрытие
    $('.js-close-modal').on('click', function(e){
        e.preventDefault();

        closeModal();
    })
    $('.modal').on('click', function(e){
        e.preventDefault();

        if(e.target === document.querySelector('.modal')){
            closeModal();
        }

    })
    //Переоткрытие
    $('.js-reOpen-modal').on('click', function(e){
        e.preventDefault();

        reOpenModal($(this).data('modal'));
    })

    //Адаптация
    $(window).width() > 960 ? $('.service__catalog').height($('.services__bottom').height()) : false;
    adapSB();
})
//Функции
//Открытие-закртыие менюшки мобильной
function openCloseMobMenu(){
    $('.js-open-mobile-menu').toggleClass('reverse');
    $('.header__mobileMenu-wrapper').fadeToggle();
    $('body').toggleClass('noScroll');
    if($('.header__menu.mobile').hasClass('active')){
        $('.header__menu.mobile').removeClass('active');
    }
}

//Модальные окна
//Открытие
function openModal(id){
    $('.modal#'+id).addClass('active');
    $('.modal__background').addClass('active');
    $('body').addClass('noScroll');
}

//Закрытие
function closeModal() {
    $('.modal.active').removeClass('active');
    $('.modal__background').removeClass('active');
    $('body').removeClass('noScroll');
}

//Закрытие одного модального окна и открытие другого
function reOpenModal(id) {
    $('.modal.active').removeClass('active');
    $('.modal#'+id).addClass('active');
}

//Адаптация сервис боксов
// function adapSB(){
//     let max = 0;
//     $('.productBox__top').each(function(){
//         max = $(this).height() > max ?  $(this).height() : max;
//     })

//     $('.productBox__top').height(max);
// }