"use strict";!function(u){u(function(){var e=u(".burger-button"),n=u(".burger-block"),t=u(".burger-block__close");e.on("click",function(){n.fadeIn(800),u("html, body").addClass("overflow"),u(".js-burger-slider").each(function(){u(this).slick({infinite:!0,fade:!0,cssEase:"linear",speed:3e3,arrows:!1,dots:!0,autoplay:!0})})}),t.on("click",function(){n.fadeOut(800),u("html, body").removeClass("overflow"),u(".js-burger-slider").each(function(){u(this).slick("unslick")})});var r=window.Scrollbar;r.init(document.querySelector(".burger-block__content_menu_left"));var o=u(".burger-block__content_menu_left_item.submenu"),c=u(".burger-block__content_menu_right");o.each(function(){u(this).click(function(e){var n;window.matchMedia("(min-width: 961px)").matches?(e.preventDefault(),c.children().remove(),r.destroy(document.querySelector(".burger-block__content_menu_right ul")),n=u(this).parent().find(".menu-submenu").clone(),c.append(n),r.init(document.querySelector(".burger-block__content_menu_right ul"))):(e.preventDefault(),u(this).parent().find(".menu-submenu").slideToggle(500))})}),u(".burger-block__lang_item_active").on("click",function(e){e.preventDefault(),u(this).parent().toggleClass("opened")})})}(jQuery);