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

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

let idParaEditar = "";
let Id = 0;
let productsArray = [];

function checkValues () {
    try {
        if (productName.value === '' || productPrice.value === '' || productDescription.value === '') {
            throw `Você deixou campos vazios!`;
        };
        if (isNaN(productPrice.value) || parseFloat(productPrice.value) <= 0) {
            throw 'Insira um preço numérico maior que zero!';
        };
    } catch (error) {
        warn.innerHTML = error;
        return false;
    }
    return true;
}

function addProduct () {
    if (checkValues()) {
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

        productName.value = null;
        productPrice.value = null;
        productDescription.value = null;

        warn.innerHTML = `O produto ${product.name} foi ADICIONADO com sucesso!`;
    }
}

function listProducts () {
    listProductTable.innerHTML = '';

    const titleRow = listProductTable.insertRow(0);
        
    titleRow.insertCell(0).innerHTML = "<strong>Produto</strong>";
    titleRow.insertCell(1).innerHTML = "<strong>Preço</strong>";
    titleRow.insertCell(2).innerHTML = "<strong>Editar</strong>";
    titleRow.insertCell(3).innerHTML = "<strong>Excluir</strong>";

    for (let i = 0 ; i < productsArray.length ; i += 1 ) {
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
    }
}

function mostrarProduto (id) {
    mostrarModal.hidden = false;
    fecharModal.addEventListener('click', fechar);
    function fechar () {
        mostrarModal.hidden = true;
    };

    let produto = "";

    for (let i = 0 ; i < productsArray.length ; i += 1 ) {
        if( productsArray[i].id == id ) {
            produto = productsArray[i];
            break;
        }
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

    
    for (let i = 0 ; i < productsArray.length ; i += 1 ) {
        if ( productsArray[i].id == id) {
            produto = productsArray[i];
            break;
        }
    }

    productName.value = produto.name;
    productPrice.value = produto.price;
    productDescription.value = produto.description;

    addProductButton.hidden = true;
    editProductButton.hidden = false;

    idParaEditar = id;
}

function concluirEditar () {
    if (checkValues()) {
        let produto = "";

        let i;
        for ( i = 0 ; i < productsArray.length ; i += 1 ) {
            if ( productsArray[i].id == idParaEditar) {
                produto = productsArray[i];
                break;
            }
        }
        
        const creationDate = new Date(produto.inclusionDate);

        produto = {
            id: idParaEditar,
            name: productName.value,
            price: productPrice.value,
            description: productDescription.value,
            inclusionDate: creationDate
        };

        productsArray[i] = produto;

        warn.innerHTML = `O produto ${produto.name} foi MODIFICADO com sucesso!`;

        addProductButton.hidden = false;
        editProductButton.hidden = true;

        listProducts ();

        productName.value = null;
        productPrice.value = null;
        productDescription.value = null;
    }
}

function excluirProduto (id) {
    const newProducstArray = [];

    for ( let i = 0 ; i < productsArray.length ; i += 1 ) {
        if( productsArray[i].id != id ) {
            newProducstArray.push(productsArray[i])
        } else if (productsArray[i].id == id){
            `O produto ${productsArray[i].name} foi DELETADO com sucesso!`;
        }
    }

    productsArray = newProducstArray;

    listProducts ();
}

function searchProduct () {
    listProductTable.innerHTML = '';

    const titleRow = listProductTable.insertRow(0);
        
    titleRow.insertCell(0).innerHTML = "<strong>Produto</strong>";
    titleRow.insertCell(1).innerHTML = "<strong>Preço</strong>";
    titleRow.insertCell(2).innerHTML = "<strong>Editar</strong>";
    titleRow.insertCell(3).innerHTML = "<strong>Excluir</strong>";
    
    let i;
    for ( i = 0; i < productsArray.length; i++ ){
        if ( productsArray[i].name.includes(searchInput.value) ) {
            let linha = listProductTable.insertRow(1);

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
            //console.log(productsArray[i]);
        }
    }
}

addProductButton.addEventListener('click', addProduct);
listProductButton.addEventListener('click', listProducts);
editProductButton.addEventListener('click', () => { concluirEditar() });
searchButton.addEventListener('click', searchProduct);