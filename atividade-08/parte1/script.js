const nome = document.querySelector('#name');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const gender = document.querySelector('#gender');
const sendBtn = document.querySelector('#send-btn');
let user;
const currentDate = new Date();
const birthDate = new Date();

function setObject() {
    user = {};
    birthDate.setDate(parseInt(day.value));
    birthDate.setMonth((parseInt(month.value)-1));
    birthDate.setFullYear(parseInt(year.value));
    
    if (birthDate >= currentDate) {
        alert('Data de nascimento superior à data atual');
        return
    }

    if (year.value >= currentDate.getFullYear()-130) {
        if ((parseInt(month.value)-1) >= 0 && (parseInt(month.value)-1) < 12) {
            switch (parseInt(month.value)-1) {
                case 0:
                case 2:
                case 4:
                case 6:
                case 7:
                case 9:
                case 11:
                    if (!(parseInt(day.value) > 0 && parseInt(day.value) < 32)) {
                        alert('Dia de nascimento inválido');
                    };
                    break;
                case 3:
                case 5:
                case 8:
                case 10:
                    if (!(parseInt(day.value) > 0 && parseInt(day.value) < 31)) {
                        alert('Dia de nascimento inválido');
                    };
                    break;
                case 1:
                    if (parseInt(year.value)%4 === 0) {
                        if (!(parseInt(day.value) > 0 && parseInt(day.value) < 30)) {
                            alert('Dia de nascimento inválido');
                        }
                    } else {
                        if (!(parseInt(day.value) > 0 && parseInt(day.value) < 29)) {
                            alert('Dia de nascimento inválido');
                        };
                    };
            };
        } else {
            alert('Mês de nascimento inválido');
        };
    } else {
        alert('Ano de nascimento inválido');
    };

    user = {
        name: nome.value,
        birthDate: birthDate,
        weight: parseFloat(weight.value.replace(',','.')),
        height: parseInt(height.value),
        gender: gender.value
    }
    return;
}

sendBtn.addEventListener('click', setObject);