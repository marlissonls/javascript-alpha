const message = document.querySelector("#message-field");
const conversation = document.querySelector("#conversation-field");
const sendButton = document.querySelector("#send-message");
const cleanButton = document.querySelector("#clean-fields");

sendButton.addEventListener('click', sendMessageButton);
message.addEventListener('keyup', spaceEraser);
cleanButton.addEventListener('click', cleanMessageFields);
message.addEventListener('keyup', function (e) {
    if (e.keyCode === 0x0D) {
        sendMessageButton ();
    }
});

function sendMessageButton () {
    if (message.value != '') {
        conversation.value += message.value + '\n';
        conversation.scrollTop += 1000000;
        message.value = null;
    }
}

function cleanMessageFields () {
    conversation.value = null;
    message.value = null;
}

function spaceEraser () {
    if (message.value.substring(0, 1) == ' ') {
        message.value = message.value.substring(1, message.value.length);
        spaceEraser ();
    }
    
    if (message.value.substring(message.value.length-2, message.value.length) == '  ') {
        message.value = message.value.substring(0, message.value.length-1);
        spaceEraser ();
    }
}