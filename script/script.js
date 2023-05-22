const screenDisplay = document.querySelector('.screen')
const btn = document.querySelectorAll('button')

// empty array
let calculation = []

// created variable
let theCalculation

function calculate(button){
     const value = button.textContent
    if(value == 'clear'){
        calculation = []
        screenDisplay.textContent = '0'
    } else if ( value == '='){
        screenDisplay.textContent = eval(theCalculation).toFixed(2)
    } else {calculation.push(value)
        theCalculation = calculation.join('')
        screenDisplay.textContent = theCalculation
    }

    
    }


     console.log(calculation);
    
    // backspace btn
     function backspace() {
        calculation.pop();
        theCalculation = calculation.join('');
        screenDisplay.textContent = theCalculation;
      }

     
      
      btn.forEach(button => {
        if (button.textContent === '<i class="fa-solid fa-delete-left">') {
          button.addEventListener('click', backspace);
        } else {
          button.addEventListener('click', () => calculate(button));
        }
      });
      
      
