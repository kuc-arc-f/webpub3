
$(function() {
	var pageBottom = $('.page-bottom');
	pageBottom.show();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
		  pageBottom.fadeOut();
		} else {
		  pageBottom.fadeIn();
		}
	});
	pageBottom.click(function () {
	  $('body, html').animate({scrollTop: 700}, 500, 'swing');
	  return false;
	});
	//
	var pageTop = $('.page-top');
	pageTop.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
		  pageTop.fadeIn();
		} else {
		  pageTop.fadeOut();
		}
	});
	pageTop.click(function () {
	  $('body, html').animate({scrollTop:0}, 500, 'swing');
	  return false;
	});
});

