import $ from 'jquery';

$(document).ready(function () {

	let catalogNavHover = function () {
		$('.catalog-nav__item').hover(
			function () {
				let parentList = $(this).closest('.catalog-nav__list');
				if ($(this).children('.catalog-nav__list').length) {
					let catNavHeight = $(this).children('.catalog-nav__list').outerHeight();
					if (parentList.outerHeight() < catNavHeight) {
						parentList.css('height', catNavHeight);
					}
					parentList.css('width', '720');
				}
			}, function () {
				let parentList = $(this).closest('.catalog-nav__list');
				parentList.css('height', 'auto');
				parentList.css('width', 'auto');
			}
		)
	};

	let openSearchForm = function () {
		$(document).on('click', '.search__icon', function () {
			$('.search__body').fadeIn(200);
		})
	};

	let clearSearchForm = function () {
		$(document).on('click', '.search__clear', function () {
			$('.search__input').val('');
		})
	};

	let hideSearchForm = function () {
		var w = screen.width;
      if (w >= '1140') {
        $(document).mouseup(function (e) {
					var searchForm = $(".search__body");
					if (searchForm.has(e.target).length === 0){
						$('.search__body').fadeOut(200);
					}
				})
      }
	};

	let searchButton = function () {
		$(document).on('click', '.search__btn', function () {
			console.log('Search works fine!')
		})
	};

	let bannerSlider = function () {
		$('.js-banner').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '.banner__navigation--prev',
			nextArrow: '.banner__navigation--next',
			dots: true,
			customPaging: function(slider, i) {
				return '<div class="banner__dot"></div>';
			},
			appendDots: '.banner__dots',
			responsive: [
				{
					breakpoint: 768,
					settings: {
						arrows: false,
					}
				}
			]
		})
	};

	let tabs = function () {
		$('.tabs-navigation__item').click(function() {
			let tabName = $(this).attr('show-tab'),
				tabsBody = $(this).closest('.tabs').find('.tabs__body')[0],
				tab = $(tabsBody).find('.' + tabName);
			$(this).addClass('tabs-navigation__item--active').siblings().removeClass('tabs-navigation__item--active');
			$(tab).addClass('tab--active').siblings().removeClass('tab--active');
			if ($(tabsBody).find('.js-products-line-slider').length) {
				$('.js-products-line-slider').each(function () {
					$(this).slick('refresh');
				})
				$('.js-product-prev__slider').each(function () {
					$(this).slick('refresh');
				})
			}
		})
	};

	let productPrevSlider = function () {
		$('.js-product-prev__slider').each(function (idx) {
			let productPrevSliderClass = "product-prev-slider-" + idx;
			this.closest('.product-prev').classList.add(productPrevSliderClass);
			$(this).slick({
				slidesToShow: 1,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				appendDots: '.' + productPrevSliderClass + ' .product-prev__colors',
				swipe: false,
				infinite: false,
				customPaging: function (slider, i) {
					let color = $(slider.$slides[i]).data('color');
					if (color === '#ffffff') {
						return '<div class="product-prev__color product-prev__color--white" style="background-color:' + color + '"></div>'
					} else {
						return '<div class="product-prev__color" style="background-color:' + color + '"></div>'
					}
				}
			});
		});
	};
	
	let productLineSlider = function () {
		$('.js-products-line-slider').each(function (idx) {
			let productsLineSliderID = "products-line-slider-" + idx;
			this.closest('.products-line-slider').id = productsLineSliderID;
			$(this).slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				dots: true,
				appendDots: '#' + productsLineSliderID + ' .products-line-slider__dots',
				prevArrow: '#' + productsLineSliderID + ' .products-line-slider__btn--prev',
				nextArrow: '#' + productsLineSliderID + ' .products-line-slider__btn--next',
				customPaging: function (slider, i) {
					return '<div class="products-line-slider__dot"></div>';
				},
				responsive: [
					{
						breakpoint: 1139,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		});
	};

	let productBorderLineSlider = function () {
		$('.js-products-border-line-slider').each(function (idx) {
			let productsBorderLineSliderID = "products-border-line-slider-" + idx;
			this.closest('.products-border-line-slider').id = productsBorderLineSliderID;
			$(this).slick({
				slidesToShow: 4,
				slidesToScroll: 1,
				infinite: false,
				prevArrow: '#' + productsBorderLineSliderID + ' .products-border-line-slider__btn--prev',
				nextArrow: '#' + productsBorderLineSliderID + ' .products-border-line-slider__btn--next',
				responsive: [
					{
						breakpoint: 1139,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 3
						}
					},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 2
						}
					},
					{
						breakpoint: 550,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1
						}
					}
				]
			});
		});
	};

	let mobileMenu = function () {
		$(document).on('click', '.mobile-menu__toggle', function () {
			$(this).parent().addClass('mobile-menu--open');
			if ($(window).width() < 768) {
				$('html').addClass('fixed');
				$('.wrapper').addClass('mobile-menu-open');
			}
		});
		$(document).on('click', '.mobile-menu__close', function () {
			$(this).closest('.mobile-menu').removeClass('mobile-menu--open');
			if ($(window).width() < 768) {
				$('html').removeClass('fixed');
				$('.wrapper').removeClass('mobile-menu-open');
			}
		});
	};

	let brandInfo = function () {
		if (window.innerWidth < 1140 && window.innerWidth > 767) {
				$('.brand__certificates').appendTo('.brand-info__tablet');
		} else {
				$('.brand__certificates').appendTo('.brand-info');
		}
};

	catalogNavHover();
	openSearchForm();
	clearSearchForm();
	hideSearchForm();
	searchButton();
	bannerSlider();
	tabs();
	productPrevSlider();
	productLineSlider();
	productBorderLineSlider();
	mobileMenu();
	brandInfo();

});

// Preloader
$(window).on('load', function () {
	$('.sk-circle').fadeOut();
	$('.preloader').delay(400).fadeOut('slow');
	$('html').removeClass('fixed');
});

$(window).on('resize', function () {
	let brandInfo = function () {
			if (window.innerWidth < 1140 && window.innerWidth > 767) {
					$('.brand__certificates').appendTo('.brand-info__tablet');
			} else {
					$('.brand__certificates').appendTo('.brand-info');
			}
	};
	brandInfo();
});

// Polyfills for IE11
(function () {
	if (!Element.prototype.closest) {
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		}
	}
})();
(function () {
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
	}
})();