export default function cupcakesPage(){
    const app = document.querySelector("#app");
    app.innerHTML = cupcakes();
};

function cupcakes() {
    return `
        <img src="atividade-14/img/cupcake.jpg" alt="cupcakes">
    `;
};