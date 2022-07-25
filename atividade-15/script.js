const exchangeCoinInput = document.querySelector('#coin');
const startDateInput = document.querySelector('#start-date');
const endDateInput = document.querySelector('#end-date');
const btnCreateExchangeTable = document.querySelector('#btn');
let exchangeTable = document.querySelector('#table');

//(new Date('2022-10-21 ')-new Date('2022-04-23 '))/1000/60/60/24
//181
//bdate = new Date('2022-04-23 ')
//bdate.setDate(bdate.getDate()+181)
//2022-10-21

function createRowTitleOnTable() {
    let titleRow = exchangeTable.insertRow(0);
            
    let titleDateAndHour = titleRow.insertCell(0).innerHTML = `Data e hora`;
    let titleMinValue = titleRow.insertCell(1).innerHTML = `Mínimo`;
    let titleMaxValue = titleRow.insertCell(2).innerHTML = `Máximo`;
    let titleClosingValueForSale = titleRow.insertCell(3).innerHTML = `Valor Venda`;
    let titleClosingValueForPurchase = titleRow.insertCell(4).innerHTML = `Valor Compra`;
}

function createBodyExchangeTable(data) {
    let bodyRow = exchangeTable.insertRow(1);

    let dateAndHour = bodyRow.insertCell(0).innerHTML = `${data[0].create_date.substring(0,10)} às ${data[0].create_date.substring(11,19)}`;
    let minValue = bodyRow.insertCell(1).innerHTML = `R$${data[0].low}`;
    let maxValue = bodyRow.insertCell(2).innerHTML = `R$${data[0].high}`;
    let closingValueForSale = bodyRow.insertCell(3).innerHTML = `R$${data[0].ask}`;
    let closingValueForPurchase = bodyRow.insertCell(4).innerHTML = `R$${data[0].bid}`;
}

function convertStandardDateToAPIFormatDate(standardDate) {
    let formattedDate;

    if (standardDate.getMonth()+1 >= 10 && standardDate.getDate() >= 10) {
        formattedDate = `${standardDate.getFullYear()}${standardDate.getMonth()+1}${standardDate.getDate()}`;
    }
    if (standardDate.getMonth()+1 < 10 && standardDate.getDate() < 10) {
        formattedDate = `${standardDate.getFullYear()}0${standardDate.getMonth()+1}0${standardDate.getDate()}`;
    }
    if (standardDate.getMonth()+1 < 10 && standardDate.getDate() >= 10) {
        formattedDate = `${standardDate.getFullYear()}0${standardDate.getMonth()+1}${standardDate.getDate()}`;
    }
    if (standardDate.getMonth()+1 >= 10 && standardDate.getDate() < 10) {
        formattedDate = `${standardDate.getFullYear()}${standardDate.getMonth()+1}0${standardDate.getDate()}`;
    }

    return formattedDate;
}

function createExchangeTableGeneralFunction() {
    exchangeTable.innerHTML = '';
    const exchangeCoin = exchangeCoinInput.value;
    const startDate = new Date(startDateInput.value+' ');
    const endDate = new Date(endDateInput.value+' ');
    let someDateOnPeriod = new Date(startDate);

    const startDateAPIFormat = convertStandardDateToAPIFormatDate(startDate);

    createRowTitleOnTable();

    for ( addDays = 0; someDateOnPeriod < endDate; addDays++ ) {
        someDateOnPeriod = new Date(startDate);

        someDateOnPeriod.setDate(startDate.getDate()+addDays);

        if ( someDateOnPeriod.getDay() === 0 || someDateOnPeriod.getDay() === 6 ) { // FOR command skips when the date on period is saturday of sunday.
            continue;
        }

        const someDateAPIFormat = convertStandardDateToAPIFormatDate(someDateOnPeriod);

        const url = `https://economia.awesomeapi.com.br/${exchangeCoin}-BRL/${1}?start_date=${startDateAPIFormat}&end_date=${someDateAPIFormat}`;

        fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            createBodyExchangeTable(data)
        })
        .catch((error) => {
            console.error(error)
        })
    }
}

btnCreateExchangeTable.addEventListener('click', createExchangeTableGeneralFunction);