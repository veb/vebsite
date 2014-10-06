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


		$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
		        var target = $(this.hash);
		        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		        if (target.length) {
		            $('html,body').animate({
		                scrollTop: target.offset().top
		            }, 1000);
		            return false;
		        }
		    }
		});

		$('#invert').click(function() {
			if ($('html').hasClass('html-inverted')) {
				$('html').removeClass('html-inverted');
			} else {
				$('html').addClass('html-inverted');	
			}
		});

		$('#embiggen').click(function() {
			if ($('body').hasClass('body-embiggened')) {
				$('body').removeClass('body-embiggened');
			} else {
				$('body').addClass('body-embiggened');	
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
