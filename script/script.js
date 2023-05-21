const screenDisplay = document.querySelector('.screen')

const btn = document.querySelectorAll('button')

let calculation = []

let accumulativeCalculation

function calculate(button){
     const value = button.textContent
    if(value == 'clear'){
        calculation = []
        screenDisplay.textContent = '.'
    } else if ( value == '='){
        screenDisplay.textContent = eval(accumulativeCalculation)
    } else {calculation.push(value)
        accumulativeCalculation = calculation.join('')
        screenDisplay.textContent = accumulativeCalculation
    }

    
    }


     console.log(calculation);
    
    // used chat gpt to check for any errors in my code 
     function backspace() {
        calculation.pop();
        accumulativeCalculation = calculation.join('');
        screenDisplay.textContent = accumulativeCalculation;
      }
      
      btn.forEach(button => {
        if (button.textContent === '⌫') {
          button.addEventListener('click', backspace);
        } else {
          button.addEventListener('click', () => calculate(button));
        }
      });
    
