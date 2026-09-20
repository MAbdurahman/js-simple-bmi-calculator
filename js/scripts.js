
'use strict';

document.addEventListener('DOMContentLoaded', function () {
   // makes sure that whole site is loaded, so the 3000ms preloader coincides with
   // the delay of 3000ms for the header content animation
   const preloader = document.getElementById('preloader');
   const preloaderGif = document.getElementById('preloader-gif');

   if (preloaderGif) {
      preloaderGif.style.transition = 'opacity 3000ms ease-in-out';
      preloaderGif.style.opacity = '0';

   }
   if (preloader) {
      preloader.style.transition = 'opacity 3000ms ease-in-out';
      preloader.style.opacity = '0';
   }

   setTimeout(function () {
      preloaderGif.style.display = 'none';
      preloader.style.display = 'none';
   }, 5000);
});

document.addEventListener('DOMContentLoaded', () => {
   const form = document.getElementById('main-form');
   const imperialMeasurement = document.getElementById('imperial');
   const metricMeasurement = document.getElementById('metric');
   const heightField = document.querySelector('#height')
   const weightField = document.querySelector('#weight');
   const bmiMessage = document.querySelector('#bmi-message');

   let heightValue = document.getElementById('height').value;
   let weightValue = document.getElementById('weight').value;
   heightValue = heightValue.trim();
   weightValue = weightValue.trim();

   let bmiResults = 0;

   /************************* label effect-07 *************************/
   const inputs = document.querySelectorAll('.effect-07');

   function updateInputState(input) {
      input.classList.toggle('has-content', input.value.trim() !== '');
   }

   inputs.forEach((input) => {
      updateInputState(input); // Handles values already present on load.

      input.addEventListener('input', () => {
         updateInputState(input);
      });

      input.addEventListener('blur', () => {
         updateInputState(input);
      });
   });

   function calculateImperialBMI(height, weight) {
      const heightResult = height * height;
      const weightResult = weight * 703;

      return (weightResult / heightResult).toFixed(2);
   }

   function calculateMetricBMI(height, weight) {
      const firstResult = weight / height / height;

      return (firstResult * 10000).toFixed(2);
   }

   function calculateBMI() {
      const weight = weightField.value.trim();
      const height = heightField.value.trim();

      if (heightValue === 0) {
         swal('Invalid Entry', 'Enter Valid Value For Weight!', 'error');
      }
      if (weightValue === 0) {
         swal('Invalid Entry', 'Enter Valid Value For Weight!', 'error');
      }

      if (weight === '') {
         swal('Invalid Entry', 'Enter Valid Value For Weight!', 'error');
      }
      if (weight === 0) {
         swal('Invalid Entry', 'Enter Valid Value For Weight!', 'error');
      }
      if (height === '') {
         swal('Invalid Entry', 'Enter Valid Value For Height!', 'error');
      }
      if (height === 0) {
         swal('Invalid Entry', 'Enter Valid Value For Height!', 'error');
      }

      if (imperialMeasurement.checked === false) {
         if (metricMeasurement.checked === false) {
            swal('Invalid Entry', 'Select Your Unit Of Measurement!', 'error');
         }
      }

      if (imperialMeasurement.checked && height !== '' && weight !== '') {
         bmiResults = calculateImperialBMI(height, weight);

      }
      if (metricMeasurement.checked && height !== '' && weight !== '') {
         bmiResults = calculateMetricBMI(height, weight);
      }

      let textMessage;
      let messageColor;

      if (bmiResults < 18.5) {
         textMessage = 'Underweight';
         messageColor = 'text-blue';
      } else if (bmiResults >= 18.5 && bmiResults < 25) {
         textMessage = 'Normal';
         messageColor = 'text-green';
      } else if (bmiResults >= 25 && bmiResults < 30) {
         textMessage = 'Overweight';
         messageColor = 'text-yellow';
      } else if (bmiResults >= 30 && bmiResults < 40) {
         textMessage = 'Obese';
         messageColor = 'text-orange';
      } else {
         textMessage = 'Extreme Obese';
         messageColor = 'text-red';
      }

      if (
         (imperialMeasurement.checked || metricMeasurement.checked) &&
         Number(height) > 0 &&
         Number(weight) > 0 &&
         Number.isFinite(Number(bmiResults)) &&
         Number(bmiResults) > 0
      ) {
         bmiMessage.innerHTML = `BMI = <b>${bmiResults}</b> 
        (<span class='${messageColor}'><b>${textMessage}</b></span>)`;

         bmiMessage.style.visibility = 'visible';
      }

      setTimeout(() => {
         bmiMessage.style.visibility = 'hidden';
      }, 5000);
   }

   form.addEventListener('submit', (e) => {
      e.preventDefault();
      calculateBMI();
   });
   form.addEventListener('reset', () => {
      // Runs after the browser restores each field to its default value
      setTimeout(() => {
         document.querySelectorAll('.effect-07').forEach((input) => {
            input.classList.remove('has-content');
         });

         bmiMessage.textContent = '';
         bmiMessage.style.visibility = 'hidden';

         // Optional: clear BMI state too
         bmiResults = 0;
      }, 0);
   });
});