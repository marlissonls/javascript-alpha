export default function page1(){
    const root = document.querySelector("#root");
    function render() {
        root.innerHTML = `<h1>PÁGINA 1</h1>`;
    }
    return render();
}