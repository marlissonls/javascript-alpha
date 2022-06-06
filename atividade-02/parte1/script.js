function compareNumbers() {
    var firstNumber = document.getElementById("first-number").value;
    var secondNumber = document.getElementById("second-number").value;

    if (firstNumber > secondNumber)
        document.getElementById("result").innerHTML = "O primeiro número é maior que o segundo número";
    else
        if (firstNumber == secondNumber)
            document.getElementById("result").innerHTML = "O primeiro número é igual ao segundo número";
        else
            document.getElementById("result").innerHTML = "O primeiro número é menor que o segundo número";
}
