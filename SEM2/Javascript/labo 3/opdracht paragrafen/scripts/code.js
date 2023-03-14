const setup = () => {
    let pBelangrijk = document.getElementsByClassName("belangrijk");
    for (let i=0; i<pBelangrijk;i++) {
        pBelangrijk[i].className+=" opvallend";
    }
}
window.addEventListener("load", setup);