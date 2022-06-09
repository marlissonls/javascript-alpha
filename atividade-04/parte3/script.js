
function minMax() {
    const valor = parseFloat(document.getElementById("valor").value);

    if (isNaN(valor)) {
      alert('Valor inválido!');
      return false;
    }

    const floorValue = Math.floor(valor);
    const ceilValue  = Math.ceil(valor);

    document.getElementById("resultado").innerHTML = 'Menor valor: ' + floorValue + '<br>Maior valor: ' + ceilValue;
} 
