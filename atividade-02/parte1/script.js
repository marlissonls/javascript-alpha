function compareNumbers() {
    var firstNumber = document.getElementById("first-number").value;
    var secondNumber = document.getElementById("second-number").value;

    if (firstNumber > secondNumber)
        document.getElementById("result").innerHTML = "O primeiro número é MAIOR que o segundo número";
    else
        if (firstNumber == secondNumber)
            document.getElementById("result").innerHTML = "O primeiro número é IGUAL ao segundo número";
        else
            document.getElementById("result").innerHTML = "O primeiro número é MENOR que o segundo número";
}
