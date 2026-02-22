/*-----Javascript for js-create-design-website */
/*$(window).on('load', function () {
	// makes sure that whole site is loaded
	$('.col-3 input').val('');

	$('.effect-07').focusout(function () {
		if ($(this).val() !== '') {
			$(this).addClass('has-content');
		} else {
			$(this).removeClass('has-content');
		}
	});
});*/

$(document).ready(function () {
   $('#preloader-gif, #preloader').fadeOut(5000, function () {});
});

document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('main-form');
   const imperial_measurement = document.getElementById('imperial');
   const metric_measurement = document.getElementById('metric');

	const calculate_button = document.getElementById('calculate-button');
	const reset_button = document.getElementById('reset-button');
	const height_field = document.querySelector('#height');
	const weight_field = document.querySelector('#weight');
   const bmi_message = document.querySelector('#bmi-message');
   
   let bmi_results;

	calculate_button.addEventListener('click', calculateBMI);
	reset_button.addEventListener('onreset', resetForm);
   form.addEventListener('submit', e => {e.preventDefault()});
	
   function resetForm(e) {
      e.preventDefault();
      removeJSEffect();
      
   }

   /**************** effect 07 scripts ****************/
   document.querySelector('.effect-07').value = '';

   document.querySelectorAll('.col-3 > .effect-07').forEach(function(element) {
      element.addEventListener('focusout', function() {
         if (this.value !== '') {
            this.classList.add('has-content');

         } else {
            this.classList.remove('has-content');

         }
      });
   });



   function removeJSEffect() {
      document.querySelector('.input-effect').value = '';
      document.querySelectorAll('input[type= number]').forEach(function(element) {
         element.classList.remove('has-content');

      });
   }

   function calculateImperialBMI(height, weight) {
      const height_result = height * height;
      const weight_result = weight * 703;
      
      return (weight_result / height_result).toFixed(2);
   }

   function calculateMetricBMI(height, weight) {
      const first_result = weight / height / height;

      return (first_result *10000).toFixed(2);
   }

	function calculateBMI() {
		const weight = weight_field.value;
      const height = height_field.value;


      if (imperial_measurement.checked === false && metric_measurement.checked === false) {
			return swal('Invalid Entry', 'Select Your Unit Of Measurement!', 'error');
		}

      if (height === '0' ) {
         return swal('Invalid Entry', 'Enter Value Greater Than Zero For Height!', 'error');
      }
      if (height === '') {
         return swal('Invalid Entry', 'Enter Valid Value For Height!', 'error');
      }

      if (weight === '0') {
         return swal('Invalid Entry', 'Enter Value Greater Than Zero For Weight!', 'error');
      }

      if (weight === '' ) {
         return swal('Invalid Entry', 'Enter Valid Value For Weight!', 'error');
      }

      if (imperial_measurement.checked && height !== '' && weight !== '') {
         bmi_results = calculateImperialBMI(height, weight);

      }
      if (metric_measurement.checked && height !== '' && weight !== '') {
         bmi_results = calculateMetricBMI(height, weight);
      }

      let text_message;
      let message_color;
      
      if (bmi_results < 18.5) {
         text_message = 'Underweight';
         message_color = 'text-blue';
      }
      else if (bmi_results >= 18.5 && bmi_results < 25) {
         text_message = 'Normal';
         message_color = 'text-green';
      }
      else if (bmi_results >= 25 && bmi_results < 30) {
         text_message = 'Overweight';
         message_color = 'text-yellow';
      }
      else if (bmi_results >= 30 && bmi_results < 40) {
         text_message = 'Obese';
         message_color = 'text-orange';
      }
      else {
         text_message = 'Extreme Obese';
         message_color = 'text-red';
      }

      if (
			(imperial_measurement.checked === true ||
				metric_measurement.checked === true) &&
			(height !== '' || height !== 0) &&
			(weight !== '' || weight !== 0) &&
			(bmi_results !== 0 || !isNaN())
		) {
			bmi_message.innerHTML = `<p id="bmi-message">BMI = <b>${bmi_results} </b>(<span class="${message_color}"><b>${text_message}</b></span>)</p>`;

			bmi_message.style.visibility = 'visible';
		}

      setTimeout(() => {
         bmi_message.style.visibility = 'hidden';
      }, 5000)

	}

});