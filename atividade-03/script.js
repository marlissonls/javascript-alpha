function operador() {
    var opSelected = document.getElementById("operador").value;
    return opSelected;
}

function resultado() {
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    
    if (operando1 == NaN) {
        alert("Insira o valor dos operandos!");
    }

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

/*
function operador() {
    var opSelected = document.getElementById("operador").value;
    return opSelected;
}

function resultado() {
    var operando1 = parseFloat(document.getElementById("operando1").value);
    var operando2 = parseFloat(document.getElementById("operando2").value);
    
    if (operando1 == NaN) {
        alert("Insira o valor dos operandos!");
    }

    var resultado

    if (operador() != "") {
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
                break;
                
            case "/":
                resultado = operando1 / operando2;
                document.getElementById("resultado").innerHTML = operando1 + " / " + operando2 + " = " + resultado;
                break;
        }
    }
    else{
        alert("Selecione o tipo da oparação!");
    }
}
*/