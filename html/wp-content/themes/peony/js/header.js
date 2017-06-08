jQuery(document).ready(function($) {
    "use strict";
																								 
	var mplGlobals = {},
	cartTimeoutShow,
	cartTimeoutHide,
	$document = $(document),
	$window = $(window),
	$html = $("html"),
	$body = $("body"),
	$page = $(".top-wrap");

	mplGlobals.isMobile	= (/(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|windows phone)/.test(navigator.userAgent));
	mplGlobals.isAndroid	= (/(Android)/.test(navigator.userAgent));
	mplGlobals.isiOS		= (/(iPhone|iPod|iPad)/.test(navigator.userAgent));
	mplGlobals.isiPhone	= (/(iPhone|iPod)/.test(navigator.userAgent));
	mplGlobals.isiPad	= (/(iPad)/.test(navigator.userAgent));
	mplGlobals.isBuggy	= (navigator.userAgent.match(/AppleWebKit/) && typeof window.ontouchstart === 'undefined' && ! navigator.userAgent.match(/Chrome/));
	mplGlobals.winScrollTop = 0;
	
	$('.mpl-side-header-overlay').css({'left':-$window.width()}).show();
	
	$(document).on('click', '.mpl-side-header .mpl-close-toggle', function() {
		
		var $lefty = $(this).parents('.mpl-side-header'); 
		$lefty.animate({ 
			left:parseInt($lefty.css('left'),10)==0 ? -$lefty.outerWidth() : 0 
		}); 
		
		$('.mpl-close-toggle').hide();
	
	});
	$(document).on('click', '.mpl-mixed-header .mpl-menu-toggle', function() {
		
		var $lefty = $('.mpl-side-header'); 
		$lefty.animate({ 
			left:parseInt($lefty.css('left'),10)==0 ? -$lefty.outerWidth() : 0 
		}); 
		
		$('.mpl-close-toggle').show();
	
	});
	
	$(document).on('click', '.mpl-mobile-side-header .mpl-close-toggle', function() {
		
		var $lefty = $(this).parents('.mpl-mobile-side-header'); 
		$lefty.animate({ 
			left:parseInt($lefty.css('left'),10)==0 ? -$lefty.outerWidth() : 0 
		}); 
		
		$('.mpl-close-toggle').hide();
	
	});
	
	$(document).on('click', '.mpl-mobile-main-header .mpl-menu-toggle', function() {
																				 
		var $lefty = $('.mpl-mobile-side-header'); 
		$lefty.show();
		$lefty.animate({ 
			left:parseInt($lefty.css('left'),10)==0 ? -$lefty.outerWidth() : 0 
		}); 
		
		$('.mpl-close-toggle').show();
	
	});
	
	$(".mpl-header.sub-downwards li.menu-item-has-children").mouseenter(function () {
		$(this).find('>ul').show();
	});
	$(".mpl-header.sub-downwards li.menu-item-has-children").mouseleave(function () {
		$(this).find('>ul').hide();
	});
		
	$(function(){
            $(".mpl-header .menu-item").mouseover(function(){
                $(this).addClass("menu-item-hoverd");
            }).mouseout(function(){
                $(this).removeClass("menu-item-hoverd");
            });
        });
	
	
	// fixed header
    var stickyTop = function(){
		
		var stickyTop;
    if ($("body.admin-bar").length) {

        if ($(window).width() < 765) {
            stickyTop = 46;
        } else {
            stickyTop = 32;
        }
    } else {
        stickyTop = 0;
    }
	
	return stickyTop;
	
	}

    /* sticky header */
    var peony_sticky_header = function() {
        var stickyHeight;
        stickyHeight = stickyTop();

        var scrollTop = $(window).scrollTop();
		
		var show_after_scrolling = $('.mpl-header-main').height()+stickyHeight-$('.mpl-fxd-header-wrap').height();
		
		if ( peony_header.options.scrolling !='' && !isNaN(peony_header.options.scrolling)  )
			show_after_scrolling = peony_header.options.scrolling;
			
        if (scrollTop > show_after_scrolling) {
			
			switch(peony_header.options.effect){
				case "fade":
					$('.mpl-fxd-header-wrap').css({ 'top': stickyHeight, 'position': 'fixed' }).fadeIn();
            		$('.mpl-header-main').fadeOut();
				break;
				case "slide":
					$('.mpl-fxd-header-wrap').css({ 'top': stickyHeight, 'position': 'fixed' }).slideDown();
            		$('.mpl-header-main').slideUp();
				break;
				default:
					$('.mpl-fxd-header-wrap').css({ 'top': stickyHeight, 'position': 'fixed' }).show();
            		$('.mpl-header-main').hide();
				break;
				}
			
        } else {
			
			switch(peony_header.options.effect){
				case "fade":
					$('.mpl-fxd-header-wrap').css({ 'position': 'absolute' }).fadeOut();
            		$('.mpl-header-main').fadeIn();
				break;
				case "slide":
					$('.mpl-fxd-header-wrap').css({ 'position': 'absolute' }).slideUp();
            		$('.mpl-header-main').slideDown();
				break;
				default:
					$('.mpl-fxd-header-wrap').css({ 'position': 'absolute' }).hide();
            		$('.mpl-header-main').show();
				break;
				}
        }
    };
	
	if ( peony_header.options.layout_name ==='inline_three' ){
				
		$('.mpl-mixed-header .mpl-main-header').show();
	}

    $(window).scroll(function() {
		
		var stickyHeight;
		stickyHeight      = stickyTop();
		var phone_switch  = peony_header.options.phone_switch;
		var tablet_switch = peony_header.options.tablet_switch;
	
		var scrollTop    = $(window).scrollTop();
		
		if ( peony_header.options.scrolling =='' || isNaN(peony_header.options.scrolling) )
			phone_switch = 768;
			
        if ($('.mpl-fxd-header-wrap').length && peony_header.options.floating_navigation === 'enabled' && $(window).width() > tablet_switch) {
            peony_sticky_header();
        }
		
		 if ($(window).width() <= tablet_switch) {
           if (peony_header.options.phone_nav_floating == 'sticky' || peony_header.options.phone_nav_floating == 'menu_icon' ){
			   
			   if (scrollTop > stickyHeight) {
			
					
					
					if (peony_header.options.phone_nav_floating == 'menu_icon'){
			   			$('.mpl-mobile-main-header').addClass('floating-toggle');
			   		}else{
						$('.mpl-header-main').css({ 'top': 0, 'position': 'fixed' });
						}
							
       			 } else {
					
					if (peony_header.options.phone_nav_floating == 'menu_icon'){
			   			$('.mpl-mobile-main-header').removeClass('floating-toggle');
			   		}else{
						$('.mpl-header-main').css({ 'position': 'relative' });	
						}
        			}
			   
			   }
			   
        }
		
		// inline three fixed header
		if ( peony_header.options.floating_navigation === 'enabled' ){
			
			if ( peony_header.options.layout_name ==='inline_three' ){
									
						if (scrollTop > stickyHeight) {
			
							if (peony_header.options.inline_three.floating_logo == 'disabled'){
								$('.mpl-main-header').addClass('floating-toggle');
							}else{
								$('.mpl-header-main').css({ 'top': 0, 'position': 'fixed' });
								}
									
							} else {
								
								if (peony_header.options.inline_three.floating_logo == 'disabled'){
									$('.mpl-main-header').removeClass('floating-toggle');
								}else{
									$('.mpl-header-main').css({ 'position': 'relative' });
									}
							}
									
				}
			
			}
		 
		
    });
	
	// header search form
	
	$(document).on('click', '.mpl-search-label', function(){
		var searchForm;	
		searchForm = $(this).parent('.mpl-search').find('.mpl-search-wrap');
		
		if(searchForm.hasClass('hide'))
			searchForm.removeClass('hide');
		else
			searchForm.addClass('hide');
													
	});
	
	
/*!Shopping cart top bar*/
		$(".shopping-cart.show-sub-cart").find(".buttons").first().clone(true).addClass("top-position").insertBefore(".shopping-cart-inner .cart_list");
		$(".shopping-cart.show-sub-cart").each(function(){
			var $this = $(this),
				$dropCart = $this.children('.shopping-cart-wrap');

			if(mplGlobals.isMobile || mplGlobals.isWindowsPhone){
				$this.find("> a").on("click", function(e) {
					if (!$(this).hasClass("mpl-clicked")) {
						e.preventDefault();
						$(".shopping-cart").find(".mpl-clicked").removeClass("mpl-clicked");
						$(this).addClass("mpl-clicked");
					} else {
						e.stopPropagation();
					}

				});
			};
			
			$this.on("mouseenter tap", function(e) {
				if(e.type == "tap") e.stopPropagation();

				$this.addClass("mpl-hovered");
				if ($page.width() - ($dropCart.offset().left - $page.offset().left) - $dropCart.width() < 0) {
					$dropCart.addClass("right-overflow");
				};
				/*Bottom overflow menu*/
				if ($window.height() - ($dropCart.offset().top - mplGlobals.winScrollTop) - $dropCart.innerHeight() < 0) {
					$dropCart.addClass("bottom-overflow");
				};
				if($this.parents(".mpl-mobile-main-header").length > 0) {
					$dropCart.css({
						top: $this.position().top - 13 - $dropCart.height()
					});
				};
				/*move button to top if cart height is bigger then window*/
				if ($dropCart.height()  > ($window.height() - $dropCart.position().top)) {
					$dropCart.addClass("show-top-buttons");
				};


				clearTimeout(cartTimeoutShow);
				clearTimeout(cartTimeoutHide);

				cartTimeoutShow = setTimeout(function() {
					if($this.hasClass("mpl-hovered")){
						$dropCart.stop().css("visibility", "visible").animate({
							"opacity": 1
						}, 150);
					}
				}, 100);
			});

			$this.on("mouseleave", function(e) {
				var $this = $(this),
				$dropCart = $this.children('.shopping-cart-wrap');
				$this.removeClass("mpl-hovered");

				clearTimeout(cartTimeoutShow);
				clearTimeout(cartTimeoutHide);

				cartTimeoutHide = setTimeout(function() {
					if(!$this.hasClass("mpl-hovered")){
						$dropCart.stop().animate({
							"opacity": 0
						}, 150, function() {
							$(this).css("visibility", "hidden");
						});
						setTimeout(function() {
							if(!$this.hasClass("mpl-hovered")){
								$dropCart.removeClass("right-overflow");
								$dropCart.removeClass("bottom-overflow");
								/*move button to top if cart height is bigger then window*/
								
								$dropCart.removeClass("show-top-buttons");
								
							}
						}, 400);
					}
				}, 150);

			});
		});


});


