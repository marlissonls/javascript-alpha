const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDescription = document.querySelector("#product-description");
const addProductButton = document.querySelector("#product-add");
const warn = document.querySelector("#warn");
const listProductButton = document.querySelector("#product-list-btn");
const listProductTable = document.querySelector("#product-list");

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
        const row = listProductTable.insertRow(i+1);
        
        row.insertCell(0).innerHTML = `#${productsArray[i].id} ${productsArray[i].name}`;
        row.insertCell(1).innerHTML = `R$ ${productsArray[i].price}`;
        row.insertCell(2).innerHTML = "<img src='images/edit-2-64.ico'>";
        row.insertCell(3).innerHTML = "<img src='images/delete-64.ico'>";

        i += 1;
    }   
}