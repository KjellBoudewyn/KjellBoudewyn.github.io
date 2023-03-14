const setup = () => {
    console.log ("setup");
    let products = document.getElementsByClassName("aantal")

    for (let i = 0 ; i < products.length ; i++)
    {
        products[i].addEventListener("change", update)
        products[i].addEventListener("input", update);
    }

};
const update = () => {
    let txtBtws = document.getElementsByClassName('btw');
    let txtAantallen = document.getElementsByClassName('aantal');
    let txtPrijzen = document.getElementsByClassName('prijs');
    let txtSubtotalen = document.getElementsByClassName('subtotaal');
    let txtTotaal=document.getElementsByClassName('totaal')[0];
    let totaal = 0.00;
    // gelukkig staan alle elementen van een rijtje in de txtAantallen,
    // txtPrijzen, .. arrays in dezelfde volgorde (nml. "tree order").
    // Zie https://dom.spec.whatwg.org/#old-style-collections
    for (let i = 0; i < txtAantallen.length; i++) {
        let prijs=parseFloat(txtPrijzen[i].innerHTML.replace(',', '.')); // let op : niet .value!
        let aantal=txtAantallen[i].value;
        let btw=parseFloat(txtBtws[i].innerHTML);  // let op : niet .value!

        let subtotaal= parseFloat((aantal*prijs)*(btw/100+1));
        totaal+=subtotaal;

        txtSubtotalen[i].innerHTML=subtotaal.toFixed(2).replace('.', ',')+" Eur";
    }
    txtTotaal.innerHTML=totaal.toFixed(2).replace('.', ',')+" Eur";
};

window.addEventListener("load", setup);