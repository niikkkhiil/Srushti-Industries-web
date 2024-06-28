(function ($) {
"use strict";

/*--
	Search Toggle
-----------------------------------*/
$('.search-toggle').on('click', function(){
    $('.header-search').toggleClass('open');
})

/*--
	Mobile Menu
------------------------*/
$('.main-menu nav').meanmenu({
	meanScreenWidth: '991',
	meanMenuContainer: '.mobile-menu',
	meanMenuClose: '<i class="zmdi zmdi-close"></i>',
	meanMenuOpen: '<i class="zmdi zmdi-menu"></i>',
	meanRevealPosition: 'right',
	meanMenuCloseSize: '30px',
});

/*--
	Hero Slider
-----------------------------------*/
$('#hero-slider').nivoSlider({
    prevText: '<span>P</span><i class="zmdi zmdi-long-arrow-left"></i>',
    nextText: '<span>N</span><i class="zmdi zmdi-long-arrow-right"></i>',
    controlNav: false,
    effect: 'boxRainGrow',
    pauseTime: 5000,
});

/*--
	Counter UP
-----------------------------------*/
$('.counter').counterUp({
    delay: 20,
    time: 3000
});

/*--
	Client Slider
-----------------------------------*/
$('.client-slider').slick({
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 5,
    responsive: [
        {
        breakpoint: 1199,
            settings: {
                slidesToShow: 4,
            }
        },
        {
        breakpoint: 991,
            settings: {
                slidesToShow: 3,
            }
        },
        {
        breakpoint: 767,
            settings: {
                slidesToShow: 2,
            }
        },
        {
        breakpoint: 479,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

/*--
	Testimonial Slider
-----------------------------------*/
$('.testimonial-slider').slick({
    arrows: false,
    infinite: true,
    swipeToSlide: true,
    slidesToShow: 3,
    responsive: [
        {
        breakpoint: 991,
            settings: {
                slidesToShow: 2,
            }
        },
        {
        breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

/*--
	Magnific Popup
-----------------------------------*/
/*-- Video --*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	}
});
/*-- Image --*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
	type: 'image',
});
/*-- Gallery --*/
var galleryPopup = $('.gallery-popup');
galleryPopup.magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}	
});
/*-- Video Gallery --*/
var videGalleryPopup = $('.video-gallery-popup');
videGalleryPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	},
	gallery:{
		enabled:true
	}	
});

/*--
	Scroll Up
-----------------------------------*/
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
});

/*--
	Wow js
-----------------------------------*/
new WOW().init();

/*--
	Youtube Background Video
-----------------------------------*/
$(".hero-video-bg").YTPlayer();
 

})(jQuery);	