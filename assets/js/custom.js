$(document).ready(function() {


	// scroll hide and show

	$(".navbar-toggler").click(function() {
		$("body").toggleClass("no-scroll");
	});

	$(".header-menu ul li a").click(function() {
		$("body").removeClass("no-scroll");
	});


	$('.offer-left-slider').slick({
       dots: false,
       slidesToShow: 1,
       slidesToScroll: 1,
       arrows: false,
       fade: true,
       // asNavFor: '.offer-img-slider'
     });

    // $('.offer-img-slider').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     asNavFor: '.offer-left-slide',
    //     dots: false,
    //     arrows: false,
    //     speed: 1000,
    //     fade: true,
       
    // })



    // TESTIMONIAL JS
    $('.testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.testimonial-slider-text'
    });
    $('.testimonial-slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.testimonial-slider',
        dots: true,
        arrows: false,
        focusOnSelect: true,
        speed: 1000,
        fade: false,
        autoplay: true
    });

	

});


// top nav header scroll active class add start

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
            $(".header-main").addClass("active");
        } else {
            $(".header-main").removeClass("active");
        }
    });
// top nav header scroll active class add end

$(window).on('load', function() {
	setTimeout(function() {
		$('.page-loader').fadeOut('slow');
	});
});