const bomba = document.getElementById('bomb-img');
const armarB = document.querySelector('#button');
const desarmarB = document.getElementById('bomb-img');
const bombPlantedAudio = document.getElementById("planted-audio");
const bombDefusedAudio = document.getElementById("defused-audio");
const bombExplosionAudio = document.getElementById("explosion-audio");
let contagem;

//armarB.addEventListener("click", armarBomba);


function armarBomba () {
    bomba.src = "images/img1.png";
    bombPlantedAudio.volume = 1.0;
    bombPlantedAudio.play();
    document.querySelector("h2").innerHTML = "THE BOMB HAS BEEN PLANTED<br><button type='button'>WAIT 10 SECONDS OR CLICK ON BOMB</button>";
    desarmarB.addEventListener("click", desarmarBomba);
    contagem = setTimeout(detonarBomba, 10000);
}

function detonarBomba () {
    bomba.src = "images/explosao.png";
    bombExplosionAudio.volume = 1.0;
    bombExplosionAudio.play();
    desarmarB.removeEventListener("click", desarmarBomba);
    document.querySelector("h2").innerHTML = "OH NO!!<br><button type='button' onclick='retry ()'>TRY AGAIN</button>";
}

function desarmarBomba () {
    clearTimeout (contagem);
    bomba.src = "images/img2.png";
    bombDefusedAudio.volume = 1.0;
    bombDefusedAudio.play();
    document.querySelector("h2").innerHTML = "THE BOMB HAS BEEN DEFUSED<br><button type='button' onclick='retry ()'>TRY AGAIN</button>";
    desarmarB.removeEventListener("click", desarmarBomba);
}

function retry () {
    bomba.src = "images/img0.png";
    document.querySelector("h2").innerHTML = "NOTHING HAPPENING...<br><button type='button' onclick='armarBomba ()'>START</button>";
}
