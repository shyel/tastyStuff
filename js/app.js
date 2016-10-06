//------------------------
//		DOCUMENT READY
//-------------------------


$(document).ready(function() {
//------------------------
//		LOGO
//-------------------------
	$('.js-logo').on('mouseenter', function() {
		$(this).addClass('is-faded');
	});

	$('.js-logo').on('mouseleave', function() {
		$(this).removeClass('is-touched');
	});

//------------------------
//		TOP MENU
//-------------------------
	
	$('.js-menu-item').on('mouseenter', function() {
		$(this).closest('.js-menu-item').find(".top-menu-img").addClass('is-touched');
	});

	$('.js-menu-item').on('mouseleave', function() {
		$(this).closest('.js-menu-item').find(".top-menu-img").removeClass('is-touched');
	});	

});


