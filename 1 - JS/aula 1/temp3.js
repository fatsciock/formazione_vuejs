// function saluta() {
//   console.log("Ciao es3!");
// }

// saluta();

// function salutaConParametri(nome) {
//   console.log("Ciao " + nome);
// }
// salutaConParametri("Andrea");
// salutaConParametri(123);
// salutaConParametri(true);

// function somma(a, b) {
//   return a + b;
// }

// console.log(somma(5, 8))

// let messaggio = "Ciao";

// saluta("Andrea");
// function saluta(nome) {
//   console.log(messaggio + " " + nome);
// }
// saluta("Antonio");


// const sottrazione = function(a, b) {
//   return a - b;
// }
// console.log(sottrazione(5, 2));

// const sottrazione2 = (a, b) => a - b;
// console.log(sottrazione2(5, 2));

// const quadrato = n => n * n;





function generaNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function giocaPartita(min, max) {
    let numeroSegreto = generaNumero(min, max);
    let tentativi = 0;
    let indovinato = false;

    while (!indovinato) {
        let guess = NaN;
        while (isNaN(guess)) {
            guess = Number(prompt(`Indovina un numero tra ${min} e ${max}:`));
            if (isNaN(guess)) {
                alert("Inserisci un numero valido!");
            }
        }

        tentativi++;

        if (guess < min || guess > max) {
            alert(`Il numero deve essere compreso tra ${min} e ${max}.`);
        } else if (guess === numeroSegreto) {
            alert("🎉 Complimenti! Hai indovinato in " + tentativi + " tentativi.");
            indovinato = true;
        } else if (guess < numeroSegreto) {
            alert("Troppo basso!");
        } else {
            alert("Troppo alto!");
        }
    }
}

function avviaGioco() {
    let giocaAncora = true;

    while (giocaAncora) {
        // let limiti = chiediLimiti();
        // if (limiti === null) {
        //     alert("Gioco annullato.");
        //     return;
        // }

        let min, max;

        let corretto = false;
        while (!corretto) {
            min = prompt("Inserisci il valore minimo:");
            if (min === null) return null; 
            min = Number(min);

            max = prompt("Inserisci il valore massimo:");
            if (max === null) return null;
            max = Number(max);

            if (isNaN(min) || isNaN(max)) {
                alert("Inserisci solo numeri validi.");
            } else if (min >= max) {
                alert("Il valore minimo deve essere minore del massimo.");
            } else {
                corretto = true;
            }
        }

        //giocaPartita(limiti.min, limiti.max);
        giocaPartita(min, max);

        let risposta = prompt("Vuoi giocare di nuovo? (sì/no)");
        if (risposta === null || risposta.toLowerCase() !== "sì") {
            giocaAncora = false;
            alert("Grazie per aver giocato!");
        }
    }
}

// Avvio del gioco
avviaGioco();










