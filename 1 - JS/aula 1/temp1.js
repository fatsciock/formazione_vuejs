// const nome = prompt("Come ti chiami?");
// console.log("Ciao " + nome + ", come stai?");
// alert ("Ciao " + nome + ", come stai?");

const num1 = Number(prompt("Inserisci il primo numero"));
const num2 = Number(prompt("Inserisci il secondo numero"));

console.log(num1 + num2);
alert ("Somma: " + (num1 + num2));


if (false) {
  const number = Number(prompt('Inserisci un numero'));

  if (number === 0) {
    console.log('Hai inserito 0');
  } else if (number < 0) {
    console.log('Hai inserito un numero negativo');
  } else {
    console.log('Hai inserito un numero positivo');

    if (number % 2 === 0) {
      console.log('Il numero è pari');
    } else {
      console.log('Il numero è dispari');
    }
  }
}


const giorno = prompt("Inserisci un giorno della settimana").toLowerCase();
switch (giorno) {
case "lunedì":
case "martedì":
case "mercoledì":
case "giovedì":
case "venerdì":
    console.log("Giorno feriale");
    break;
case "sabato":
    console.log("Weekend");
    break;
case "domenica":
    console.log("Weekend");
    break;
default:
    console.log("Giorno non riconosciuto");
}


// Tabellina
let again = true;
do {
  let numero = 0;
  do {
    numero = Number(prompt("Inserisci il numero"));
  } while (isNaN(numero));

  for(let i=1; i<=10; i++) {
    console.log(numero*i);
  }

  let inputUtente = prompt("Vuoi stampare un altra tabellina? y/n").toLocaleLowerCase();
  if (inputUtente === "y") {
    again = true;
  } else {
    again = false;
  }

} while (again);

// Calcolatrice
let again = true;
do {
  let operazione = "";
  let operazioneCorretta = false;
  let isDivisione = false;
  do {
    operazione = prompt("Scegli operazione (+ - * /)");
    if (operazione === "+" || operazione === "+" || operazione === "+") {
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
    numero2 = Number(prompt("Inserisci il primo numero"));
    if (isDivisione && numero2 === 0) {
      alert("Impossibile dividere per 0");
      numero2 = NaN;
    }
  }

  switch (operazione) {
    case "+":
      console.log("Somma: " + (numero1 + numero2));
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