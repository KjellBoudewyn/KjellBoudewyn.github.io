const vervangAlles = (bronTekst, oud, nieuw) => {
    let result = bronTekst;
    let idx=result.indexOf(oud);
    while (idx != -1) {
        let voor=result.slice(0, idx);
        let na=result.slice(idx+oud.length, result.length);
        result=voor+nieuw+na;
        idx=result.indexOf(oud,idx+nieuw.length);
    }
    return result;
}
//hieronder is nog let inputtekst ding fout
const setup = () => {
    let inputTekst = "Gisteren zat de jongen op de stoep en at de helft van de appel."
    let result = vervangAlles(inputTekst, "de", "het");
    console.log(result);
}

window.addEventListener("load", setup);