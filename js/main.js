(function($){
    
    "use strict";

    	
    /*======== Doucument Ready Function =========*/
    jQuery(document).ready(function () {
       //CACHE JQUERY OBJECTS
            $("#status").fadeOut();
            $("#preloader").delay(200).fadeOut("slow");
            $("body").delay(200).css({ "overflow": "visible" });

            
            /* Init Wow Js */
            new WOW().init();

    });
	/* ------------------------------------------------------------------------ */
	// Multiple Sticky Menu
	/* ------------------------------------------------------------------------ */

	var stickyHeaders = (function() {
		var $window = $(window),
				$stickies;

		var load = function(stickies) {

			if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {

				$stickies = stickies.each(function() {

					var $thisSticky = $(this).wrap('<div class="multi-menu" />');
		
					$thisSticky
							.data('originalPosition', $thisSticky.offset().top)
							.data('originalHeight', $thisSticky.outerHeight())
								.parent()
								.height($thisSticky.outerHeight()); 			  
				});

				$window.off("scroll.stickies").on("scroll.stickies", function() {
				_whenScrolling();		
				});
			}
		};

		var _whenScrolling = function() {

			$stickies.each(function(i) {			

				var $thisSticky = $(this),
						$stickyPosition = $thisSticky.data('originalPosition');

				if ($stickyPosition <= $window.scrollTop()) {        
					
					var $nextSticky = $stickies.eq(i + 1),
							$nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');

					$thisSticky.addClass("fixed");

					if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {

						$thisSticky.addClass("absolute").css("top", $nextStickyPosition);
					}

				} else {
					
					var $prevSticky = $stickies.eq(i - 1);

					$thisSticky.removeClass("fixed");

					if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {

						$prevSticky.removeClass("absolute").removeAttr("style");
					}
				}
			});
		};

		return {
			load: load
		};
	})();

	stickyHeaders.load($(".multiple-sticky"));

	// Cache selectors
	var lastId,
    topMenu = $("#multiple-sticky-menu"),
    topMenuHeight = topMenu.outerHeight()+40,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.on( 'click' , function(e){
		var href = $(this).attr("href"),
				offsetTop = href === "#" ? 0 : $(href).offset().top-25;
				// offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		$('html, body').stop().animate({ 
				scrollTop: offsetTop
		}, 300);
		e.preventDefault();
	});
	
	// accordian

    if ($('.accrodion-grp').length) {
        var accrodionGrp = $('.accrodion-grp');
        accrodionGrp.each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            var accordion = Self.find('.accrodion');
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            accordion.each(function() {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().hasClass('active') === false ) {                   
                        $('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');                    
                        $(this).parent().find('.accrodion-content').slideDown();        
                    };
                    

                });
            });
        });
        
    };



	 jQuery(document).ready(function(){
        jQuery(".js-video-button").modalVideo({channel:'vimeo'});
    });

	if ($('.specialist-slider').length)
	{ 
		$('.specialist-slider').slick({
		  infinite: true,
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  autoplay: true,
		  responsive: [
		  {
			breakpoint: 1100,
			settings: {
			  slidesToShow: 3    
			}
		  },
		  {
			breakpoint: 900,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1
			}
		  }
		  ]
		});
	  }	
	
if ($('.specialist-slider2').length)
	{
		$('.specialist-slider2').slick({
		  infinite: true,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  arrows: false,
		  dots: true,
		  autoplay: true,
		  responsive: [
		  {
			breakpoint: 1100,
			settings: {
			  slidesToShow: 3    
			}
		  },
		  {
			breakpoint: 900,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1
			}
		  } 
		  ]
		});
     }

window.FPConfig = {
    delay: 0,
    ignoreKeywords: [],
    maxRPS: 3,
    hoverDelay: 50
  };

