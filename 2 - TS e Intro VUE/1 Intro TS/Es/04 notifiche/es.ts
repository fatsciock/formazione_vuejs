// esercizio4.ts

// 1. Interfacce per i due tipi di notifiche
interface Messaggio {
    tipo: "messaggio";
    testo: string;
    mittente: string;
}

interface Avviso {
    tipo: "avviso";
    priorita: "alta" | "media" | "bassa";
}

// 2. Union type Notifica
type Notifica = Messaggio | Avviso;

// 3. Funzione che gestisce una notifica
function gestisciNotifica(notifica: Notifica): void {
    if (notifica.tipo === "messaggio") {
        console.log(`Nuovo messaggio da ${notifica.mittente}: "${notifica.testo}"`);
    } else if (notifica.tipo === "avviso") {
        console.log(`Avviso con priorità ${notifica.priorita.toUpperCase()}`);
    }
}

// 4. Alcuni esempi di utilizzo
let n1: Messaggio = { tipo: "messaggio", testo: "Ciao Andrea!", mittente: "Maria" };
let n2: Avviso = { tipo: "avviso", priorita: "alta" };
let n3: Avviso = { tipo: "avviso", priorita: "bassa" };

gestisciNotifica(n1);
gestisciNotifica(n2);
gestisciNotifica(n3);
