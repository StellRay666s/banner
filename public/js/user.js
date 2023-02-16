$(document).ready(function () {

  $('.ham').click(function () {
    $('nav').toggleClass('nav_active');
    $('.ham').toggleClass('ham_active');
    $('.logotip_mobail').toggleClass('logotip_mobail_active');
    $('.logotip_desctop').toggleClass('logotip_desctop_active');
    $('.header_communication').toggleClass('header_communication_active');
  });

  $('.ham_active').click(function () {
    $('nav').removeClass('nav_active');
    $('.ham').removeClass('ham_active');
    $('.logotip_mobail').removeClass('logotip_mobail_active');
    $('.logotip_desctop').removeClass('logotip_desctop_active');
    $('.header_communication').removeClass('.header_communication_active');
  });
  
  /*-----убрать плюс--------*/
  
  $('.footer_services').click(function () {
    $('.footer_services').toggleClass('footer_services_active')
    $('.footer_top_middle__list ul').toggleClass('list_active')
  })

  $('.footer_services_active').click(function () {
   $('.footer_services').removeClassClass('footer_services_active')
    $('.footer_top_middle__list ul').removeClass('list_active')
  })

  $('.footer_company, .product_subtitle').click(function () {
    $('.footer_company').toggleClass('footer_company_active')
    $('.product_subtitle').toggleClass('product_subtitle_active')
    $('.footer_top_right__list ul').toggleClass('list_active')
  })

  $('.footer_company_active, .product_subtitle').click(function () {
    $('.footer_company').removeClassClass('footer_company_active')
    $('.product_subtitle').removeClassClass('product_subtitle_active')
    $('.footer_top_right__list ul').removeClass('list_active')
  })
  
  
   $('.specifications_head').click(function () {
      $('.specifications_head').toggleClass('specifications_head_active')
  })

  $('.specifications_head').click(function () {
      $('.specifications_head').removeClassClass('specifications_head_active')
  })

  /*------x----------------------x---------*/ 

  /*-----Слайдер на главной странице БАННЕР-----*/

  $('.banner_slider').slick({
    dots: false,
    arrows: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0',
 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
    },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
          autoplay: true,
          autoplaySpeed: 6000
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
//          autoplay: true,
//          autoplaySpeed: 5000
        }
    }
]
  });
  
  /*------x----------------------x---------*/ 

  /*-----Слайдер Наши работы-----*/

  $('.clientage_slider').slick({
    dots: false,
    arrows: true,
    speed: 800,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
    },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: false,
          autoplay: true,
          autoplaySpeed: 4000
        }
    },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          autoplay: true,
          autoplaySpeed: 5000
        }
    }
]
  });
  
  /*------x----------------------x---------*/ 

  /*-----------Слайдер с навигацией----------*/
  
 $('.product_slider_for').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: true,
   fade: true,
   asNavFor: '.product_slider_nav'
 });
  
 $('.product_slider_nav').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   asNavFor: '.product_slider_for',
   dots: false,
   arrows: true,
   centerMode: false,
   focusOnSelect: true,
   responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        slidesToShow: 3
      }
    }
  ]
 });
  
/*------x----------------------x---------*/  
  
  
/*---------------------Якоря----------------*/

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;


    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });
  
  /*------x----------------------x---------*/   
  
  
  
/*----------Слайдер страницы товара --------------*/
  
//   $('.machine_content_slider-single').slick({
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	arrows: false,
// 	fade: false,
// 	adaptiveHeight: true,
// 	infinite: false,
//	useTransform: true,
// 	speed: 400,
// 	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
// });
//
// $('.machine_content_slider-nav')
// 	.on('init', function(event, slick) {
// 		$('.machine_content_slider-nav .slick-slide.slick-current').addClass('is-active');
// 	})
// 	.slick({
// 		slidesToShow: 8,
// 		slidesToScroll: 8,
// 		dots: false,
// 		focusOnSelect: false,
// 		infinite: false,
// 		responsive: [{
// 			breakpoint: 1024,
// 			settings: {
// 				slidesToShow: 8,
// 				slidesToScroll: 1,
// 			}
// 		}, {
// 			breakpoint: 640,
// 			settings: {
// 				slidesToShow: 8,
// 				slidesToScroll: 1,
//			}
// 		}, {
// 			breakpoint: 420,
// 			settings: {
// 				slidesToShow: 8,
// 				slidesToScroll: 1,
//		}
// 		}]
// 	});
//
// $('.machine_content_slider-single').on('afterChange', function(event, slick, currentSlide) {
// 	$('.machine_content_slider-nav').slick('slickGoTo', currentSlide);
// 	var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
// 	$('.machine_content_slider-nav .slick-slide.is-active').removeClass('is-active');
// 	$(currrentNavSlideElem).addClass('is-active');
// });
//
// $('.machine_content_slider-nav').on('click', '.slick-slide', function(event) {
// 	event.preventDefault();
// 	var goToSingleSlide = $(this).data('slick-index');
//
// 	$('.machine_content_slider-single').slick('slickGoTo', goToSingleSlide);
// });
  
/*------x----------------------x---------*/ 
  
  
  /*-----Модальное окно-----*/
  $('#parts, #youtube').magnificPopup({
  delegate: 'a',
  removalDelay: 500, 
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true,
  type: 'iframe'  
});
  
  
  /*-----Модальное окно  с видео-----*/
  
//  $('.popup-youtube').magnificPopup({
//    type: 'iframe'
//  });
  
  /*--------x-----------------x---------*/
  
});