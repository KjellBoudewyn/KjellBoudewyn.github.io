const setup = () => {
    let btnTry = document.getElementById("btnTry");

    //event-based
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);
    //eventlisteners CSS
    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);
    //innerHTML of textcontent
    document.getElementById("btnContent").addEventListener("click", changeContent);
}

//mouseHover f(x)
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}


const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse clicked! <br>";
}


const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse out! <br>";
}



//eventListeners difference between "textContent" and "innerHTML"



const withoutBullets = () => {
    let i;
    let listItems = document.getElementsByTagName("li");
    for (i = 0; i<listItems.length; i++) {
        //1ste manier(slecht)
        /*listItems[i].style.listStyleType="none";
        listItems[i].style.backgroundColor="red";*/
        //2de manier(beter)
        /*listItems[i].className = "listItemsStyleNone colorRed";*/
        //3de manier
        if (listItems[i].classList.contains("colorWhite")) {
            listItems[i].classList.remove("colorWhite")
        }
        if (listItems[i].classList.contains("listItemsStyleDisc")) {
            listItems[i].classList.remove("listItemsStyleDisc")
        }
        listItems[i].classList.add("listItemsStyleNone");
            listItems[i].classList.add("colorRed");
            console.log("output"+ listItems[i].className);
    }

}

const withBullets = () => {
    let i;
    let listItems = document.getElementsByTagName("li");
    for (i = 0; i<listItems.length; i++) {
        //1ste manier(slecht)
        /*listItems[i].style.listStyleType="disc";
        listItems[i].style.backgroundColor="white";*/
        //2de manier(beter)
        /*listItems[i].className = "listItemsStyleDisc colorWhite";*/
        if (listItems[i].classList.contains("colorRed")) {
            listItems[i].classList.remove("colorRed")
        }
        if (listItems[i].classList.contains("listItemsStyleNone")) {
            listItems[i].classList.remove("listItemsStyleNone")
        }
        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
        console.log("output"+ listItems[i].className);
    }
}


// difference between "textContent" and "innerHTML"
const changeContent = () => {
    document.getElementById("textContent").textContent ="<a href='https://www.vives.be'>VIVES</a>";
    document.getElementById("innerHTML").innerHTML ="<a href='https://www.vives.be'>VIVES</a>";
}

window.addEventListener("load", setup);

