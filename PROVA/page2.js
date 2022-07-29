export default function page2(){
    const root = document.querySelector("#root");
    function render() {
        root.innerHTML = `<h1>PÁGINA 2</h1>`;
    }
    return render();
}