require(["jquery"], function($) {
	console.log("jquery loaded");
	$(document).ready(function() {
		$('.grid-item').each(function(i) {
			var imgSrc = $(this).children('img').attr("src");
			$(this).css({
				background: " -moz-linear-gradient(top, rgba(64,64,64,0.45) 0%, rgba(64,64,64,0.45) 100%), url("+ imgSrc +") center"
				}).css({
				background: " -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(64,64,64,0.45)), color-stop(100%,rgba(64,64,64,0.45))), url("+ imgSrc +") center"
				}).css({
				background: " -webkit-linear-gradient(top, rgba(64,64,64,0.45) 0%,rgba(64,64,64,0.45) 100%), url("+ imgSrc +") center"
				}).css({
				background: " -o-linear-gradient(top, rgba(64,64,64,0.45) 0%,rgba(64,64,64,0.45) 100%), url("+ imgSrc +") center"
				}).css({
				background: " -ms-linear-gradient(top, rgba(64,64,64,0.45) 0%,rgba(64,64,64,0.45) 100%), url("+ imgSrc +") center"
				}).css({
				background: " linear-gradient(to bottom, rgba(64,64,64,0.45) 0%,rgba(64,64,64,0.45) 100%), url("+ imgSrc +") center"
				// }).css({
				// background: "url("+ imgSrc +")"
				}).css({
				filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#73404040', endColorstr='#73404040',GradientType=0 )"
			});
		});



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
