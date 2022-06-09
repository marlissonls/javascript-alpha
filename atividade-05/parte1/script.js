function swithCase0() {
    const numero = parseInt((document.getElementById("numero").value),10);

    if (numero >= 10 || numero <= 0) {
        alert("Insira um número interio com valor de 0 a 10!");
    }
    else {
        switch (numero) {
            case 0:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
            case 1:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
            case 2:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
            case 3:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
            case 4:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
            case 5:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
            case 6:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
            case 7:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
            case 8:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
            case 9:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
            case 10:
                document.getElementById("resultado").innerHTML = "Número digitado: " + numero;
                break;
        }
    }
}