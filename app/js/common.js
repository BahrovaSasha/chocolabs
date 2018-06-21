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

      $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
          nav.addClass("fixed_header");
        } else if($(this).scrollTop() <= 0 && nav.hasClass("fixed_header")) {
          nav.removeClass("fixed_header");
        }
      });
	// Custom JS
  // var nav = $('.for_arrow');
  //
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 1200) {
  //     nav.append($('<span class="arrow" id="#scroll-top"><i class="fas fa-angle-up"></i></span>'));
  //   } else if($(this).scrollTop() <= 1200 && nav.hasClass("fixed_arrow")) {
  //     nav.remove($('<span class="arrow" id="#scroll-top"><i class="fas fa-angle-up"></i></span>'));
  //   }
  // });
});

  // $(document).on('click', 'a[href^="#scroll-top"]', function (event) {
  //   event.preventDefault();
  //
  // $('html, body').animate({
  //   scrollTop: $($.attr(this, 'href')).offset().top - 600
  //   }, 500);
  // });
});
