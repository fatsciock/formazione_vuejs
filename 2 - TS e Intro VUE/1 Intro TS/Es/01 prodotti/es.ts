// esercizio1.ts
/*
Definisci un'interfaccia prodotto con queste proprietà:
nome, prezzo, inStock

Scrivi una funzione inserisciProdotto che aggiunge un nuovo prodotto
alla lista.
Scrivi una funzione calcolaTotale che stampa il totale dei prodotti:
alla funzione può essere passato un valore booleano che 
dice se considerare solo i prodotti in stock oppure tutti quanti
*/

interface Prodotto {
    nome: string;
    prezzo: number;
    inStock: boolean;
}

let prodotti: Prodotto[] =[
    { nome: "Mouse", prezzo: 25.99, inStock: true },
    { nome: "Tastiera", prezzo: 45.5, inStock: false },
    { nome: "Monitor", prezzo: 199.9, inStock: true }
];

function inserisciProdotto(nome: string, prezzo: number, inStock: boolean): void {
    prodotti.push({ nome, prezzo, inStock });
}

function calcolaTotale(lista: Prodotto[], soloInStock: boolean = true): number {
    let totale: number = 0;
    for (const p of lista) {
        if (!soloInStock || p.inStock) {
            totale += p.prezzo;
        }
    }
    return totale;
}

calcolaTotale(prodotti);
calcolaTotale(prodotti, false);
