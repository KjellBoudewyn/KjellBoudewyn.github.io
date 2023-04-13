const setup = () => {
    let p = document.querySelectorAll("p")[0];
    y = p.childNodes[0];
    p.removeChild(y);
    let newtxt = document.createTextNode("Good Job!");
    p.appendChild(newtxt);

}
window.addEventListener("load", setup);