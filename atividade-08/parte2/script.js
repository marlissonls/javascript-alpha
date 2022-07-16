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
const warn = document.querySelector('#warn');

function checkValues() {
    try {
        if (nome.value.length < 5) {
            throw `Field “name” is invalid!`;
        };
        if (isNaN(parseFloat(weight.value.replace(',','.')))) {
            throw `Field “weight” is invalid!`;
        };
        if (isNaN(height.value) || parseFloat(height.value)%1 ==! 0) {
            throw `Field “height” is invalid!`;
        };
        if (gender.value === '') {
            throw `Field “gender” is invalid!`;
        };
        if (day.value === '' || month.value === '' || year.value === '') {
            throw 'Field “birthDate” is invalid!';
        };
        if (birthDate >= currentDate) {
           throw 'Field “birthDate” is invalid!';
        }
        if (parseInt(year.value) >= currentDate.getFullYear()-130) {
            switch (parseInt(month.value)-1) {
                case 0:
                case 2:
                case 4:
                case 6:
                case 7:
                case 9:
                case 11:
                    if (!(parseInt(day.value) > 0 && parseInt(day.value) < 32)) {
                        throw 'Field “birthDate” is invalid!';
                    };
                    break;
                case 3:
                case 5:
                case 8:
                case 10:
                    if (!(parseInt(day.value) > 0 && parseInt(day.value) < 31)) {
                        throw 'Field “birthDate” is invalid!';
                    };
                    break;
                case 1:
                    if (parseInt(year.value)%4 === 0) {
                        if (!(parseInt(day.value) > 0 && parseInt(day.value) < 30)) {
                            throw 'Field “birthDate” is invalid!';
                        };
                    } else {
                        if (!(parseInt(day.value) > 0 && parseInt(day.value) < 29)) {
                            throw 'Field “birthDate” is invalid!';
                        };
                    };
                    break;
                default:
                    throw 'Field “birthDate” is invalid!';
            };
        } else {
            throw 'Field “birthDate” is invalid!'
        };
    } catch (error) {
        warn.innerHTML = error;
        return false;
    }
    return true;
}

function setObject() {
    user = {};

    birthDate.setDate(parseInt(day.value));
    birthDate.setMonth(parseInt(month.value)-1);
    birthDate.setFullYear(parseInt(year.value));

    if (checkValues()) {
        user = {
            name: nome.value,
            birthDate: birthDate,
            weight: parseFloat(weight.value.replace(',','.')),
            height: parseInt(height.value),
            gender: gender.value
        }
        return warn.innerHTML = '';
    }
}

sendBtn.addEventListener('click', setObject);