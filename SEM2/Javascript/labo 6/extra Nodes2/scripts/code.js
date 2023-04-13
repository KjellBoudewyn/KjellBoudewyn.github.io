const setup = () => {
    let liClassChange = document.getElementsByTagName("li");
    for (var i; i<liClassChange.length; i++){
        liClassChange[i].setAttribute("class", "listItem");
    }
    let newImg = document.createElement("img");
    newImg.setAttribute("src", "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fb%2Fb6%2FImage_created_with_a_mobile_phone.png%2F1200px-Image_created_with_a_mobile_phone.png&tbnid=L2hxXuK7NBWJmM&vet=12ahUKEwj6s8nH6eL9AhVKlv0HHXjaD60QMygAegUIARCyAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&docid=0JWe7yDOKrVFAM&w=1200&h=900&q=image&ved=2ahUKEwj6s8nH6eL9AhVKlv0HHXjaD60QMygAegUIARCyAQ")

    document.querySelector("body").appendChild(newImg);

}
window.addEventListener("load", setup);