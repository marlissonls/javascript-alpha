/* 
///////
const url = 'https://api.github.com/users/marlissonls';

fetch(url)
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log('fetch-then', data)
})
.catch((error) => {
    console.error(error)
})
///////
///////
async function getUser() {
    try {
      // Handle success in try
      const response = await fetch('https://api.github.com/users/marlissonls')
      const data = await response.json()
  
      console.log('async-await', data)
    } catch (error) {
      // Handle error in catch
      console.error(error)
    }
}

getUser()
//////
 */

///////////////////////////////////
/// MODULES

/* 
import main from "./main.js";
import page1 from "./page1.js";
import page2 from "./page2.js";

main();

const btn0 = document.querySelector(".main")
btn0.addEventListener('click', main)

const btn1 = document.querySelector(".page1")
btn1.addEventListener('click', page1)

const btn2 = document.querySelector(".page2")
btn2.addEventListener('click', page2)
 */


//////////////////////////////////////
/// CAPTURA DE ERROS
/* 
function checkInputs() {
    try {
        if(parseInt(some.value) < 0) {
            throw `something`
        }

        switch (parseInt(some.value)) {
            case -1:
                throw `something`
        }
    } catch(error) {
        warn.innerHTML = error
    }
}
 */

/* 
/////////////////////////////////////
/// CLASSES

class Funcionario {
    constructor (
        nome, tempoFirma
    ) {
        this.nome = nome,
        this.tempoFirma = tempoFirma
    }
}

class Vendedor extends Funcionario {
    constructor (
        nome, tempoFirma, cargo
    ) {
        super(nome, tempoFirma),
        this.cargo = cargo
    }

    get Id() {
        console.log(`nome: ${this.nome},
cargo: ${this.cargo},
tempo de empresa: ${this.tempoFirma} anos`)
    }

    get demissao() {
        console.log(`Realizar a demissao do funcionário ${this.nome}`)
    }

    get aumentoSalario() {
        if (this.tempoFirma >= 5)
            console.log(`O funcionário ${this.nome} está habilitado a receber aumento`)
        else
            console.log(`O funcionário ${this.nome} NÃO está habilitado a receber aumento`)
    }
}

const juca = new Vendedor('Juca Salomão', 3, 'vendedor')

console.log(`${juca.tempoFirma}`)
console.log(`${juca.nome}`)
console.log(`${juca.cargo}`)
console.log(`${juca.Id}`)
console.log(`${juca.demissao}`)
console.log(`${juca.aumentoSalario}`)


class Ponto {
    constructor (x, y) {
        this.x = x,
        this.y = y
    }

    static distancia(p1, p2) {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y

        return Math.hypot(dx, dy)
    }
}

const p1 = new Ponto(10, 10)
const p2 = new Ponto(5, 5)
const d = Ponto.distancia(p1, p2)

console.log(`${d}`)
 */