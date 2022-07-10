export default function homePage(){
    const app = document.querySelector("#app");
    app.innerHTML = home();
};

function home() {
    return `
        <img src="atividade-14/img/confeitaria.jpg" alt="logo">
    `;
};