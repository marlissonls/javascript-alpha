const bomba = document.getElementById('bomb-img');
const armarB = document.querySelector('#button');
const desarmarB = document.getElementById('bomb-img');
const bombPlantedAudio = document.getElementById("planted-audio");
const bombDefusedAudio = document.getElementById("defused-audio");
const bombExplosionAudio = document.getElementById("explosion-audio");
const tick = document.getElementById("tick");

let remainingTime;
let decreaseTime;
let displayTimer;

function armarBomba () {
    remainingTime = 10;
    bomba.src = "images/img1.png";
    bombPlantedAudio.volume = 1.0;
    bombPlantedAudio.play();
    document.querySelector("h2").innerHTML = "THE BOMB HAS BEEN PLANTED<br><button type='button'>WAIT OR CLICK ON BOMB</button>";
    decreaseTime = setInterval (timer, 1000);
    desarmarB.addEventListener("click", desarmarBomba);
}

function timer () {
    tick.volume = 1.0;
    tick.play();
    remainingTime--;
    displayTimer = document.querySelector("#timer");
    if (remainingTime >= 10) {
        displayTimer.innerHTML = "00:" + remainingTime;

    } else if (remainingTime < 10 && remainingTime > 0) {
        displayTimer.innerHTML = "00:0" + remainingTime;
        
    } else if (remainingTime === 0) {
        displayTimer.innerHTML = "00:0" + remainingTime;
        detonarBomba ();
    }
}

function detonarBomba () {
    clearInterval (decreaseTime);
    bomba.src = "images/explosao.png";
    bombExplosionAudio.volume = 1.0;
    bombExplosionAudio.play();
    desarmarB.removeEventListener("click", desarmarBomba);
    document.querySelector("h2").innerHTML = "OH NO!!<br><button type='button' onclick='retry ()'>TRY AGAIN</button>";
    
}

function desarmarBomba () {
    clearInterval (decreaseTime);
    bomba.src = "images/img2.png";
    bombDefusedAudio.volume = 1.0;
    bombDefusedAudio.play();
    document.querySelector("h2").innerHTML = "THE BOMB HAS BEEN DEFUSED<br><button type='button' onclick='retry ()'>TRY AGAIN</button>";
    desarmarB.removeEventListener("click", desarmarBomba);
}

function retry () {
    bomba.src = "images/img0.png";
    document.querySelector("h2").innerHTML = "NOTHING HAPPENING...<br><button type='button' onclick='armarBomba ()'>START</button>";
    document.querySelector("#timer").innerHTML = "TIMER";
}

/*
let remainingTime = 10;
let myInterval = setInterval(myTimer,1000);

function myTimer () {
    remainingTime--;
    let timing = document.getElementById('timer');
    timing.innerHTML = remainingTime;
    if (remainingTime <= 3) {
        timing.style.color = "red";
    }
    if (remainingTime === 0) {
        clearInterval (myInterval);;
    }
}
*/