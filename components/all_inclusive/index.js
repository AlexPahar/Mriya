(function($) {
    'use strict';

    $(function() {
        let js_slider = $('.js-slick-slider')

        js_slider.each(function() {
            //Инициализируем для каждого блока свой слайдер
            $(this).slick({
                infinite: true,
                fade: true,
                cssEase: 'linear',
                speed: 500,
                appendArrows: $('.js-slick-arrow-container') // Перенос стрелок к тайтлу
            })
        })
    })
})(jQuery)