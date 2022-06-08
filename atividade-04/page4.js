
// 51,7% Mulheres
// 16,7% idosos
// 1-86 -> Mulher idosa  (16,7% de 517)
// 87-517 -> mulher não Idosa
// 518-599 -> homem idoso  (16,7% de 483)
// 600-1000 -> homem não Idoso

document.getElementById('btn-check').addEventListener('click', Verificar);
function Verificar() {
  const result= document.querySelector("#p-pessoa");
  const p =  parseInt(SortearInt(1, 1000),10);
 
  console.log(p);
  if (p <= 86) {
    result.textContent='Pessoa: Mulher Idosa.';
  } else if (p <= 517) {
    result.textContent='Pessoa: Mulher não Idosa.';
  } else if (p <= 599) {
    result.textContent='Pessoa: Homem Idoso.';
  } else {
    result.textContent='Pessoa: Homem não Idoso.';
  } 
} 



function SortearInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min ;
}