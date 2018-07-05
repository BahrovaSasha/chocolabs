$(function() {
  $(document).ready(function(){
        $('.reviews_content').slick({
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
          prevArrow: '<span class="arrow left_arrow"><i class="fas fa-chevron-left"></i></span>',
          nextArrow: '<span class="arrow right_arrow"><i class="fas fa-chevron-right"></i></span>',
          appendArrows: '.reviews'
        });


        $('.one_photo_slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.small_carousel'
        });
        $('.small_carousel').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.one_photo_slider',
          dots: false,
          // centerMode: true,
          focusOnSelect: true,
          prevArrow: false,
          nextArrow: '<span class="arrow right_arrow"><i class="fas fa-chevron-right"></i></span>',
          responsive: [
              {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2,
                }
              },
            ]
        });


        //open menu
        $(".burger").on("click", function (){
          event.preventDefault()
          $(".burger").toggleClass('active_nav');
          $(".header_menu").toggleClass('active_nav');
          $(".main_header").toggleClass('active_nav');
          // $(".details").toggleClass('active_nav');
          // $(".main_header").toggleClass('fixed_header');
      });
      var nav = $('.main_header');
      var lastScrollTop = 0;
      $(window).scroll(function(event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
          nav.removeClass("fixed_header");
        } else if($(this).scrollTop() <= 0 && nav.hasClass("fixed_header")) {
          nav.removeClass("fixed_header");
        } else {
          nav.addClass("fixed_header");
        }
        lastScrollTop = st;
      });
	// Custom JS
//   var nav = $('.for_arrow');
//
//   $(window).scroll(function () {
//     if ($(this).scrollTop() > 1200) {
//       nav.append($('<span class="arrow" id="#scroll-top"><i class="fas fa-angle-up"></i></span>'));
//     } else if($(this).scrollTop() <= 1200 && nav.hasClass("fixed_arrow")) {
//       nav.remove($('<span class="arrow" id="#scroll-top"><i class="fas fa-angle-up"></i></span>'));
//     }
//   });
});

  // $(document).on('click', 'a[href^="#scroll-top"]', function (event) {
  //   event.preventDefault();
  //
  // $('html, body').animate({
  //   scrollTop: $($.attr(this, 'href')).offset().top - 600
  //   }, 500);
  // });
});
// $(document).ready(function(){
//   $('.for_arrow').append('<span href="#" class="arrow" id="go-top"><i class="fas fa-angle-up"></i></span>');
// });
$(function() {
 $.fn.scrollToTop = function() {
   // $(this).hide().removeAttr("href");
   // if ($(window).scrollTop() > "0") $(this).fadeOut("slow")
   var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   // else if($(window).scrollTop() >= "1000") $(".arrow").css("position","absolute")///////////////////////
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).on('click',function() {
   $("html, .for_arrow").animate({scrollTop: 0}, "slow")
  })
 }
});
$(function() {
 $("#go-top").scrollToTop();
});

// $(document).ready(function() {
// $('.gallery_photo').magnificPopup({
//   type: 'image',
//   delegate: 'a',
//   removalDelay: 300,
//   mainClass: 'mfp-with-fade',
//
//   gallery:{enabled:true}
//
// })
// });
// $(document).ready(function() {
// 	$('.popup-gallery').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		// image: {
// 		// 	tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 		// 	titleSrc: function(item) {
// 		// 		return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
// 		// 	}
// 		// }
// 	});
// });
// $(document).ready(function() {
//
// $('.gallery').magnificPopup({
//
//   type: 'image',
//   delegate: 'a',
//   removalDelay: 300,
//   mainClass: 'mfp-with-fade',
//
//   gallery:{enabled:true}
//
// });
// });
$(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			// titleSrc: function(item) {
			// 	return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			// }
		}
	});
});
