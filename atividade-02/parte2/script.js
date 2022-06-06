function compareStringLength () {
    var firstString = document.getElementById("first-string").value;
    var secondString = document.getElementById("second-string").value;

    if (firstString.length > secondString.length)
        document.getElementById("result").innerHTML = "O primeiro texto é <strong>maior</strong> que o segundo texto!";
    else
        if (firstString.length == secondString.length)
            document.getElementById("result").innerHTML = "O primeiro texto tem o <strong>mesmo tamanho</strong> que o segundo texto!";
        else
            document.getElementById("result").innerHTML = "O primeiro texto é <strong>menor</strong> que o segundo texto!";
}