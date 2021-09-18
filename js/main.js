// Pricing Section Functional Using JQury
$(document).ready(function(){

	$('.dog-price').owlCarousel({
	    loop:true,
	    autoplay:true,
	    autoplayTimeout:5000,
	    margin:50,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:3
	        }
	    }  
	});

	$('.counter').counterUp({
	    delay: 10,
	    time: 1000,
	});

});	