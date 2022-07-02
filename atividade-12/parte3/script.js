const calc = document.querySelector("#calcular");
const piDisplay = document.querySelector("#pi");
const iteracoes = document.querySelector("#valor");

function calcular() {
    const itr = BigInt(iteracoes.value);
    let pi = 0n;
    let n1 = 2n, n2 = 3n, n3 = 4n;
    for(let i = 1n; i <= itr; i++) {
        if(i%2n !== 0n){
            pi += 10n**100n/(n1*n2*n3);
        } else {
            pi -= 10n**100n/(n1*n2*n3);
        }
        n1 += 2n;
        n2 += 2n;
        n3 += 2n;
    }
    pi = pi*4n;
    piDisplay.textContent = 'π = 3.' + pi;
}

calc.addEventListener('click', calcular);



const calct = document.querySelector("#calcular");
const piDisplayt = document.querySelector("#pit");

function calculart() {
    const itr = iteracoes.value;
    let pit = 0;
    let n1t = 2, n2t = 3, n3t = 4;
    for(let i = 1; i <= itr; i++) {
        if(i%2 !== 0){
            pit += 1/(n1t*n2t*n3t);
        } else {
            pit -= 1/(n1t*n2t*n3t);
        }
        n1t += 2;
        n2t += 2;
        n3t += 2;
    }
    pit = pit*4 + 3;
    piDisplayt.textContent = 'π (não BigInt) = ' + pit;
}

calct.addEventListener('click', calculart);