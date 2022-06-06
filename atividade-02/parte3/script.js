document.querySelector("button").addEventListener("click", calcular);

function diasRestantes() {
    let date1 = new Date(document.getElementById("birthday").value+" ");
    let currentdate = new Date();

    let difference = Math.abs(currentdate - date1);
    const days = 1000 * 60 * 60 * 24 ;
    let age = difference / days ;

    let radio = document.getElementsByName("gender");
    let gender = "";
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            gender = radio[i].value;
        }
    }

    if (gender === "Masculino" && date1 != "Invalid Date") {
        deathday = parseInt(26682 - age);
        document.getElementById("result").innerHTML = "Falta " + deathday + " dias para sua morte!";
    }
    else if (gender === "Feminino" && date1 != "Invalid Date") {
        deathday = parseInt(29237 - age);
        document.getElementById("result").innerHTML = "Falta " + deathday + " dias para sua morte!";
    }
    else {
        document.getElementById("result").innerHTML = "Coloque sua data de nascimento e sexo!";
    }
}