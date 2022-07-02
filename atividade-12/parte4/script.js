let baralho;
let baralhoOrdem;
let fiveCards;
let firstShuffle = 0;
let eq;
let dif;
let flush;

const takeFiveCards = document.querySelector("#cards");
const embaralhar = document.querySelector("#embaralhar");
const showHandCards = document.querySelector('#section');
const message = document.querySelector("#message");

const straightFlush = 'Você conseguiu um Straight Flush!';
const sequence = 'Você conseguiu uma sequência de cartas com mesmo valor!'
const quadra = 'Você conseguiu um quadra!';
const fullHouse = 'Você conseguiu um Full House!';
const trinca = 'Você conseguiu um Trinca!';
const par = 'Você conseguiu um Par!';
const doisPares = 'Você conseguiu um Dois Pares!';
const gotNothing = 'Você não conseguiu nada!'

baralho = [
    {id: 1, naipe: "copa", valor: "2"},
    {id: 2, naipe: "copa", valor: "3"},
    {id: 3, naipe: "copa", valor: "4"},
    {id: 4, naipe: "copa", valor: "5"},
    {id: 5, naipe: "copa", valor: "6"},
    {id: 6, naipe: "copa", valor: "7"},
    {id: 7, naipe: "copa", valor: "8"},
    {id: 8, naipe: "copa", valor: "9"},
    {id: 9, naipe: "copa", valor: "10"},
    {id: 10, naipe: "copa", valor: "J"},
    {id: 11, naipe: "copa", valor: "Q"},
    {id: 12, naipe: "copa", valor: "K"},
    {id: 13, naipe: "copa", valor: "A"},

    {id: 14, naipe: "paus", valor: "2"},
    {id: 15, naipe: "paus", valor: "3"},
    {id: 16, naipe: "paus", valor: "4"},
    {id: 17, naipe: "paus", valor: "5"},
    {id: 18, naipe: "paus", valor: "6"},
    {id: 19, naipe: "paus", valor: "7"},
    {id: 20, naipe: "paus", valor: "8"},
    {id: 21, naipe: "paus", valor: "9"},
    {id: 22, naipe: "paus", valor: "10"},
    {id: 23, naipe: "paus", valor: "J"},
    {id: 24, naipe: "paus", valor: "Q"},
    {id: 25, naipe: "paus", valor: "K"},
    {id: 26, naipe: "paus", valor: "A"},

    {id: 27, naipe: "ouro", valor: "2"},
    {id: 28, naipe: "ouro", valor: "3"},
    {id: 29, naipe: "ouro", valor: "4"},
    {id: 30, naipe: "ouro", valor: "5"},
    {id: 31, naipe: "ouro", valor: "6"},
    {id: 32, naipe: "ouro", valor: "7"},
    {id: 33, naipe: "ouro", valor: "8"},
    {id: 34, naipe: "ouro", valor: "9"},
    {id: 35, naipe: "ouro", valor: "10"},
    {id: 36, naipe: "ouro", valor: "J"},
    {id: 37, naipe: "ouro", valor: "Q"},
    {id: 38, naipe: "ouro", valor: "K"},
    {id: 39, naipe: "ouro", valor: "A"},

    {id: 40, naipe: "espada", valor: "2"},
    {id: 41, naipe: "espada", valor: "3"},
    {id: 42, naipe: "espada", valor: "4"},
    {id: 43, naipe: "espada", valor: "5"},
    {id: 44, naipe: "espada", valor: "6"},
    {id: 45, naipe: "espada", valor: "7"},
    {id: 46, naipe: "espada", valor: "8"},
    {id: 47, naipe: "espada", valor: "9"},
    {id: 48, naipe: "espada", valor: "10"},
    {id: 49, naipe: "espada", valor: "J"},
    {id: 50, naipe: "espada", valor: "Q"},
    {id: 51, naipe: "espada", valor: "K"},
    {id: 52, naipe: "espada", valor: "A"}
];

baralhoOrdem = baralho.slice();

function showHand() {
    let id = '';
    for (let z = 0; z < fiveCards.length; z++) {
        id = fiveCards[z].id;
        showHandCards.innerHTML += `<img class="hand-cards" src="./img/${id}.svg">`;
    }
}

function shuffle() {
    firstShuffle = 1;
    embaralhar.hidden = true;
    message.innerHTML = '';
    baralho = [];
    baralho = baralhoOrdem.slice();
    for (let i = 0; i < baralho.length; i++) {
        const j = Math.floor(Math.random()*baralho.length);
        const aux = baralho[i];
        baralho[i] = baralho[j];
        baralho[j] = aux;
    }
}

function take5Cards() {
    if (firstShuffle === 0) {
        shuffle();
    }

    showHandCards.innerHTML = '';

    fiveCards = [];

    if (baralho.length > 5) {
        for (let j = 0; j < 5; j++) {
            fiveCards.push(baralho[j]);
        }
    } else {
        showHandCards.innerHTML = ''
        embaralhar.hidden = false;
        return message.innerHTML = 'Atenção! Há menos de 5 cartas restantes no baralho!';
    }

    for (let k = 0; k < 5; k++) {
        baralho.splice(k, 1);
    }
    
    showHand();

    verifyStraightFlush();
    if (!verifyStraightFlush()) {
        verifyEqualElements();
    };
}

