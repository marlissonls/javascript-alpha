let fabricante = document.querySelector("#fabricante");
let model = document.querySelector("#modelo");
let preco = document.querySelector("#preco");
let velocity = document.querySelector("#velocidade");
let zeroCem = document.querySelector("#aceleracao");
let peso = document.querySelector("#peso");
let img = document.querySelector("#carro-imagem");

const fabricFerrari = "Ferrari";
const modelFerrari = "488 GTB";
const precoFerrari = " R$ 2.416.658,00";
const velocFerrari = "330";
const acelFerrari = "3";
const pesoFerrari = "1,37";
const imgFerrari = "images/ferrari.png";

const fabricLambo = "Lamborghini";
const modelLambo = "Aventador S";
const precoLambo = "R$ 3.980.000,00";
const velocLambo = "350";
const acelLambo = "2,5";
const pesoLambo = "1,55";
const imgLambo = "images/lamborghini.png";

const fabricPorsche = "Porsche";
const modelPorsche = "911 GTS";
const precoPorsche = "R$ 919.000";
const velocPorsche = "310";
const acelPorsche = "3,3";
const pesoPorsche = "1,57";
const imgPorsche = "images/porsche.png";

function displayData () {
    const carSelect = document.querySelector("#select-model").value;

    switch (carSelect){
        case "ferrari":
            fabricante.innerHTML = fabricFerrari;
            model.innerHTML = modelFerrari;
            preco.innerHTML = precoFerrari;
            velocity.innerHTML = velocFerrari;
            zeroCem.innerHTML = acelFerrari;
            peso.innerHTML = pesoFerrari;
            img.src = imgFerrari;
            break;

        case "lamborghini":
            fabricante.innerHTML = fabricLambo;
            model.innerHTML = modelLambo;
            preco.innerHTML = precoLambo;
            velocity.innerHTML = velocLambo;
            zeroCem.innerHTML = acelLambo;
            peso.innerHTML = pesoLambo;
            img.src = imgLambo;
            break;
        
        case "porsche":
            fabricante.innerHTML = fabricPorsche;
            model.innerHTML = modelPorsche;
            preco.innerHTML = precoPorsche;
            velocity.innerHTML = velocPorsche;
            zeroCem.innerHTML = acelPorsche;
            peso.innerHTML = pesoPorsche;
            img.src = imgPorsche;
            break;
        
        default:
            fabricante.innerHTML = "";
            model.innerHTML = "";
            preco.innerHTML = "";
            velocity.innerHTML = "";
            zeroCem.innerHTML = "";
            peso.innerHTML = "";
            img.src = "";
    }      
}