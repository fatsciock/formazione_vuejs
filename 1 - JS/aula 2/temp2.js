/*
1) Gestione libri
Creare un programma per gestire una piccola libreria.
Ogni libro ha queste proprietà:
  - titolo (stringa)
  - autore (stringa)
  - annoPubblicazione (numero)
  - generi (array di stringhe)
  - prezzo (numero)

Implementare funzioni per:
  - aggiungere un nuovo libro;
  - stampare tutti i libri (titolo + autore + anno);
  - calcolare il totale dei prezzi di tutti i libri;
  - eliminare un libro dato il titolo;
  - cercare i libri di un determinato autore;
  - cercare i libri che appartengono a un determinato genere.
*/

const libreria = [];

function aggiungiLibro() {
  let titolo = prompt("Inserisci il titolo del libro:");
  let autore = prompt("Inserisci l'autore:");
  let anno = Number(prompt("Inserisci l'anno di pubblicazione:"));
  let generiInput = prompt("Inserisci i generi separati da virgola:");
  let generi = generiInput.split(",");
  let prezzo = Number(prompt("Inserisci il prezzo:"));

  let libro = {
      titolo: titolo,
      autore: autore,
      annoPubblicazione: anno,
      generi: generi,
      prezzo: prezzo
  };

  libreria.push(libro);
}

function stampaLibri() {
    for (let i = 0; i < libreria.length; i++) {
        let libro = libreria[i];
        console.log((i+1) + ") " + libro.titolo + " di " + libro.autore + " (" + libro.annoPubblicazione + ")");
    }
}

function totalePrezzi() {
    let totale = 0;
    for (let i = 0; i < libreria.length; i++) {
        totale = totale + libreria[i].prezzo;
    }
    console.log("Totale prezzi: " + totale + " €");
}

function eliminaLibro() {
    let titolo = prompt("Inserisci il titolo del libro da eliminare:");
    for (let i = 0; i < libreria.length; i++) {
        if (libreria[i].titolo === titolo) {
            libreria.splice(i, 1);
            console.log("Libro eliminato!");
            return;
        }
    }
    console.log("Libro non trovato.");
}

function cercaPerAutore() {
    let autore = prompt("Inserisci l'autore da cercare:");
    for (let i = 0; i < libreria.length; i++) {
        if (libreria[i].autore === autore) {
            console.log(libreria[i].titolo + " (" + libreria[i].annoPubblicazione + ")");
        }
    }
}

function cercaPerGenere() {
    let genere = prompt("Inserisci il genere da cercare:");
    for (let i = 0; i < libreria.length; i++) {
        for (let j = 0; j < libreria[i].generi.length; j++) {
            if (libreria[i].generi[j].trim() === genere) {
                console.log(libreria[i].titolo + " (" + libreria[i].autore + ")");
            }
        }
    }
}

/*
2) Lista spesa/gestione carrello
Crea un programma per gestire una lista della spesa.
Un prodotto ha queste proprietà:
  - nome (stringa)
  - quantita (numero)
  - prezzoUnitario (numero)

Implementare funzioni per:
  - aggiungere un nuovo prodotto;
  - stampare tutti i prodotti (nome, quantità, prezzo unitario, prezzo totale per quel prodotto);
  - calcolare il costo complessivo della spesa;
  - eliminare un prodotto dato il nome;
  - modificare la quantità di un prodotto esistente.
  - se il carrello supera un certo totale (es. 100€), applica uno sconto del 10%.
*/

function aggiungiProdotto(carrello, nome, quantita, prezzoUnitario) {
  let prodotto = {
    nome: nome,
    quantita: quantita,
    prezzoUnitario: prezzoUnitario
  };

  carrello.push(prodotto);
}

function stampaCarrello(carrello) {
  let totale = 0;
  for (let i = 0; i < carrello.length; i++) {
    let prodotto = carrello[i];
    let prezzoTotale = prodotto.quantita * prodotto.prezzoUnitario;
    console.log((i+1) + ") " + prodotto.nome + " - " + prodotto.quantita + " x " + prodotto.prezzoUnitario + "€ = " + prezzoTotale + "€");
    totale = totale + prezzoTotale;
  }
  console.log("Totale complessivo: " + calcolaTotale() + "€")
}

function calcolaTotale(carrello) {
  let totale = 0;
  for (let i = 0; i < carrello.length; i++) {
    let prodotto = carrello[i];
    let prezzoTotale = prodotto.quantita * prodotto.prezzoUnitario;
    totale += prezzoTotale;
  }
  if (totale > 100) {
    totale = totale * 0.9;
  }
  return totale;
}

function eliminaProdotto(carrello, nome) {
  let trovato = false;
  for (let i = 0; i < carrello.length; i++) {
    if (carrello[i].nome === nome && !trovato) {
      carrello.splice(i, 1);
      trovato = true;
    }
  }
  if(!trovato) {
    console.log("Prodotto non trovato.");
  }
}

function modificaQuantita(carrello, nome, nuovaQuantita) {
  for (let i = 0; i < carrello.length; i++) {
    if (carrello[i].nome === nome) {
      carrello[i].quantita = nuovaQuantita;
      console.log("Quantità aggiornata!");
      return;
    }
  }
  console.log("Prodotto non trovato.");
}

/*
3) Rubrica semplificata
Crea un programma per gestire una rubrica telefonica.
Un contatto ha queste proprietà:
  - nome (stringa)
  - telefono (stringa o numero)
  - email (stringa)

Implementare funzioni per:
  - aggiungere un nuovo contatto;
  - stampare tutti i contatti;
  - cercare un contatto dato il nome;
  - eliminare un contatto dato il nome;
  - modificare il numero di telefono o l’email di un contatto esistente.

Bonus:
  - ordina la rubrica alfabeticamente per nome
*/