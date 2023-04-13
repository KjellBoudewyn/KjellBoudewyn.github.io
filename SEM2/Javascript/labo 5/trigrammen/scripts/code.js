const setup = () => {
    let btnToon=document.getElementById("btnToon");
    btnToon.addEventListener("click",toonTrigrams);
}
const toonTrigrams = () => {
    let txtTekst=document.getElementById("trigram");
    let tekst=txtTekst.textContent;
    let firstTrigrams=document.getElementById("firstTrigrams");
    let trigrams=getTrigrams(tekst);
    let output="";
    for (let i=0;i<trigrams.length;i++) {
        output +="<li>"+trigrams[i]+"</li>";
    }
    firstTrigrams.innerHTML=output;
}
const getTrigrams = (tekst) => {
    let result=[];
    for (let i=0;i<tekst.length-2;i++){
        let trigram=tekst.slice(i,i+3);
        result.push(trigram);
    }
    return result;
}
window.addEventListener("load", setup);