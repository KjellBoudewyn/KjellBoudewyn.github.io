const setup = () => {
    let btnToon;
    btnToon = document.addEventListener("click", klik);

}

const klik = () => {
    let p = document.createTextNode("New String ");
    let div = document.getElementById("myDIV");
    div.appendChild(p);
}
window.addEventListener("load", setup);