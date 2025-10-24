// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// i = 1;
// do {
//   console.log("Sono dentro");
// } while(i != 1);

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }


/*
Es 1:
  - l'utente inserisce un numero e va 
  stampata la sua tabellina 
  - alla fine va chiesto all'utente
  se vuole stampare un altra tabellina
  o uscire

Es 2 (calcolatrice):
  - l'utente inserisce l'operazione che
  che vuole eseguire (+ - * /)
  - l'utente inserisce i 2 numeri (con
  controllo che il secondo sia diverso
  da 0 nella divisione)
  - il programma stampa il risultato e
  chiede se si vuole fare un altro calcolo
  o uscire

*/


// let again = true;
// do {
//   let numero = 0;
//   do {
//     numero = Number(prompt("Inserisci il numero"));
//   } while (isNaN(numero));

//   for(let i=1; i<=10; i++) {
//     console.log(numero*i);
//   }

//   const inputUtente = prompt("Vuoi stampare un altra tabellina? y/n").toLocaleLowerCase();
//   if (inputUtente !== "y") {
//     again = false;
//   }

// } while (again);

let again = true;
do {
  let operazione = "";
  let operazioneCorretta = false;
  let isDivisione = false;
  do {
    operazione = prompt("Scegli operazione (+ - * /)");
    if (operazione === "+" || operazione === "-" || operazione === "*") {
      operazioneCorretta = true;
    } else if (operazione === "/") {
      isDivisione = true;
      operazioneCorretta = true;
    }
  } while (!operazioneCorretta);
  

  let numero1 = NaN;
  while (isNaN(numero1)) {
    numero1 = Number(prompt("Inserisci il primo numero"));
  }

  let numero2 = NaN;
  while (isNaN(numero2)) {
    numero2 = Number(prompt("Inserisci il secondo numero"));
    if (isDivisione && numero2 === 0) {
      alert("Impossibile dividere per 0");
      numero2 = NaN;
    }
  }

  let risultato;
  switch (operazione) {
    case "+":
      risultato = numero1 + numero2;
      break;
    case "-":
      console.log("Sottrazione: " + (numero1 - numero2));
      break;
    case "*":
      console.log("Moltiplicazione: " + (numero1 * numero2));
      break;
    case "/":
      console.log("Divisione: " + (numero1 / numero2));
      break;
    default:
      console.log("Operazione non riconosciuta");
  }

  const inputUtente = prompt("Vuoi stampare un altra tabellina? y/n").toLocaleLowerCase();
  if (inputUtente !== "y") {
    again = false;
  }
} while (again);