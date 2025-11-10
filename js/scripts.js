/*-----Javascript for js-create-design-website */
$(window).on('load', function () {
	// makes sure that whole site is loaded
	console.log('and the Window has loaded,');
   
	$('.col-3 input').val('');

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

   const calculate_button = document.getElementById('calculate-button');
   const reset_button = document.getElementById('reset-button');

   calculate_button.addEventListener('onsubmit', calculateBMI);
   reset_button.addEventListener('onreset', resetForm);


   function calculateBMI(e) {
      e.preventDefault();
   }

   function resetForm(e) {
      e.preventDefault();
   }
 
});
