// 51,7% Mulheres
// 16,7% idosos
// 1-86 -> Mulher idosa  (16,7% de 517)
// 87-517 -> mulher não Idosa
// 518-599 -> homem idoso  (16,7% de 483)
// 600-1000 -> homem não Idoso

function sortearIbge() {
    const minimo = 1;
    const maximo = 1000;
    const sorteado = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    let pessoa

    if (sorteado <= 86) {
        pessoa = "Mulher Idosa.";
    }
    else {
        if (sorteado <= 517) {
            pessoa = "Mulher Não Idosa.";
        }
        else {
            if (sorteado <= 599) {
                pessoa = "Homem Idoso.";
            }
            else {
                pessoa = "Homem Não Idoso.";
            }
        }
    }

    document.getElementById("resultado").innerHTML = "Pessoa sorteada: " + pessoa + "<br>Número da pessoa sorteada: " + sorteado + ".";
}

function limpar() {
    document.querySelector("#resultado").textContent = ""
}