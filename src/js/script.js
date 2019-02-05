$(document).ready(function () {
	svg4everybody({});

	let mainSubnavHover = () => {
		$('.main-subnav__item').hover(
			function () {
				let parentList = $(this).closest('.main-subnav__list');
				if ($(this).children('.main-subnav__list').length) {
					let caNavHeight = $(this).children('.main-subnav__list').outerHeight();
					if (parentList.outerHeight() < catNavHeight) {
						parentList.css('height', catNavHeight);
					}
					parentList.css('width', '720');
				}
			}, function () {
				let parentList = $(this).closest('.main-subnav__list');
				parentList.css('height', 'auto');
				parentList.css('width', 'auto');
			}
		)
	};

	mainSubnavHover();

});