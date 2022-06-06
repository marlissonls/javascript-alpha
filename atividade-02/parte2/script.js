function compareStringLength () {
    var firstString = document.getElementById("first-string").value;
    var secondString = document.getElementById("second-string").value;

    if (firstString.length > secondString.length)
        document.getElementById("result").innerHTML = "O primeiro texto é MAIOR que o segundo texto!";
    else
        if (firstString.length == secondString.length)
            document.getElementById("result").innerHTML = "O primeiro texto tem o MESMO TAMANHO que o segundo texto!";
        else
            document.getElementById("result").innerHTML = "O primeiro texto é MENOR que o segundo texto!";
}