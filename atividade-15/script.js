const exchangeCoinInput = document.querySelector('#coin');
const startDateInput = document.querySelector('#start-date');
const endDateInput = document.querySelector('#end-date');
const btnCreateExchangeTable = document.querySelector('#btn');
let periodExchangeTable = document.querySelector('#period-exchange-table');
let currentExchangeTable = document.querySelector('#current-exchange-table');

function onLoadingDataChangeCursor(isloading) {
    if (isloading) {
        document.querySelector('body').style.cursor = 'wait';
    } else {
        document.querySelector('body').style.cursor = 'default';
    }
}

function createTableTitleRow(table) {
    document.querySelectorAll('h3')[0].hidden = false;
    document.querySelectorAll('h3')[1].hidden = false;

    let titleRow = table.insertRow(0);
            
    let titleDateAndHour = titleRow.insertCell(0).innerHTML = `Data e hora`;
    let titleMinValue = titleRow.insertCell(1).innerHTML = `Mínimo`;
    let titleMaxValue = titleRow.insertCell(2).innerHTML = `Máximo`;
    let titleClosingValueForSale = titleRow.insertCell(3).innerHTML = `Valor Venda`;
    let titleClosingValueForPurchase = titleRow.insertCell(4).innerHTML = `Valor Compra`;
}

function selectQuoteDataExchange(data) {
    let qData;

    switch (exchangeCoinInput.value) {
        case 'USD':
            qData = data.USDBRL;
            break;
        case 'EUR':
            qData = data.EURBRL;
            break;
        case 'BTC':
            qData = data.BTCBRL;
            break;
        case 'CAD':
            qData = data.CADBRL;
            break;
        case 'AUD':
            qData = data.AUDBRL;
            break;
    }

    return qData;
}

function createCurrentExchangeTableBody(data, table) {
    let quoteData = selectQuoteDataExchange(data);

    let bodyRow = table.insertRow(1);

    let dateAndHour = bodyRow.insertCell(0).innerHTML = `${quoteData.create_date.substring(0,10)} às ${quoteData.create_date.substring(11,19)}`;
    let minValue = bodyRow.insertCell(1).innerHTML = `R$${quoteData.low}`;
    let maxValue = bodyRow.insertCell(2).innerHTML = `R$${quoteData.high}`;
    let closingValueForSale = bodyRow.insertCell(3).innerHTML = `R$${quoteData.ask}`;
    let closingValueForPurchase = bodyRow.insertCell(4).innerHTML = `R$${quoteData.bid}`;
}

function createPeriodExchangeTableBody(data, table) {
    let bodyRow = table.insertRow(1);

    let dateAndHour = bodyRow.insertCell(0).innerHTML = `${data[0].create_date.substring(0,10)} às ${data[0].create_date.substring(11,19)}`;
    let minValue = bodyRow.insertCell(1).innerHTML = `R$${data[0].low}`;
    let maxValue = bodyRow.insertCell(2).innerHTML = `R$${data[0].high}`;
    let closingValueForSale = bodyRow.insertCell(3).innerHTML = `R$${data[0].ask}`;
    let closingValueForPurchase = bodyRow.insertCell(4).innerHTML = `R$${data[0].bid}`;
}

function convertStandardDateToAPIFormatDate(standardDate) {
    let ApiFormatDate;

    if (standardDate.getMonth()+1 >= 10 && standardDate.getDate() >= 10) {
        ApiFormatDate = `${standardDate.getFullYear()}${standardDate.getMonth()+1}${standardDate.getDate()}`;
    }
    if (standardDate.getMonth()+1 < 10 && standardDate.getDate() < 10) {
        ApiFormatDate = `${standardDate.getFullYear()}0${standardDate.getMonth()+1}0${standardDate.getDate()}`;
    }
    if (standardDate.getMonth()+1 < 10 && standardDate.getDate() >= 10) {
        ApiFormatDate = `${standardDate.getFullYear()}0${standardDate.getMonth()+1}${standardDate.getDate()}`;
    }
    if (standardDate.getMonth()+1 >= 10 && standardDate.getDate() < 10) {
        ApiFormatDate = `${standardDate.getFullYear()}${standardDate.getMonth()+1}0${standardDate.getDate()}`;
    }

    return ApiFormatDate;
}

function currentExchange() {
    currentExchangeTable.innerHTML = '';

    const exchangeCoin = exchangeCoinInput.value;

    const url = `https://economia.awesomeapi.com.br/last/${exchangeCoin}-BRL`

    onLoadingDataChangeCursor(true);

    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        createTableTitleRow(currentExchangeTable);
        createCurrentExchangeTableBody(data, currentExchangeTable)
    })
    .catch((error) => {
        console.error(error);
    })
}

function createExchangeTableGeneralFunction() {
    periodExchangeTable.innerHTML = '';
    const exchangeCoin = exchangeCoinInput.value;
    const startDate = new Date(startDateInput.value+' ');
    const endDate = new Date(endDateInput.value+' ');
    let someDateOnPeriod = new Date(startDate);

    const startDateAPIFormat = convertStandardDateToAPIFormatDate(startDate);

    createTableTitleRow(periodExchangeTable);

    for (let addDays = 0; someDateOnPeriod < endDate; addDays++ ) {
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
            createPeriodExchangeTableBody(data, periodExchangeTable)
            onLoadingDataChangeCursor(false);
        })
        .catch((error) => {
            onLoadingDataChangeCursor(false);
            console.error(error)
        })
    }
}

btnCreateExchangeTable.addEventListener('click', currentExchange);
btnCreateExchangeTable.addEventListener('click', createExchangeTableGeneralFunction);