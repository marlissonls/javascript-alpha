const nome = document.querySelector('#name');
const day = document.querySelector('#day');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const weight = document.querySelector('#weight');
const height = document.querySelector('#height');
const gender = document.querySelector('#gender');
const sendBtn = document.querySelector('#send-btn');

let user;
let currentDate;
let birthDate;
const warn = document.querySelector('#warn');

const profile = document.querySelector('#profile');
const ObjName = document.querySelector('#ObjName');
const ObjWeight = document.querySelector('#ObjWeight');
const ObjHeight = document.querySelector('#ObjHeight');
const ObjGender = document.querySelector('#ObjGender');
const ObjBdate = document.querySelector('#ObjBdate');
const ObjString = document.querySelector('#ObjString');

profile.hidden = true;

function checkValues() {
    try {
        if (nome.value.length < 5) {
            throw `Field “name” is invalid!`;
        };
        if (isNaN(parseFloat(weight.value.replace(',','.')))) {
            throw `Field “weight” is invalid!`;
        };
        if (!Number.isInteger(parseFloat(height.value.replace(',','.')))) {
            throw `Field “height” is invalid!`;
        };
        if (gender.value === '') {
            throw `Field “gender” is invalid!`;
        };
        if (isNaN(day.value) || isNaN(month.value) || isNaN(year.value)) {
            throw 'Field “birthDate” is invalid!';
        }
        if (!Number.isInteger(parseFloat(day.value.replace(',','.'))) || !Number.isInteger(parseFloat(month.value.replace(',','.'))) || !Number.isInteger(parseFloat(year.value.replace(',','.')))) {
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
            throw 'Field “birthDate” is invalid!';
        };
    } catch (error) {
        warn.innerHTML = error;
        return false;
    }
    return true;
}

function setObject() {
    currentDate = new Date();
    birthDate = new Date();

    user = {};

    birthDate.setFullYear(parseInt(year.value));
    birthDate.setMonth(parseInt(month.value)-1);
    birthDate.setDate(parseInt(day.value));

    profile.hidden = true;
    
    if (checkValues()) {
        user = {
            name: nome.value,
            birthDate: birthDate,
            weight: parseFloat(weight.value.replace(',','.')),
            height: parseInt(height.value),
            gender: gender.value
        }

        profile.hidden = false;
        ObjName.textContent = user.name;
        ObjWeight.textContent = user.weight + ' kg';
        ObjHeight.textContent = user.height + ' cm';
        ObjGender.textContent = user.gender;
        ObjBdate.textContent = `${user.birthDate.getFullYear()}-${user.birthDate.getMonth()+1}-${user.birthDate.getDate()}`;
        ObjString.textContent = JSON.stringify(user);
        console.log(user);

        return warn.innerHTML = '';
    }
}

sendBtn.addEventListener('click', setObject);