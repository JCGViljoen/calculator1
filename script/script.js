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

     

     console.log(calculation);

    

}


btn.forEach(button => button.addEventListener('click', () => calculate(button)))
    
