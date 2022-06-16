let minutos;
let segundos;
let decreaseTime;
let totalSecs;
const alarme = document.querySelector("#alarm");
const timer = document.querySelector("#timer");
const button = document.querySelector("#button");

function start () {
    minutos = parseInt(document.querySelector("#minutos").value);
    segundos = parseInt(document.querySelector("#segundos").value);
    decreaseTime = setInterval (decreaseSecs, 1000);
    button.innerHTML = '<button type="button" id="stop-timer" onclick="stop()">PARAR</button>';
    totalSecs = segundos + 60*minutos;
}

function stop () {
    clearInterval(decreaseTime);
    alarme.load();
    button.innerHTML = '<button type="button" id="start-timer" onclick="start()">INICIAR</button>';
}

function decreaseSecs () {
    //Os primeiros 5 if()s servem para ajustar o display do timer.
    if((segundos + 60*minutos) <= 0.05*totalSecs) {
        timer.style.color = "#ff3737";
        timer.style.textShadow = "0 0 15px #cc0000";
    }else {
        timer.style.color = "#37ff37";
        timer.style.textShadow = "0 0 15px #00cc00";
    }

    if (minutos >= 10 && segundos >= 10) {
        timer.innerHTML = minutos + ":" + segundos;
    };

    if (minutos >= 10 && segundos < 10) {
        timer.innerHTML = minutos + ":0" + segundos;
    };

    if (minutos < 10 && segundos >= 10) {
        timer.innerHTML = "0" + minutos + ":" + segundos;
    };
    
    if (minutos < 10 && segundos < 10) {
        timer.innerHTML = "0" + minutos + ":0" + segundos;
    };

    //Estes outros 3 if()s servem para decrementar os minutos e segundos ou reatribuir os segundos com o valor 59
    if (minutos >= 0 && segundos > 0) {
        segundos--;
        return;
    };

    if (minutos > 0 && segundos === 0) {
        segundos = 59;
        minutos--;
        return;
    };

    if (minutos === 0 && segundos === 0) {
        alarme.play();
        clearInterval(decreaseTime);
    };
    /*Muitos if()s, porém ficou mais organizado e intendível*/
}
