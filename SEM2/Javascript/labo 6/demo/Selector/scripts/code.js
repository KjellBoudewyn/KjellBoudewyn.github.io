const setup = () => {
    // let lstPar = document.getElementsByClassName("color");
    let lstParDiv = document.querySelectorAll("#myDIV > .color");

   /* for(let i; i < lstPar.length; i++){
        lstPar[i].addEventListener("click", change);
    }*/

    for (let i; i<lstParDiv.length;i++){
        lstParDiv[i].addEventListener("click", changeDiv)
    }
}

const change = (e) => {
    e.target.className = "colorPar";
}

const changeDiv = (event) => {
    e.target.className = "classname"
}
window.addEventListener("load", setup);