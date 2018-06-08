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
        //open menu
        $(".burger").on("click", function (){
          $(".header_menu_wrap").toggleClass('active_nav');
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
