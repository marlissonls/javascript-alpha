function limpar () {
    document.getElementById("resultado").innerHTML = "";
}

function exibirInfo() {
    const data = new Date(document.getElementById("data").value+" ");
    const day = data.getDate();
    const wDay = data.getDay();
    const month = data.getMonth()+1;
    const year = data.getFullYear();
    const agora = Date.now(); //Data em milisegundos desde 01 de janeiro de 1970.
    const umDeJaneiro2022 = new Date("2022-01-01 "); //Sat Jan 01 2022 00:00:00 GMT-0300 (Brasilia Standard Time)
    const miliSegs = Math.abs(data - umDeJaneiro2022); // A variável 'miliSegs' recebe qualquer data de 2022 em milisegundos das 0 hora de 01 de janeiro até às 0 hora do dia selecionado.
    //A varíavel miliSegs funcionou corretamente, para verificar selecione a data 01/01/2022 e veja que ele retorna 0 (zero) milisegundos.
    
    const miliSecs = Math.abs(agora - umDeJaneiro2022); // A variável 'miliSecs' recebe a data EM TEMPO REAL em milisegundos desde o início do ano. Esta variável não foi utilizada

    let weekDay = "";
    switch (wDay) {
        case 0:
            weekDay = "Domingo";
            break;
        case 1:
            weekDay = "Segunda-feira";
            break;
        case 2:
            weekDay = "Terça-feira";
            break;
        case 3:
            weekDay = "Quarta-feira";
            break;
        case 4:
            weekDay = "Quita-feira";
            break;
        case 5:
            weekDay = "Sexta-feira";
            break;
        case 6:
            weekDay = "Sábado";
            break;
    }

    let monthLiteral = "";
    switch (month) {
        case 1:
            monthLiteral = "Janeiro";
            break;
        case 2:
            monthLiteral = "Fevereiro";
            break;
        case 3:
            monthLiteral = "Março";
            break;
        case 4:
            monthLiteral = "Abril";
            break;
        case 5:
            monthLiteral = "Maio";
            break;
        case 6:
            monthLiteral = "Junho";
            break;
        case 7:
            monthLiteral = "Julho";
            break;
        case 8:
            monthLiteral = "Agosto";
            break;
        case 9:
            monthLiteral = "Setembro";
            break;
        case 10:
            monthLiteral = "Outubro";
            break;
        case 11:
            monthLiteral = "Novembro";
            break;
        case 12:
            monthLiteral = "Dezembro";
            break;
    }
    document.getElementById("resultado").innerHTML = "Dia do mês: " + day + "<br>Mês do ano: " + month + "<br>Ano atual: " + year + "<br>Dia da semana: " + weekDay + "<br>Mês Literal: " + monthLiteral + "<br>Milisecs.: " + miliSegs;
}

//const miliSecsHoje = Math.abs((new Date.now()) - (new Date()));
//alert(miliSecsHoje);
//const miliSegsDoDia = Math.abs(agora - data); // Math.abs((agora - data)/(1000*60*60)); Devolve a hora em tempo real do dia selecionado.