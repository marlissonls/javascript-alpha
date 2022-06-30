const n = document.querySelector("#valor");
const calc = document.querySelector("#calc");
const resultado = document.querySelector("#fatorial");
let fat = 1;

function calcular() {
    //alert(n.value);
    let i;
    for (i = 1; i <= n.value; i++) {
        fat *= i;
    }
    resultado.value = fat;
}

calc.addEventListener('click', calcular);