/* tabs menu */
;(function() {
	'use strict';

	var tabsmenu = document.querySelectorAll('.tabsmenu');
	if (!tabsmenu) return;

	[].forEach.call(tabsmenu, function(menu) {
		menu.addEventListener('click', function(e) {
			if (e.target.tagName != 'LI') return;
			var currIndex = switchTab(menu, e.target);
			switchBlock(menu, currIndex);
		})
	});

	function switchTab(menu, tab) {
		var items = menu.querySelectorAll('li'),
			currIndex;

		[].forEach.call(items, function(item, index) {
			item.classList.remove('active');
			if (item === tab) {
				item.classList.add('active');
				currIndex = index;
			}
		});
		return currIndex;
	}

	function switchBlock(menu, currIndex) {
		var content	= menu.nextElementSibling,
			blocks = content.querySelectorAll('.container > div');

		[].forEach.call(blocks, function(block, index) {
			block.removeAttribute('style');
			if (index == currIndex) block.style.display = 'flex';
		});
	}
})();