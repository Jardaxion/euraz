$(document).ready(function(){
    // Открытие закрытие меню-каталог
    $('.js-open-desktop-menu').on('click',function(e){
        e.preventDefault();

        $('.header__menu').toggleClass("active");
        $(this).toggleClass('reverse');
    })

    $(document).on('click', (e) => {
        let log = (e.target == document.querySelector('.header__link') || e.target == document.querySelector('.js-open-desktop-menu svg path'));
        if(log && e.target == document.querySelector('.header__menu')){
            $('.header__menu').removeClass("active");
            $('.js-open-desktop-menu').removeClass('reverse');
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
    })

    //Прокручиваемая строка с картиками
    $('.partners__content').marquee({
        duration: 10000,
        startVisible: true,
    })

    //Адаптация
    $('.service__catalog').height($('.services__bottom').height());
})