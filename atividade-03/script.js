function operador() {
    var opSelected = document.getElementById("operador").value;
    return opSelected;
}

function limpar() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("operando1").value = "";
    document.getElementById("operando2").value = "";
    document.getElementById("operador").value = "";
}

function resultado() {
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    
    if (isNaN(operando1) == true || isNaN(operando2) == true) {
        alert("Insira o valor dos operandos!");
    }
    else {
        var resultado

        switch (operador()) {
            case "+":
                resultado = operando1 + operando2;
                document.getElementById("resultado").innerHTML = operando1 + " + " + operando2 + " = " + resultado;
                break;

            case "-":
                resultado = operando1 - operando2;
                document.getElementById("resultado").innerHTML = operando1 + " - " + operando2 + " = " + resultado;
                break;

            case "*":
                resultado = operando1 * operando2;
                document.getElementById("resultado").innerHTML = operando1 + " x " + operando2 + " = " + resultado;
                //document.getElementById("resultado").textContent = operando1 + " x " + operando2 + " = " + resultado;
                break;
                
            case "/":
                resultado = operando1 / operando2;
                document.getElementById("resultado").innerHTML = operando1 + " / " + operando2 + " = " + resultado;
                break;
            
            case "%":
                resultado = operando1 % operando2;
                document.getElementById("resultado").innerHTML = operando1 + " % " + operando2 + " = " + resultado;
                break;
            
            case "":
                alert("Selecione o tipo da oparação!");
                break;
        }
    }
}