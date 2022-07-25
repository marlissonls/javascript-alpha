const coin = document.querySelector('#coin');
const startDate = document.querySelector('#start-date');
const endDate = document.querySelector('#end-date');
const btn = document.querySelector('#btn');
const table = document.querySelector('#table');

function getInputs() {
    const moeda = coin.value;
    const dataInicial = startDate.value.replaceAll('-','');
    const dataFinal = endDate.value.replaceAll('-','');
    
    const url = `https://economia.awesomeapi.com.br/${moeda}-BRL/${10}?start_date=${dataInicial}&end_date=${dataFinal}`;
    
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let titleHow = table.insertRow(0);
        
        let dateHour = titleHow.insertCell(0);
        let minValue = titleHow.insertCell(1);
        let maxValue = titleHow.insertCell(2);
        let dateClosed = titleHow.insertCell(3);

        dateHour.innerHTML = `Data e hora`;
        minValue.innerHTML = `Mínimo`;
        maxValue.innerHTML = `Máximo`;
        dateClosed.innerHTML = `Data de Fechamento`;

        for ( i = data.length-1; i >= 0 ; i-- ){
            let linha = table.insertRow(1);

            let celula01 = linha.insertCell(0);
            let celula02 = linha.insertCell(1);
            let celula03 = linha.insertCell(2);
            let celula04 = linha.insertCell(3);
            
            celula01.innerHTML = new Date(Number(data[i].timestamp)*1000);
            celula02.innerHTML = data[i].low;
            celula03.innerHTML = data[i].high;
            celula04.innerHTML = data[i].bid;
        }

        console.log(data)
    })
    .catch((error) => {
        console.error(error)
    })
}

btn.addEventListener('click', getInputs);