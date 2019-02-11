import $ from 'jquery';

$(document).ready(function () {

	let mainSubnavHover = function () {
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
				parentList.css('width', 'auto');
			}
		)
	};

	let openSearchForm = function () {
		$(document).on('click', '.search__icon', function () {
			$('.search__body').fadeIn(200);
		});
	};

	let clearSearchForm = function () {
		$(document).on('click', '.search__clear', function () {
			$('.search__input').val('');
		});
	};

	let hideSearchForm = function () {
		$(document).mouseup(function (e) {
			var searchForm = $(".search__body");
			if (searchForm.has(e.target).length === 0){
				$('.search__body').fadeOut(200);
			}
		});
	};

	let searchButton = function () {
		$(document).on('click', '.search__btn', function () {
			alert('Благодарим за ваш интерес!')
		});
	};

	let bannerSlider = function () {
		$('.js-banner').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '.banner__navigation--prev',
			nextArrow: '.banner__navigation--next',
			dots: true,
			customPaging: function(slider, i) {
				return '<a class="banner__dot"></a>';
			},
			appendDots: '.banner__dots'
		})
	};

	mainSubnavHover();
	openSearchForm();
	clearSearchForm();
	hideSearchForm();
	searchButton();
	bannerSlider();

});