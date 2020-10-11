(function($) {
    'use script'

    $(function() {
        let burger_button = $('.burger-button'),
            burger_block = $('.burger-block'),
            burger_close = $('.burger-block__close');
        
        burger_button.on('click', () => {
            burger_block.fadeIn(800)
            $('html, body').addClass('overflow')

            let js_slider = $('.js-burger-slider')

            js_slider.each(function() {
                //Инициализируем для каждого блока свой слайдер
                $(this).slick({
                    infinite: true,
                    fade: true,
                    cssEase: 'linear',
                    speed: 3000,
                    arrows: false,
                    dots: true,
                    autoplay: true
                })
            })
        })
        burger_close.on('click', () => {
            burger_block.fadeOut(800)
            $('html, body').removeClass('overflow')

            let js_slider = $('.js-burger-slider')

            js_slider.each(function() {
                $(this).slick('unslick');
            })
        })

        let Scrollbar = window.Scrollbar; //Инициализация класса скрола

        Scrollbar.init(document.querySelector('.burger-block__content_menu_left')) //работа скрола для меню

        let burger_menu_item = $('.burger-block__content_menu_left_item.submenu'),
            right_menu_container = $('.burger-block__content_menu_right')

        burger_menu_item.each(function() {
            $(this).click(function(e) {
                e.preventDefault()

                right_menu_container.children().remove()
                Scrollbar.destroy(document.querySelector('.burger-block__content_menu_right ul'))

                let submenu = $(this).parent().find('.menu-submenu').clone()
                right_menu_container.append(submenu)
                Scrollbar.init(document.querySelector('.burger-block__content_menu_right ul'))
                
            })
            // $(this).mouseleave(function() {
            //     right_menu_container.children().remove()
            //     Scrollbar.destroy(document.querySelector('.burger-block__content_menu_right ul'))
            // })
        })
    })
})(jQuery)