export default function docesPage(){
    const app = document.querySelector("#app");
    app.innerHTML = doces();
};

function doces() {
    return `
        <img src="atividade-14/img/doces.jpg" alt="doces">
    `;
};