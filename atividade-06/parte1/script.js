const contagem = setTimeout(detonarBomba, 3000);
const bomba = document.getElementById('bomb-img');
const bombPlantedAudio = document.getElementById("planted-audio");
const bombDefusedAudio = document.getElementById("defused-audio");
const bombExplosionAudio = document.getElementById("explosion-audio");

bombPlantedAudio.volume = 0.9;
bombPlantedAudio.play();

bomba.addEventListener("click", desarmarBomba);

function desarmarBomba () {
    clearTimeout (contagem);
    bomba.src = "images/img2.png";
    bombDefusedAudio.volume = 0.9;
    bombDefusedAudio.play();
    document.querySelector("h2").innerHTML = "THE BOM HAS BEEN DEFUSED";
}

function detonarBomba () {
    bomba.src = "images/explosao.png";
    bombExplosionAudio.volume = 0.9;
    bombExplosionAudio.play();
    bomba.removeEventListener("click", desarmarBomba);
}