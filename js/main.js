const km = parseInt(prompt("Inserisci il numero di Kilometri da percorrere"));
const eta= parseInt(prompt("Inserisci età (possibilità sconti)"));

console.log(km);
console.log(eta);


let prezzo = km * 0.21;

console.log (prezzo);

if ((isNaN(km)) || (isNaN(eta))) {
    document.getElementById("prezzoTreno").innerHTML = "Hai digitato incorrettamente";
} else {
    if (eta > 65) {
        prezzo = prezzo - ((prezzo * 40) / 100);
    } else if (eta < 18) {
        prezzo = prezzo - ((prezzo * 20) / 100);
    }
    
    console.log(prezzo);
    console.log(prezzo.toFixed(2));
    
    if (eta > 65) {
        document.getElementById("prezzoTreno").innerHTML = 
        `
            Hai uno sconto del 40%:
            ${prezzo.toFixed(2)}
            $
        `;
    } else if (eta < 18) {
        document.getElementById("prezzoTreno").innerHTML = 
        `
            Hai uno sconto del 20%:
            ${prezzo.toFixed(2)}
            $
        `;
    } else {
        document.getElementById("prezzoTreno").innerHTML = 
        `
            ${prezzo.toFixed(2)}
            $
        `;
    }
}





