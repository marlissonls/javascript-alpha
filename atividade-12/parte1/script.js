const iteracoes = document.querySelector("#valor");
const calc = document.querySelector("#calc");
const fatresult = document.querySelector("#fatorial");
const eulerNumber = document.querySelector("#euler-number");
let fatorial;
let euler;
let itr;

function calcFat(n) {
    itr = BigInt(iteracoes.value);
    fatorial = 1n;
    let i;

    for (i = 1n; i <= n; i++) {
        fatorial *= i;
    }
    return fatorial;
}

function calcEuler() {
    itr = BigInt(iteracoes.value);
    euler = 0n;
    let n;

    for (n = 2n; n <= itr; n++){
        euler += (10n**100n/calcFat(n));
    }

    fatresult.textContent = itr + '! = ' + fatorial;
    eulerNumber.textContent = 'euler('+itr+') = 2.' + euler;
}

calc.addEventListener('click', calcEuler);