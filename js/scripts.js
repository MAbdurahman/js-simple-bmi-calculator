/*-----Javascript for js-create-design-website */
$(window).on('load', function () {
	// makes sure that whole site is loaded
	console.log('and the Window has loaded,');
	$('.effect-07').val('');

	$('.effect-07').focusout(function () {
		if ($(this).val() !== '') {
			$(this).addClass('has-content');
		} else {
			$(this).removeClass('has-content');
		}
	});
});

$(document).ready(function () {
   console.log('document is ready in jQuery!')


});

document.addEventListener('DOMContentLoaded', () => {
	console.log('document is ready in plain JavaScript!');
 
});
