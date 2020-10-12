(function($) {
	'use strict';

	let Scrollbar = window.Scrollbar;

	$(function() {
		let menu_tab = $('.tabsmenu li'); 
		if (!menu_tab.length)
			return

		menu_tab.on('click', function() {
			$(this).siblings().removeClass('active')
			$(this).addClass('active')
			SwitchTab($(this).index())
		})
	})

	let SwitchTab = (index) => {
		let container_tab = $('.tabsmenu-wrapper .container')

		if (!container_tab.eq(index).length)
			return
			
		$('.tabsmenu-wrapper').find('.active-container').fadeOut(500, () => {
			Scrollbar.destroy(document.querySelector('.active-container'))
			container_tab.removeClass('active-container')

			container_tab.eq(index).addClass('active-container')
			container_tab.eq(index).css('display','flex').hide().fadeIn(500)
			Scrollbar.init(document.querySelector('.active-container'))
			container_tab.eq(index).css('display','flex').stop()
		})
	}
})(jQuery)