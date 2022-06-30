let matrix = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
]
const el = document.querySelectorAll('div');
const res = document.querySelectorAll('p');
let count = 1;
let winner = false;

function gaming(l, c, id) {
    if (count % 2 === 0) { //vez do jogador 1
        if (matrix[l][c] == "") { //verifica se a posição está vazia
            matrix[l][c] = "O"; //se estiver vazia, coloca O
            count++; //passa a vez para o jogador 2
            el[el[id].dataset.id].innerHTML = '<img src="./assets/images/circle.png"/>'
        }
    }
    else {
        if (matrix[l][c] == "") { //verifica se a posição está vazia
            matrix[l][c] = "X"; //se estiver vazia, coloca X
            count++; //passa a vez para o jogador 1
            el[el[id].dataset.id].innerHTML = '<img src="./assets/images/x.png"/>'
        }
    }
    if (count > 5) {
        for (i = 0; i < 3; i++) {
            if (matrix[i][0] === "O" && matrix[i][1] === "O" && matrix[i][2] === "O") {
                document.querySelectorAll('[data-id='+res[0].dataset.id+']')[0].innerHTML = "Vencedor: O";
                matrix = [
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                ]
                winner=true;
            } else if (matrix[i][0] === "X" && matrix[i][1] === "X" && matrix[i][2] === "X") {
                document.querySelectorAll('[data-id='+res[0].dataset.id+']')[0].innerHTML = "Vencedor: X";
                matrix = [
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                ]
                winner=true;
            } else if (matrix[0][i] === "O" && matrix[1][i] === "O" && matrix[2][i] === "O") {
                document.querySelectorAll('[data-id='+res[0].dataset.id+']')[0].innerHTML = "Vencedor: O";
                matrix = [
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                ]
                winner=true;
            } else if (matrix[0][i] === "X" && matrix[1][i] === "X" && matrix[2][i] === "X") {
                document.querySelectorAll('[data-id='+res[0].dataset.id+']')[0].innerHTML = "Vencedor: X";
                matrix = [
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                ]
                winner=true;
            } else if (matrix[0][0] === "O" && matrix[1][1] === "O" && matrix[2][2] === "O" || matrix[0][2] === "O" && matrix[1][1] === "O" && matrix[2][0] === "O") { //vitória em diagonal do círculo
                document.querySelectorAll('[data-id='+res[0].dataset.id+']')[0].innerHTML = "Vencedor: O";
                matrix = [
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                ]
                winner=1;
            } else if (matrix[0][0] === "X" && matrix[1][1] === "X" && matrix[2][2] === "X" || matrix[0][2] === "X" && matrix[1][1] === "X" && matrix[2][0] === "X") { //vitória em diagonal do x
                document.querySelectorAll('[data-id='+res[0].dataset.id+']')[0].innerHTML = "Vencedor: X";
                matrix = [
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                    ["stop!", "stop!", "stop!"],
                ]
                winner=true;
            } else if (count===10 && winner===false){
                document.querySelectorAll('[data-id='+res[0].dataset.id+']')[0].innerHTML = "Empate";
            }
        }
    }
}

function restart() { //reiniciar o jogo
    matrix = [ //iniciar a matriz
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
    count = 1; 
    winner = false;
    document.querySelectorAll('[data-id='+res[0].dataset.id+']')[0].innerHTML = "";
    for (i = 0; i < 9; i++){
        el[el[i].dataset.id].innerHTML = "";
    }
}