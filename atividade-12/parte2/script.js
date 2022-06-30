const calc = document.querySelector("#calcular");
const primos = document.querySelector("#primos");
const contador = document.querySelector("#contador");

function calcular() {
    let counter = 2;
    primos.textContent = '2; 3; ';
    for (let number = 4; number <= 100000; number++) {
        for(let i = 2; i <= number/2; i++) {
            if (number%i === 0) {
                break;
            } else {
                if (i === number/2-0.5) {
                    primos.textContent += number+'; ';
                    counter++;
                }
            }
        }
    }
    contador.textContent = counter + ' números primos encontrados.';
}

calc.addEventListener('click', calcular);