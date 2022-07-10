export default function brigadeirosPage(){
    const app = document.querySelector("#app");
    app.innerHTML = brigadeiros();
};

function brigadeiros() {
    return `
        <img src="atividade-14/img/brigadeiro.jpg" alt="brigadeiro">
    `;
};