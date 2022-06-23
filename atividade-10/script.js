const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDescription = document.querySelector("#product-description");
const addProductButton = document.querySelector("#product-add");
const warn = document.querySelector("#warn");
const listProductButton = document.querySelector("#product-list-btn");
const listProductTable = document.querySelector("#product-list");
const editProductButton = document.querySelector("#product-edit");

const mostrarModal = document.querySelector("#mostrar");
const fecharModal = document.querySelector("#fechar");
const mostrarId = document.querySelector("#Id");
const mostrarNome = document.querySelector("#nome");
const mostrarPreco = document.querySelector("#preco");
const mostrarDescricao = document.querySelector("#descricao");
const mostrarData = document.querySelector("#inclusao");

let Id = 0;
let productsArray = [];

addProductButton.addEventListener('click', addProduct);
listProductButton.addEventListener('click', listProducts);

function addProduct () {
    Id += 1;
    const creationDate = Date.now();
    
    const product = {
        id: Id,
        name: productName.value,
        price: productPrice.value,
        description: productDescription.value,
        inclusionDate: creationDate
    };

    productsArray.push(product);

    productName.value = '';
    productPrice.value = '';
    productDescription.value = '';

    warn.innerHTML = `O produto ${product.name} foi adicionado com sucesso!`;
}

function listProducts () {
    listProductTable.innerHTML = '';

    const titleRow = listProductTable.insertRow(0);
        
    titleRow.insertCell(0).innerHTML = "<strong>Produto</strong>";
    titleRow.insertCell(1).innerHTML = "<strong>Preço</strong>";
    titleRow.insertCell(2).innerHTML = "<strong>Editar</strong>";
    titleRow.insertCell(3).innerHTML = "<strong>Excluir</strong>";

    let i = 0;
    while (i < productsArray.length) {
        let linha = listProductTable.insertRow(i+1);

        let celula01 = linha.insertCell(0);
        let celula02 = linha.insertCell(1);
        let celula03 = linha.insertCell(2);
        let celula04 = linha.insertCell(3);

        celula01.innerHTML = `#${productsArray[i].id} ${productsArray[i].name}`;
        celula02.innerHTML = `R$ ${productsArray[i].price}`;
        celula03.innerHTML = "<img src='images/edit-2-64.ico'>";
        celula04.innerHTML = "<img src='images/delete-64.ico'>";

        let id = productsArray[i].id
        celula01.addEventListener("click", () => { mostrarProduto (id) });
        celula03.addEventListener("click", () => { editarProduto (id) });
        celula04.addEventListener("click", () => { excluirProduto (id) });

        i += 1;
    }
}

function mostrarProduto (id) {
    mostrarModal.hidden = false;
    fecharModal.addEventListener('click', fechar);
    function fechar () {
        mostrarModal.hidden = true;
    };

    let produto = "";

    let i = 0;
    while ( i < productsArray.length ) {
        if( productsArray[i].id == id ) {
            produto = productsArray[i];
            break;
        }
        i += 1;
    }

    let data = new Date(produto.inclusionDate);

    mostrarId.innerHTML = '#'+produto.id;
    mostrarNome.innerHTML = produto.name;
    mostrarPreco.innerHTML = produto.price;
    mostrarDescricao.innerHTML = produto.description;
    mostrarData.innerHTML = `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()} - ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;
}

function editarProduto (id) {
    let produto = "";

    let i = 0;
    while( i < productsArray.length ) {
        if ( productsArray[i].id == id) {
            produto = productsArray[i];
            break;
        }
        i += 1;
    }

    productName.value = produto.name;
    productPrice.value = produto.price;
    productDescription.value = produto.description;

    addProductButton.hidden = true;
    editProductButton.hidden = false;

    editProductButton.addEventListener('click', () => { concluirEditar(id) });
}

function concluirEditar (id) {
    let produto = "";

    let i = 0;
    while( i < productsArray.length ) {
        if ( productsArray[i].id == id) {
            produto = productsArray[i];
            break;
        }
        i += 1;
    }
    
    const creationDate = new Date(produto.inclusionDate);

    produto = {
        id: id,
        name: productName.value,
        price: productPrice.value,
        description: productDescription.value,
        inclusionDate: creationDate
    };

    productsArray[i] = produto;

    warn.innerHTML = `O produto ${produto.name} foi modificado com sucesso!`;

    addProductButton.hidden = false;
    editProductButton.hidden = true;

    listProducts ();

    productName.value = null;
    productPrice.value = null;
    productDescription.value = null;
}

function excluirProduto (id) {
    const newProducstArray = [];

    let i = 0;
    while ( i < productsArray.length ) {
        if( productsArray[i].id != id ) {
            newProducstArray.push(productsArray[i])
        }
        i += 1;
    }

    productsArray = newProducstArray;

    listProducts ();
}



