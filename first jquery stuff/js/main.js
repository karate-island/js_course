var header = $('#header');

var nav = header.find('nav');
var totalHeaderHeight = header.height() - nav.height();

window.addEventListener("scroll", function(event){
	var position = $(document).scrollTop();

	console.log(position);
	console.log(totalHeaderHeight);

	if(position > 1) {
		nav.addClass('scroll');
	} else {
		nav.removeClass('scroll');
	}

	if(position > totalHeaderHeight) {
		nav.addClass('shadow');
	} else {
		nav.removeClass('shadow');
	}
});



var scrollText = header.find('.scroll_text');

window.addEventListener("scroll", function(event){
	var position = $(document).scrollTop();

	if(position > 200) {
		scrollText.addClass('go_right');
	} else {
		scrollText.removeClass('go_right');
	}


});











