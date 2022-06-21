const cep = document.querySelector('input');
let cepParte1;
let cepParte2;
let stringLength;
let key;

cep.addEventListener('input', stringEraser);
cep.addEventListener('keyup', cepLayout);
cep.addEventListener('keydown', hifenEraser);

function stringEraser () {
    cepParte1 = cep.value.substring(0, 5);
    cepParte2 = cep.value.substring(6, 9);

    if (isNaN(cepParte1)) {
        cep.value = cep.value.substring(0, cepParte1.length-1); // substring1  - 1characterNaN (552f - f = 552)
    }

    if (isNaN(cepParte2)) {
        cep.value = cep.value.substring(0, cepParte1.length + 1 + cepParte2.length - 1); //substring1 + hifen + subestring2 - 1characterNaN
    }
}

function cepLayout () {
    stringLength = cep.value;
    
    if (stringLength.length === 5){
        cep.value += "-";
    }

    if (stringLength.length > 9) {
        cep.value = cep.value.substring (0, 9);
    }
}

function hifenEraser (event) {
    key = event.key;
    stringLength = cep.value;

    if (key === "Backspace" && stringLength.length === 6) {
        cep.value = cep.value.substring (0, 5);
    }
}