function verifyStraightFlush() { // verificação de STRAIGHT FLUSH
    let copa = 0;
    let paus = 0;
    let ouro = 0;
    let espada = 0;

    function fStraightFlush() {
        let cresc = 0;
        let decresc = 0;
        for (let v = 0; v < 4; v++) {
            if (fiveCards[v].id+1 === fiveCards[v+1].id) {
                cresc++;
                if (cresc === 4) {
                    message.innerHTML = straightFlush;
                    return true;
                }
            }
            
            if (fiveCards[v].id-1 === fiveCards[v+1].id) {
                decresc++;
                if (decresc === 4) {
                    message.innerHTML = straightFlush;
                    return true;
                }
            }
        }
    }

    for (let l = 0; l < 5; l++) {
        if (fiveCards[l].naipe === 'copa'){
            copa++;
            if (copa === 5) {
                fStraightFlush();
                if (fStraightFlush()) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    for (let l = 0; l < 5; l++) {
        if (fiveCards[l].naipe === 'paus'){
            paus++;
            if (paus === 5) {
                fStraightFlush();
                if (fStraightFlush()) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    for (let l = 0; l < 5; l++) {
        if (fiveCards[l].naipe === 'ouro'){
            ouro++;
            if (ouro === 5) {
                fStraightFlush();
                if (fStraightFlush()) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    for (let l = 0; l < 5; l++) {
        if (fiveCards[l].naipe === 'espada'){
            espada++;
            if (espada === 5) {
                fStraightFlush();
                if (fStraightFlush()) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
}

function verifyEqualElements() {
    eq = 0;
    dif = 0;
    for (let a = 0; a < 5; a++) {
        for (let b = 0; b < 5; b++) {
            if (a !== b) {
                if (fiveCards[a].valor === fiveCards[b].valor) {
                    eq++; 
                } else if (fiveCards[a].valor !== fiveCards[b].valor) {
                    dif++; 
                }
            }
        }     
    }

    switch (eq) {
        case 20:
            return message.innerHTML = sequence;
        case 12:
            return message.innerHTML = quadra;
        case 4:
            return message.innerHTML = doisPares;
        case 6:
            return message.innerHTML = trinca;
        case 8:
            return message.innerHTML = fullHouse;
        case 2:
            return message.innerHTML = par;
        default:
            return message.innerHTML = gotNothing;
    }
}

embaralhar.addEventListener('click', shuffle);
takeFiveCards.addEventListener('click', take5Cards);

/* FUNÇÕES BUGADAS - IGNORAR! function verifyQuadra() { // quatro cartas do mesmo valor
    for (let m = 0; m < 5; m++) {
        let quadra = 0;
        for (let n = 0; n < 5; n++) {
            if (fiveCards[n].valor === fiveCards[m].valor) {
                quadra++;
            }
        }
    }
    if (quadra === 4) {
        return true;
    }
}

function verifyFullHouse() { // AJUSTAR três cartas do mesmo valor e um par de cartas de mesmo valor

}

function verifyTrinca() { // três cartas do mesmo valor
    for (let o = 0; o < 5; o++) {
        let trinca = 0;
        for (let p = 0; p < 5; p++) {
            if (fiveCards[p].valor === fiveCards[o].valor) {
                trinca++;
            }
        }
    }
    if (trinca === 3) {
        return true;
    }
}

function verifyPar() { // duas cartas do mesmo valor
    for (let r = 0; r < 5; r++) {
        let par = 0;
        for (let s = 0; s < 5; s++) {
            if (fiveCards[s].valor === fiveCards[r].valor) {
                par++;
            }
        }
    }

    if (par === 1) {
        return true;
    }
} */

/* ANOTAÇÃO DE VERIFICAÇÕES DE ELEMENTOS IGUAIS NO ARRAY DA MÃO.
dois-pares 
1 3 3 4 4
1 1 3 4 4
1 1 3 3 4
dif = 4+3+3+3+3 = 16
eq = 0+1+1+1+1 = 4

dif = 3+3+4+3+3 = 16
eq = 1+1+0+1+1 = 4

dif = 3+3+3+3+4 = 16
eq = 1+1+1+1+0 = 4

quadra
4 4 4 4 8
4 8 8 8 8

dif = 1+1+1+1+4 = 8
eq = 3+3+3+3+0 = 12

dif = 4+1+1+1+1 = 8
eq = 0+3+3+3+3 = 12

full house
3 3 3 6 6
3 3 6 6 6

dif = 2+2+2+3+3 = 12
eq = 2+2+2+1+1 = 8

dif = 3+3+2+2+2 = 12
eq = 1+1+2+2+2 = 8

par
2 2 4 5 6
1 2 2 3 4
1 2 3 3 4
1 2 3 4 4

dif = 3+3+4+4+4 = 18
eq = 1+1+0+0+0 = 2

dif = 4+4+3+3+4 = 18
eq = 0+0+1+1+0 = 2

trinca
3 3 3 6 7
3 4 4 4 5
3 4 6 6 6

dif = 2+2+2+4+4 = 14
eq = 2+2+2+0+0 = 6

dif = 4+2+2+2+4 = 14
eq = 0+2+2+2+0 = 6 

sequencia
3 3 3 3 3

dif = 0+0+0+0+0 = 0
eq = 4+4+4+4+4 = 20


*/

/* if (eq === 12 && dif === 8) { // verificação de QUADRA
        return quadra;
    }

    if (eq === 4 && dif === 16) { // verificação de DOIS PARES
        return doisPares;
    }

    if (eq === 6 && dif === 14) { // verificação de TRINCA
        return trinca;
    }

    if (eq === 8 && dif === 12) { // verificação de FULL HOUSE
        return fullHouse;
    }

    if (eq === 2 && dif === 18) { // verificação de PAR
        return par;
    } */
