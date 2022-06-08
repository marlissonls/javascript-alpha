
function sortearN() {
    const minimo = parseFloat(document.getElementById('minimo').value);
    const maximo = parseFloat(document.getElementById('maximo').value);

    if (isNaN(minimo)) {
        alert('Valor inválido para o mínimo.');
        return false;
    }

    if (isNaN(maximo)) {
        alert('Valor inválido para o máximo.');
        return false;
    }

    if (minimo > maximo){
        alert('Valor mínimo maior que o valor máximo.');
        return false;    
    }

    const sorteado = Math.floor(Math.random() * (maximo - minimo) + minimo);
    document.getElementById("resultado").innerHTML = 'Valor sorteado: '+ sorteado +'.';
}