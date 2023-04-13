const setup = () => {
    let gemeentes = [];
    let stoppen=false;
    while (!stoppen){
        let input = prompt("Gelieve een gemeente weer te geven.");
        stoppen = (input==null || input.trim().toLowerCase() == "stop");
        if(!stoppen) {
            gemeentes.push(input);
            console.log(gemeentes);
        }
    }
    gemeentes.sort(compare);
    voegGemeenteToe(gemeentes);
}

const compare = (a,b) => {
    return a.localeCompare(b);
};

const voegGemeenteToe = (gemeentes) => {
    let select = document.createElement("select");
    for (let i = 0;i<gemeentes.length; i++) {
        let option = document.createElement("option");
        option.text = gemeentes[i];
        option.value = gemeentes[i];
        select.add(option);
    }
   let div = document.getElementById("gemeentes");
    div.appendChild(select);
};

window.addEventListener("load", setup);