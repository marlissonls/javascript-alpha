const calc = document.querySelector("#calcular");
const piDisplay = document.querySelector("#pi");
let pi = 0;
let n1 = 2, n2 = 3, n3 = 4;

function calcular() {
    for(let i = 1; i <= 1000; i++) {
        if(i%2 !== 0){
            pi += 1/(n1*n2*n3);
        } else {
            pi -= 1/(n1*n2*n3);
        }
        n1 += 2;
        n2 += 2;
        n3 += 2;
    }
    pi = pi*4 + 3;
    piDisplay.textContent = 'π = ' + pi;
}

calc.addEventListener('click', calcular);