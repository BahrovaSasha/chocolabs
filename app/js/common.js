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
      });
	// Custom JS

});
