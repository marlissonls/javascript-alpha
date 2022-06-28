const productName = document.querySelector("#product-name");
const productPrice = document.querySelector("#product-price");
const productDescription = document.querySelector("#product-description");
const addProductButton = document.querySelector("#product-add");
const warn = document.querySelector("#warn");
const listProductButton = document.querySelector("#product-list-btn");
const listProductTable = document.querySelector("#product-list");
const editProductButton = document.querySelector("#product-edit");
const editProductFoundButton = document.querySelector("#product-found-edit");

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
let foundArray = [];

function checkValues () {
    try {
        if (productName.value === '' || productPrice.value === '' || productDescription.value === '') {
            throw `Você deixou campos vazios!`;
        };
        if (isNaN(productPrice.value) || parseFloat(productPrice.value) <= 0) {
            throw 'Insira um preço numérico maior que zero, separando decimais por ponto!';
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

        warn.innerHTML = `O produto "${product.name}" foi ADICIONADO com sucesso!`;
    }
}

function listProducts () {
    listProductTable.innerHTML = '';

    const titleRow = listProductTable.insertRow(0);
        
    let titleCell01 = titleRow.insertCell(0);
    let titleCell02 = titleRow.insertCell(1);
    titleRow.insertCell(2).innerHTML = "<strong>Editar</strong>";
    titleRow.insertCell(3).innerHTML = "<strong>Excluir</strong>";

    titleCell01.innerHTML = "<strong>Produto</strong>";
    titleCell02.innerHTML = "<strong>Preço</strong>";

    titleCell01.addEventListener("click", () => {orderByName (productsArray)});
    titleCell02.addEventListener("click", () => {orderByPrice (productsArray)});
    
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

    function orderByName (array) {
        array.sort((a, b) => {
            let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
    
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        listProducts ();
    }
    
    function orderByPrice (array) {
        array.sort((a, b) => {
            return a.price - b.price;
        });
        listProducts ();
    }

    function excluirProduto (id) {
        let i
        for ( i = 0 ; i < productsArray.length ; i++ ) {
            if( productsArray[i].id == id ) {
                warn.innerHTML = `O produto "${productsArray[i].name}" foi DELETADO com sucesso!`;
                productsArray.splice(i, 1);
                break;
            }
        }
        listProducts ();
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
    
            warn.innerHTML = `O produto "${produto.name}" foi MODIFICADO com sucesso!`;
    
            addProductButton.hidden = false;
            editProductButton.hidden = true;
    
            listProducts ();
    
            productName.value = null;
            productPrice.value = null;
            productDescription.value = null;
        }
    }

    editProductButton.addEventListener('click', concluirEditar);
}

function mostrarProduto (id) {
    mostrarModal.hidden = false;
    fecharModal.addEventListener('click', () => {mostrarModal.hidden = true});

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

function editarProdutoEncontrado (id) {
    let produto = "";

    for (let i = 0 ; i < foundArray.length ; i++ ) {
        if ( foundArray[i].id == id) {
            produto = foundArray[i];
            break;
        }
    }

    productName.value = produto.name;
    productPrice.value = produto.price;
    productDescription.value = produto.description;

    addProductButton.hidden = true;
    editProductFoundButton.hidden = false;

    idParaEditar = id;
}

function searchProduct () {
    let foundProducts = 0;
    foundArray = [];

    listProductTable.innerHTML = '';
    const titleRow = listProductTable.insertRow(0);

    let titleCell01 = titleRow.insertCell(0);
    let titleCell02 = titleRow.insertCell(1);
    titleRow.insertCell(2).innerHTML = "<strong>Editar</strong>";
    titleRow.insertCell(3).innerHTML = "<strong>Excluir</strong>";

    titleCell01.innerHTML = "<strong>Produto</strong>";
    titleCell02.innerHTML = "<strong>Preço</strong>";

    titleCell01.addEventListener("click", () => {orderFoundByName (foundArray)});
    titleCell02.addEventListener("click", () => {orderFoundByPrice (foundArray)});

    let i;
    for ( i = productsArray.length-1; i >= 0 ; i-- ){
        if ( productsArray[i].name.includes(searchInput.value) || productsArray[i].description.includes(searchInput.value) ) {
            foundArray.push(productsArray[i]);
            
            let linha = listProductTable.insertRow(1);

            let celula01 = linha.insertCell(0);
            let celula02 = linha.insertCell(1);
            let celula03 = linha.insertCell(2);
            let celula04 = linha.insertCell(3);

            celula01.innerHTML = `#${foundArray[foundProducts].id} ${foundArray[foundProducts].name}`;
            celula02.innerHTML = `R$ ${foundArray[foundProducts].price}`;
            celula03.innerHTML = "<img src='images/edit-2-64.ico'>";
            celula04.innerHTML = "<img src='images/delete-64.ico'>";

            let id = foundArray[foundProducts].id
            celula01.addEventListener("click", () => { mostrarProduto (id) });
            celula03.addEventListener("click", () => { editarProdutoEncontrado (id) });
            celula04.addEventListener("click", () => { excluirProdutoEncontrado (id) });

            foundProducts++;
        }
    }
    if ( foundProducts > 0 ) {
        warn.innerHTML = `Foram encontrados: ${foundProducts} produtos. `
    } else {
        warn.innerHTML = `Não foram encontrados produtos conforme a chave de pesquisa: ${searchInput.value}`
    }

    function orderFoundByName (array) {
        array.sort((a, b) => {
            let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
    
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        listFoundProducts ();
    }
    
    function orderFoundByPrice (array) {
        array.sort((a, b) => {
            return a.price - b.price;
        });
        listFoundProducts ();
    }

    function excluirProdutoEncontrado (id) {
        let i;
        let j;
        for ( i = 0 ; i < foundArray.length ; i++ ) {
            if ( foundArray[i].id == id ) {
                warn.innerHTML = `O produto "${foundArray[i].name}" foi DELETADO com sucesso!`;
                foundArray.splice(i, 1);
            }
        }
        for ( j = 0 ; j < productsArray.length ; j++ ) {
            if ( productsArray[j].id == id ) {
                productsArray.splice(j, 1);
            }
        }
        listFoundProducts ();
    }

    function concluirEditarEncontrado () {
        if (checkValues()) {
            let produto = "";
    
            let i;
            let j;
            for ( i = 0 ; i < foundArray.length ; i += 1 ) {
                if (foundArray[i].id == idParaEditar) {
                    produto = foundArray[i];
                    break;
                }
            }

            for ( j = 0 ; j < productsArray.length ; j++ ) {
                if (productsArray[j].id == idParaEditar) {
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
    
            foundArray[i] = produto;
            productsArray[j] = produto;
    
            warn.innerHTML = `O produto "${produto.name}" foi MODIFICADO com sucesso!`;
    
            addProductButton.hidden = false;
            editProductFoundButton.hidden = true;
    
            listFoundProducts ();
    
            productName.value = null;
            productPrice.value = null;
            productDescription.value = null;
        }
    }

    editProductFoundButton.addEventListener('click', concluirEditarEncontrado);
}

function listFoundProducts () {
    listProductTable.innerHTML = '';
    const titleRow = listProductTable.insertRow(0);

    let titleCell01 = titleRow.insertCell(0);
    let titleCell02 = titleRow.insertCell(1);
    titleRow.insertCell(2).innerHTML = "<strong>Editar</strong>";
    titleRow.insertCell(3).innerHTML = "<strong>Excluir</strong>";

    titleCell01.innerHTML = "<strong>Produto</strong>";
    titleCell02.innerHTML = "<strong>Preço</strong>";

    titleCell01.addEventListener("click", () => {orderFoundByName (foundArray)});
    titleCell02.addEventListener("click", () => {orderFoundByPrice (foundArray)});

    let i;
    for ( i = 0 ; i < foundArray.length ; i++ ) {
        let linha = listProductTable.insertRow(i+1);

        let celula01 = linha.insertCell(0);
        let celula02 = linha.insertCell(1);
        let celula03 = linha.insertCell(2);
        let celula04 = linha.insertCell(3);

        celula01.innerHTML = `#${foundArray[i].id} ${foundArray[i].name}`;
        celula02.innerHTML = `R$ ${foundArray[i].price}`;
        celula03.innerHTML = "<img src='images/edit-2-64.ico'>";
        celula04.innerHTML = "<img src='images/delete-64.ico'>";

        let id = foundArray[i].id
        celula01.addEventListener("click", () => { mostrarProduto (id) });
        celula03.addEventListener("click", () => { editarProdutoEncontrado (id) });
        celula04.addEventListener("click", () => { excluirProdutoEncontrado (id) });
    }

    function orderFoundByName (array) {
        array.sort((a, b) => {
            let fa = a.name.toLowerCase(), fb = b.name.toLowerCase();
    
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        listFoundProducts ();
    }
    
    function orderFoundByPrice (array) {
        array.sort((a, b) => {
            return a.price - b.price;
        });
        listFoundProducts ();
    }

    function excluirProdutoEncontrado (id) {
        let i;
        let j;
        for ( i = 0 ; i < foundArray.length ; i++ ) {
            if ( foundArray[i].id == id ) {
                warn.innerHTML = `O produto "${foundArray[i].name}" foi DELETADO com sucesso!`;
                foundArray.splice(i, 1);
            }
        }
        for ( j = 0 ; j < productsArray.length ; j++ ) {
            if ( productsArray[j].id == id ) {
                productsArray.splice(j, 1);
            }
        }
        listFoundProducts ();
    }

    function concluirEditarEncontrado () {
        if (checkValues()) {
            let produto = "";
    
            let i;
            let j;
            for ( i = 0 ; i < foundArray.length ; i += 1 ) {
                if (foundArray[i].id == idParaEditar) {
                    produto = foundArray[i];
                    break;
                }
            }

            for ( j = 0 ; j < productsArray.length ; j++ ) {
                if (productsArray[j].id == idParaEditar) {
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
    
            foundArray[i] = produto;
            productsArray[j] = produto;
    
            warn.innerHTML = `O produto "${produto.name}" foi MODIFICADO com sucesso!`;
    
            addProductButton.hidden = false;
            editProductFoundButton.hidden = true;
    
            listFoundProducts ();
    
            productName.value = null;
            productPrice.value = null;
            productDescription.value = null;
        }
    }

    editProductFoundButton.addEventListener('click', concluirEditarEncontrado);
}

addProductButton.addEventListener('click', addProduct);
listProductButton.addEventListener('click', listProducts);
searchButton.addEventListener('click', searchProduct);