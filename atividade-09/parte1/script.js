const calcButton = document.getElementById('btn-calc');
const operando1input = document.querySelector('#operando1');
const operando2input = document.querySelector('#operando2');
const resultFinal = document.querySelector('#result');

function checkInputs(){;
    try {
        if (isNaN(operando1input.value) || parseInt(operando1input.value) < 0 || isNaN(operando2input.value) || parseInt(operando2input.value) < 0){
            throw `[sum] Impossível somar ${operando1input.value} + ${operando2input.value}`;
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

function calcular() {
    if (checkInputs()) {
        const operando1 = parseInt(operando1input.value)
        const operando2 = parseInt(operando2input.value)
        
        const result = sum(operando1, operando2);

        resultFinal.textContent = `Resultado: ${result}`;
    }
}

calcButton.addEventListener('click', calcular);
