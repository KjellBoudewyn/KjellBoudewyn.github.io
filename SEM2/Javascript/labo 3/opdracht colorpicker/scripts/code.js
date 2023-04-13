const setup = ()=> {
    let sliders = document.getElementsByClassName("slider");

    for (let i = 0; i<sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
   /*let save = document.getElementById("save");
    save.addEventListener("click", save)*/
}
//bekijken
const saveSwatch = () => {
    let swatchComponents = document.getElementById("SwatchComponents")
    let swatch = buildSwatchComponent();
    swatchComponents.appendChild(swatch);
}
//bekijken
const buildSwatchComponent = () => {
    let swatch=document.createElement("div");
    let btnDelete=document.createElement("input");
    swatch.className ="swatch";
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "x");
    btnDelete.addEventListener("click", deleteSwatch);
}
const update = () => {
    let sliders = document.getElementsByClassName("slider")
    let red=sliders[0].value;
    let green=sliders[1].value;
    let blue=sliders[2].value;
    document.getElementById("lblRed").innerHTML=red;
    document.getElementById("lblGreen").innerHTML=green;
    document.getElementById("lblBlue").innerHTML=blue;
    let swatch= document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+red+","+green+","+blue+")";
}

const deleteSwatch = () => {

}
//kleuren aanhangen
const configureSwatch = () => {
    let red = document.getElementById("sldRed");
    swatch.setAttribute()
    let green
    swatch.setAttribute()
    let blue
    swatch.setAttribute()
    swatch.style.background = "rgb(" + red + ", " + green + "," + blue + ")";
}

/* const save = () => {

}*/
window.addEventListener("load", setup);