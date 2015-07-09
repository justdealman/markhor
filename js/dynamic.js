$(document).ready(function() {
	$('.modal').append('<span class="close"><span>');
	$('[data-open]').bind('click', function(event) {
		var e = $(this).attr('data-open');
		var t = $(document).scrollTop()+($(window).height()-$('[data-target="'+e+'"]').outerHeight())/2;
		if ( t < 0 ) {
			t = 0;
		}
		$('[data-target="'+e+'"]').css({
			'top': t+'px'
		}).stop(true,true).fadeIn(250);
		$('.fade').stop(true,true).fadeIn(250);
		event.preventDefault();
	});
	$('[data-target] .close, .fade').bind('click', function() {
		$('[data-target], .fade').stop(true,true).fadeOut(250);
	});
	$('header > ul li a').bind('click', function(event) {
		var t = $('article.'+$(this).attr('href'));
		$('html, body').animate({
			scrollTop: t.position().top+eval(t.attr('data-normalize'))+'px'
		}, 500);
		event.preventDefault();
	});
});