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
        $('.small_carousel').slick({
          infinite: false, //бесконечное прокручивание не получается- растягивает на всю страницу
          speed: 300,
          slidesToShow: 4,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: '<span class="arrow right_arrow"><i class="fas fa-chevron-right"></i></span>',
          appendArrows: '.small_carousel',
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                // infinite: false,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                // infinite: false,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // infinite: false,
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
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

});
});
