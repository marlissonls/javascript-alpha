
function showItem() {
    const itemSelected = document.querySelector("#item").value;
    let imagem = document.createElement('img');
    let title = document.createElement("p");
    let cost = document.createElement("p");
    
    document.getElementById("resultado").innerHTML = "";

    switch (itemSelected) {
        case "moletom":
            imagem.src = "images/hoody.png";
            title.textContent = "Moletom Krav Magá"
            cost.textContent = "R$ 239,99"
            break;
        case "relogio":
            imagem.src = "images/watch.jpg";
            title.textContent = "Relógio Esportes"
            cost.textContent = "R$ 339,99"
            break;
        case "faca":
            imagem.src = "images/knife.jpg";
            title.textContent = "Faca tática"
            cost.textContent = "R$ 129,99"
            break;
        case "chaveiro":
            imagem.src = "images/keychain.png";
            title.textContent = "Chaveiro AK-47"
            cost.textContent = "R$ 39,99"
            break;
        case "mochila":
            imagem.src = "images/tacticalbag.png";
            title.textContent = "Mochila Esportes"
            cost.textContent = "R$ 239,99"
            break;
        default:
            document.getElementById("resultado").textContent = "Selecione um item e clique no botão exibir";
            return false;
    }
    document.getElementById("resultado").appendChild(imagem);
    document.getElementById("resultado").appendChild(title);
    document.getElementById("resultado").appendChild(cost);
}