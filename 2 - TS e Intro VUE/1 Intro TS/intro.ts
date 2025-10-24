// esempi.ts

// === Tipi di base ===

// Numero
let eta: number = 25;

// Stringa
let nome: string = "Andrea";

// Booleano
let isAdmin: boolean = true;

// Any (sconsigliato, ma esiste)
let variabileQualsiasi: any = "ciao";
variabileQualsiasi = 123; // valido, ma poco sicuro

// Array
let numeri: number[] = [1, 2, 3, 4];
let parole: string[] = ["ciao", "hello", "hola"];

// Tupla (array con lunghezza e tipi fissi)
let coppia: [string, number] = ["anni", 30];


// === Oggetti e interfacce ===
interface Libro {
    titolo: string;
    autore: string;
    anno: number;
    prezzo: number;
}

let libro1: Libro = {
    titolo: "Il nome della rosa",
    autore: "Umberto Eco",
    anno: 1980,
    prezzo: 15.5
};


// === Funzioni tipizzate ===

// Funzione che prende un numero e restituisce un numero
function quadrato(x: number): number {
    return x * x;
}

// Funzione che prende due stringhe e restituisce una stringa
function saluta(nome: string, cognome: string): string {
    return `Ciao ${nome} ${cognome}!`;
}

// Funzione con parametro opzionale
function stampaMessaggio(msg: string, volte?: number): void {
    if (volte) {
        for (let i = 0; i < volte; i++) {
            console.log(msg);
        }
    } else {
        console.log(msg);
    }
}

// === Esempi di uso ===
console.log("Quadrato di 5:", quadrato(5));
console.log(saluta("Andrea", "Negri"));
stampaMessaggio("Benvenuti a TypeScript!", 3);




// === Esempio base con union type ===
let valore: string | number;

valore = "Ciao";   // ok
valore = 42;       // ok
// valore = true;  // ❌ errore: boolean non è consentito

// === Funzione con parametri di tipo unione ===
function stampaId(id: string | number): void {
    console.log("L'ID è:", id);
}

stampaId(101);        // ok
stampaId("abc123");   // ok


// === Funzione con controllo di tipo ===
function lunghezza(x: string | string[]): number {
    if (typeof x === "string") {
        return x.length; // se stringa → uso .length delle stringhe
    } else {
        return x.length; // se array di stringhe → uso .length dell’array
    }
}

console.log(lunghezza("ciao"));          // 4
console.log(lunghezza(["uno", "due"]));  // 2


// === Union type con alias ===
type Risultato = "successo" | "errore" | "pending";

function gestisciRisultato(r: Risultato): void {
    if (r === "successo") {
        console.log("Operazione riuscita!");
    } else if (r === "errore") {
        console.log("Si è verificato un errore.");
    } else {
        console.log("In corso...");
    }
}

gestisciRisultato("successo");
gestisciRisultato("pending");
// gestisciRisultato("fallito"); // ❌ errore: non è un valore valido

function gestisciRisultato2(r: "successo" | "errore" | "pending"): void {
    if (r === "successo") {
        console.log("Operazione riuscita!");
    } else if (r === "errore") {
        console.log("Si è verificato un errore.");
    } else {
        console.log("In corso...");
    }
}

gestisciRisultato2("successo");
// gestisciRisultato2("successo2"); // ❌ errore: