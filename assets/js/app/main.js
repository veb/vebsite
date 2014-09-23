require(["jquery"], function($) {
	console.log("jquery loaded");
	$(document).ready(function() {
	    var menu = $('.centered-navigation-menu');
	    var menuToggle = $('.centered-navigation-menu-button');
	    var signUp = $('.sign-up');

	    $(menuToggle).on('click', function(e) {
	        e.preventDefault();
	        menu.slideToggle(function() {
	            if (menu.is(':hidden')) {
	                menu.removeAttr('style');
	            }
	        });
	    });

	    $('.accordion-tabs-minimal').each(function(index) {
	        $(this).children('li').first().children('a').addClass('is-active').next().addClass('is-open').show();
	    });

	    $('.accordion-tabs-minimal').on('click', 'li > a', function(event) {
	        if (!$(this).hasClass('is-active')) {
	            event.preventDefault();
	            var accordionTabs = $(this).closest('.accordion-tabs-minimal')
	            accordionTabs.find('.is-open').removeClass('is-open').hide();

	            $(this).next().toggleClass('is-open').toggle();
	            accordionTabs.find('.is-active').removeClass('is-active');
	            $(this).addClass('is-active');
	        } else {
	            event.preventDefault();
	        }
	    });
	});


});

require(["jquery","owl.carousel"], function($) {
	console.log("carousloaded");
	$(document).ready(function() {
		$("#pitchslides").owlCarousel({
		      navigation : true, // Show next and prev buttons
		      slideSpeed : 300,
		      paginationSpeed : 400,
		      singleItem:true
	  	});
  	});
});
