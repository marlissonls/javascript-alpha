let minutos;
let segundos;
let decreaseTime;
const alarme = document.querySelector("#alarm");

function start () {
    minutos = parseInt(document.querySelector("#minutos").value);
    segundos = parseInt(document.querySelector("#segundos").value);
    decreaseTime = setInterval (decreaseSecs, 1000);
    document.querySelector("#button").innerHTML = '<button type="button" id="stop-timer" onclick="stop()">PARAR</button>';
}

function stop () {
    clearInterval(decreaseTime);
    alarme.load();
    document.querySelector("#button").innerHTML = '<button type="button" id="start-timer" onclick="start()">INICIAR</button>';
}

function decreaseSecs () {
    //Os primeiros 4 if()s servem para ajustar o display do timer.
    if (minutos >= 10 && segundos >= 10) {
        document.querySelector("#timer").innerHTML = minutos + ":" + segundos;
    };

    if (minutos >= 10 && segundos < 10) {
        document.querySelector("#timer").innerHTML = minutos + ":0" + segundos;
    };

    if (minutos < 10 && segundos >= 10) {
        document.querySelector("#timer").innerHTML = "0" + minutos + ":" + segundos;
    };
    
    if (minutos < 10 && segundos < 10) {
        document.querySelector("#timer").innerHTML = "0" + minutos + ":0" + segundos;
    };

    //Estes outros 4 if()s servem para decrementar os minutos e segundos ou reatribuir os segundos com o valor 59
    if (minutos > 0 && segundos > 0) {
        segundos--;
        return;
    };

    if (minutos > 0 && segundos === 0) {
        segundos = 59;
        minutos--;
        return;
    };

    if(minutos === 0 && segundos > 0) {
        segundos--;
        return;
    };

    if (minutos === 0 && segundos === 0) {
        alarme.play();
        clearInterval(decreaseTime);
    };
    /*Muitos if()s, porém ficou mais organizado e intendível*/
}