jQuery(window).on( 'resize load', function () {
 var windowsize = $(window).width();
 var windowHeight = $(window).height();

      if (windowsize >= 1024 ) {

        setTimeout(function(){ 
          var bodyheight = jQuery(this).height();
          jQuery(".coming-main").css( 'height',bodyheight*0.8+'px' );
          jQuery(".coming").css( 'height',bodyheight+'px' );

        }, 100);
      } else if( $(window).innerHeight > $(window).innerWidth ){
        setTimeout(function(){ 
          var bodyheight = jQuery(this).height();
          jQuery(".coming-main").css( 'height',bodyheight*0.8+'px' );
          jQuery(".coming").css( 'height',bodyheight+'px' );

        }, 100);
      }    

}).resize();



setTimeout(function(){ 

    var $grid = jQuery('.blog-masonry').masonry({
        itemSelector: '.blog-masonry-list'
    });

    $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
    });

}, 1000);

$('#counter-block').ready(function(){

 $('.patient').animationCounter({
      start: 0,
      end: 264,
      step: 2,
      delay:10
    });
 $('.doctor').animationCounter({
      start: 12,
      end: 575,
      step: 2,
      delay:15
    });
 $('.room').animationCounter({
      start: 25,
      end: 487,
      step: 2,
      delay:12
    });
 $('.partner').animationCounter({
      start: 25,
      end: 320,
      step: 1,
      delay:11
    });
});
$('.slider-store').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-thumbs'
});
$('.slider-thumbs').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-store',
  dots: false,
  centerMode: true,
  arrows: false,
  focusOnSelect: true
});
$(document).on( 'click', '#back-to-top, .back-to-top',function(){
  $('html, body').animate({ scrollTop:0 }, '500');
  return false;
});
$(window).on( 'scroll', function(){

  /* ------------------------------------------------------------------------ */
/* BACK TO TOP 
/* ------------------------------------------------------------------------ */

if( $(window).scrollTop() > 500 ){
  $("#back-to-top").fadeIn(200);
} else{
  $("#back-to-top").fadeOut(200);
}

/* ------------------------------------------------------------------------ */
/* BACK TO TOP 
/* ------------------------------------------------------------------------ */

});



})(jQuery);

$(function () {
    $('a[href="#search1"]').on('click', function(event) {
        event.preventDefault();
        $('#search1').addClass('open');
        $('#search1 > form > input[type="search"]').focus();
    });
    
    $('#search1, #search1 button.close').on('click keyup', function(event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
        }
    });
    
    
    //Do not include! This prevents the form from submitting for DEMO purposes only!
    $('form').submit(function(event) {
        event.preventDefault();
        return false;
    })
});


/**
* Make height equal to screen
*/

jQuery(window).on( 'resize load', function () {

    setTimeout(function(){ 
      
      resize_eb_slider();

    }, 100);    

}).resize();

/**
* Resize slider
*/

function resize_eb_slider(){

  var bodyheight = jQuery(this).height();

  if( jQuery(window).width() > 1400 ){
    bodyheight = bodyheight * 0.90;
    jQuery("#fw_al_003").css( 'max-height',bodyheight+'px' );
    
    jQuery('#x_023_animated_layers, #x_023_animated_layers, #x_023_animated_layers > .carousel-inner, #x_023_animated_layers > .carousel-inner > .item').css( 'height',bodyheight+'px' );

    jQuery(".dental-slider #fw_al_003").css( 'max-height',bodyheight*0.80+'px' );
    jQuery("#fw_al_005").css( 'max-height',bodyheight*0.80+'px' );
    jQuery(".nutrition-slider #fw_al_003").css( 'max-height',bodyheight*0.80+'px' );
    
  } 

  if( jQuery(window).width() >= 1024 ){
  	// Error Page
    jQuery('.errormain .breadcrumb-outer').css( 'padding-top',bodyheight*0.45+'px' );
  }

}

jQuery(document).on('click','.dark-mode a',function(){
  jQuery('body').addClass('night-mode');
});
jQuery(document).on('click','.light-mode a',function(){
  jQuery('body').removeClass('night-mode');
});