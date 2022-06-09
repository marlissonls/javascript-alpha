function calcularImc() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value)/100;
    const resultado = document.getElementById("resultado");

    let classificacaoIMC='';

    if (isNaN(peso)) {
      alert('Valor inválido para o seu peso.');
      return false;
    }

    if (isNaN(altura)) {
      alert('Valor inválido para a sua altura.');
      return false;
    }

    if (peso <= 0){
      alert('O valor do peso informado é inválido.');
      return false;
    }
    if (altura <= 0){
      alert('O valor da altura informada é inválida.');
      return false;
    }

    const imc = peso / (altura*altura);
    
    if (imc < 18.5){
      classificacaoIMC = 'abaixo do peso';
    } else 
      if (imc < 24.9){
        classificacaoIMC = 'peso normal';
      } else 
        if (imc < 29.9){
          classificacaoIMC = 'sobrepeso';
        } else {
          classificacaoIMC = 'obesidade';
        }
    
    resultado.innerHTML = 'Seu IMC é ' + imc.toFixed(2) + '<br>Classificação: ' + classificacaoIMC +'.';
}

function limpar() {
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}