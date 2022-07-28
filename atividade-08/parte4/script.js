const jsonInput = document.querySelector("#jsonInput");
const checkButton = document.querySelector("#checkButton");
const warn = document.querySelector("#message");

function checkJSON() {
    try {
        if (!JSON.parse(jsonInput.value)) {
            throw '';
        } else {
            warn.textContent = `Parsable JSON string!`;
            console.log(JSON.parse(jsonInput.value))
        }
    } catch (err) {
        err = 'The text is not string JSON!';
        warn.textContent = err;
    }
    return null;
}

checkButton.addEventListener("click", checkJSON);