jQuery(function($) {

	function mpl_update_cart_dropdown(event, parts, hash) {

		function get_quantity( $content ) {
			var quantity = 0;

			$content.find('li .quantity').each(function() {
				var q = parseInt( $(this).text().split(' ')[0] );

				if ( q ) {
					quantity += q;
				}
			});

			return quantity;
		}

		if ( parts['div.widget_shopping_cart_content'] ) {

			var $miniCart = $('.shopping-cart');
			var $cartContent = $(parts['div.widget_shopping_cart_content']);
			var $itemsList = $cartContent.find('.cart_list');
			var $total = $cartContent.find('.total');
			var quantity = get_quantity( $cartContent );

			$miniCart.each( function() {
				var $self = $(this);
				var $buttons = $self.find('.buttons');
				$self.find('.shopping-cart-inner').html('').append($itemsList.clone(true), $total.clone(true), $buttons.clone(true));

				$self.find('.wc-ico-cart .amount').html($total.find('.amount').html());
				var $counter = $self.find('.wc-ico-cart .counter');
				$counter.html( quantity );
				if ( $counter.hasClass('hide-if-empty') ) {

					if ( quantity > 0 ) {
						$counter.removeClass('hidden');
					} else {
						$counter.addClass('hidden');
					}

				}
			} );
		}

	}

	$('body').bind('added_to_cart', mpl_update_cart_dropdown);
});