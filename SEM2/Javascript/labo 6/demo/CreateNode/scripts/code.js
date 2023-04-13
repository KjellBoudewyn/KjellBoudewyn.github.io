const setup = () => {
    let element = document.createElement("p");
    element.setAttribute("class", "color");
    let textNode = document.createTextNode("Hello World");
    element.appendChild(textNode); //voeg textNode als kind toe
    document.querySelector("#myDIV").appendChild(element);
}
window.addEventListener("load", setup);