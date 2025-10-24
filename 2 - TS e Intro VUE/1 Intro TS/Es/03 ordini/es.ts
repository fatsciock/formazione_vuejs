// esercizio3.ts
/**
 * Definisci un tipo StatoOrdine che ha come valori possibili "in attesa"
 *  "spedito" "consegnato"
 * Definisci un interfaccia Ordine con queste proprietà:
 *  id, prodotti (lista di stringhe), stato (StatoOrdine)
 * 
 * Scrivi una funzione aggiornaStato che dato un ordine e un nuovo stato 
 *  sostituisce lo stato dell'ordine con quello nuovo
 * 
 * Scrivi una funzione recuperaOrdiniPerStato che data la lista degli ordini
 *  e uno stato, restituisca una lista con gli ordini in quello stato
 * 
 * Scrivi una funzione numeroOrdiniPerStato che data la lista degli ordini
 *  e uno stato, restituisca il numero di ordini in quello stato
 * 
 * Scrivi una funzione numeroOrdiniPerOgniStato che data la lista degli ordini,
 *  stampi il numero di ordini per ogni stato
 * 
 * Scrivi una funzione trovaOrdine che dato l’id di un ordine, restituisca l’ordine
 *  corrispondente, oppure null se non esiste
 * 
 * Scrivi una funzione contaProdottiPerStato che calcoli quanti prodotti complessivi
 *  sono stati ordinati negli ordini con un determinato stato
 * 
 * Scrivi una funzione contaProdottiTotali che calcoli quanti prodotti complessivi
 *  sono stati ordinati in tutta la lista
 */

type StatoOrdine = "in attesa" | "spedito" | "consegnato";
const tuttiGliStati: StatoOrdine[] = []; 

interface Ordine {
    id: number;
    prodotti: string[];
    stato: StatoOrdine;
}

let ordini: Ordine[] = [
    { id: 1, prodotti: ["Mouse", "Tastiera"], stato: "in attesa" },
    { id: 2, prodotti: ["Monitor"], stato: "spedito" },
    { id: 3, prodotti: ["Cuffie", "Microfono"], stato: "consegnato" },
    { id: 4, prodotti: ["Webcam"], stato: "in attesa" }
]

function aggiornaStato(ordine: Ordine, nuovoStato: StatoOrdine): void {
    ordine.stato = nuovoStato;
}

function recuperaOrdiniPerStato(lista: Ordine[], stato: StatoOrdine): Ordine[] {
    let ordini: Ordine[] = [];
    for (const o of lista) {
        if (o.stato === stato) {
            ordini.push(o);
        }
    }
    return ordini;
}

function numeroOrdiniPerStato(lista: Ordine[], stato: StatoOrdine): number {
    return recuperaOrdiniPerStato(lista, stato).length;
}

function numeroOrdiniPerOgniStato(lista: Ordine[]): void {
    console.log("In attesa: " + numeroOrdiniPerStato(lista, "in attesa"));
    console.log("Spedito: " + numeroOrdiniPerStato(lista, "spedito"));
    console.log("Consegnato: " + numeroOrdiniPerStato(lista, "consegnato"));
}

function trovaOrdine(lista: Ordine[], id: number): Ordine | null {
    for (const o of lista) {
        if (o.id === id) {
            return o;
        }
    }
    return null;
}

function contaProdottiPerStato(lista: Ordine[], stato: StatoOrdine): number {
    let totale = 0;
    const ordiniPerStato = recuperaOrdiniPerStato(lista, stato);
    for (let o of ordiniPerStato) {
        totale += o.prodotti.length;
    }
    return totale;
}

function contaProdottiTotali(lista: Ordine[]): number {
    return contaProdottiPerStato(lista, "in attesa") + 
        contaProdottiPerStato(lista, "spedito") + 
        contaProdottiPerStato(lista, "consegnato");
}
