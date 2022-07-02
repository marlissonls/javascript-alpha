const n = document.querySelector("#valor");
const calc = document.querySelector("#calc");
const resultado = document.querySelector("#fatorial");


function calcular() {
    let fat = 1n;
    let i;
    for (i = 1n; i <= BigInt(n.value); i++) {
        fat *= i;
    }
    resultado.textContent = fat;
}

calc.addEventListener('click', calcular);



/* const n = document.querySelector("#valor");
const calc = document.querySelector("#calc");
const resultado = document.querySelector("#fatorial");
let fat = 1;

function calcular() {
    //alert(n.value);
    let i;
    for (i = 1; i <= n.value; i++) {
        fat *= i;
    }
    resultado.textContent = fat;
}

calc.addEventListener('click', calcular); */

/* const iteracoes = document.querySelector("#valor");
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

calc.addEventListener('click', calcEuler); */

/* function calcFat(n) {
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

calc.addEventListener('click', calcEuler); */