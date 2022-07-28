const calcButton = document.getElementById('btn-calc');
const operando1input = document.querySelector('#operando1');
const operando2input = document.querySelector('#operando2');
const resultFinal = document.querySelector('#result');

function checkInputs(){;
  try {
      if (isNaN(operando1input.value) || parseInt(operando1input.value) < 0 || isNaN(operando2input.value) || parseInt(operando2input.value) < 0){
          throw `[Multiplay] Impossível Multiplicar ${operando1input.value} * ${operando2input.value}`;
      }
  } catch (err) {
      resultFinal.textContent = err;
      return false;
  }
  return true;
}

function sum(op1, op2) {
    return op1 + op2;
}

function multiply(op1, op2, multiplier, i) {
    if (i < op1) {
        i = sum(i, 1)
        multiplier = sum(multiplier, op2)
        return multiply(op1, op2, multiplier, i)
    }

    if (i === op1) {
        return multiplier
    }
}

function calcular() {
    if (checkInputs()) {
        const operando1 = parseInt(operando1input.value)
        const operando2 = parseInt(operando2input.value)

        const result = multiply(operando1, operando2, 0, 0);

        resultFinal.textContent = `Resultado: ${result}`;
    }
} 

calcButton.addEventListener('click', calcular);

/* function subtract(op1, op2, result) {
    if (op1 > op2) {
        result = sum(result, 1);
        return subtract(op1, sum(op2, 1), result);
    }
    
    if (op1 === op2) {
        return result;
    }
} */
