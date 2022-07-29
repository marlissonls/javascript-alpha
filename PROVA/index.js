import ASCII from "./ASCII.js";

const fullNameInput = document.querySelector("#fullname")
const btnForm = document.querySelector("#btn-form")
const result = document.querySelector("#result")

function getFullName() {
    const Nome = new ASCII(fullNameInput.value, null)
    Nome.getCode
    result.innerHTML = Nome.getArray
}

btnForm.addEventListener('click', getFullName)