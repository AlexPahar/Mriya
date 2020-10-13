"use strict";

(function ($) {
  'use strict';

  var Scrollbar = window.Scrollbar;
  $(function () {
    var menu_tab = $('.tabsmenu li');
    if (!menu_tab.length) return;
    menu_tab.on('click', function () {
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      SwitchTab($(this).index());
    });
    var js_slider = $('.js-slick-slider');
    js_slider.each(function () {
      //Инициализируем для каждого блока свой слайдер
      $(this).slick({
        infinite: true,
        fade: true,
        cssEase: 'linear',
        speed: 500,
        appendArrows: $('.js-slick-arrow-container') // Перенос стрелок к тайтлу

      });
    });
    var burger_button = $('.burger-button'),
        burger_block = $('.burger-block'),
        burger_close = $('.burger-block__close');
    burger_button.on('click', function () {
      burger_block.fadeIn(800);
      $('html, body').addClass('overflow');
      var js_slider = $('.js-burger-slider');
      js_slider.each(function () {
        //Инициализируем для каждого блока свой слайдер
        $(this).slick({
          infinite: true,
          fade: true,
          cssEase: 'linear',
          speed: 3000,
          arrows: false,
          dots: true,
          autoplay: true
        });
      });
    });
    burger_close.on('click', function () {
      burger_block.fadeOut(800);
      $('html, body').removeClass('overflow');
      var js_slider = $('.js-burger-slider');
      js_slider.each(function () {
        $(this).slick('unslick');
      });
    });
    Scrollbar.init(document.querySelector('.burger-block__content_menu_left'));
    var burger_menu_item = $('.burger-block__content_menu_left_item.submenu'),
        right_menu_container = $('.burger-block__content_menu_right');
    burger_menu_item.each(function () {
      $(this).click(function (e) {
        if (window.matchMedia("(min-width: 961px)").matches) {
          e.preventDefault();
          right_menu_container.children().remove();
          Scrollbar.destroy(document.querySelector('.burger-block__content_menu_right ul'));
          var submenu = $(this).parent().find('.menu-submenu').clone();
          right_menu_container.append(submenu);
          Scrollbar.init(document.querySelector('.burger-block__content_menu_right ul'));
        } else {
          e.preventDefault();

          var _submenu = $(this).parent().find('.menu-submenu');

          _submenu.slideToggle(500);
        }
      });
    });
    $('.burger-block__lang_item_active').on('click', function (e) {
      e.preventDefault();
      $(this).parent().toggleClass('opened');
    });
  });

  var SwitchTab = function SwitchTab(index) {
    var container_tab = $('.tabsmenu-wrapper .container');
    if (!container_tab.eq(index).length) return;
    $('.tabsmenu-wrapper').find('.active-container').fadeOut(500, function () {
      Scrollbar.destroy(document.querySelector('.active-container'));
      container_tab.removeClass('active-container');
      container_tab.eq(index).addClass('active-container');
      container_tab.eq(index).css('display', 'flex').hide().fadeIn(500);
      Scrollbar.init(document.querySelector('.active-container'));
      container_tab.eq(index).css('display', 'flex').stop();
    });
  };
})(jQuery);