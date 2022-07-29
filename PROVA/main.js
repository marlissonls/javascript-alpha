export default function main(){
    const root = document.querySelector("#root");
    function render() {
        root.innerHTML = `<h1>MAIN PAGE</h1>`;
    }
    return render();
}