const iteracoes = document.querySelector("#valor");
const calc = document.querySelector("#calc");
const fatresult = document.querySelector("#fatorial");
const eulerNumber = document.querySelector("#euler-number");
let fatorial;
let euler;
let itr;

function calcFat(n) {
    itr = iteracoes.value;
    fatorial = 1;
    let i;
    for (i = 1; i <= n; i++) {
        fatorial *= i;
    }
    fatresult.textContent = itr + '! = ' + fatorial;
    return fatorial;
}

function calcEuler() {
    itr = iteracoes.value;
    euler = 0;
    let n;
    for (n = 0; n <= itr; n++){
        euler += (1/calcFat(n));
    }
    eulerNumber.textContent = 'euler('+itr+') = ' + euler;
}

calc.addEventListener('click', calcEuler);