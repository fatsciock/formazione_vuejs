## 3. Introduzione a TypeScript

### 3.1 Cos’è TypeScript (15 min)
- Linguaggio sviluppato da Microsoft
- Superset di JavaScript → aggiunge tipizzazione statica e altre funzionalità
- Compilato in JavaScript standard
- Vantaggi: maggiore robustezza, riduzione errori, supporto in grandi progetti
- Perché usarlo in Vue e nel frontend

### 3.2 Tipi di base (20 min)
- number, string, boolean
- any (da evitare)
- array: `number[]` o `Array<number>`
- oggetti tipizzati
- union types: `string | number`

#### Esempi
- Dichiarazione variabili con tipo
- Array di numeri
- Oggetto `Persona` con nome ed età

### 3.3 Funzioni tipizzate (20 min)
- Tipi nei parametri
- Tipo di ritorno
- Parametri opzionali e di default

#### Esempi
- Funzione somma con parametri `number`
- Funzione che restituisce una stringa formattata
- Funzione con parametro opzionale


### 3.4 Interfacce e tipi personalizzati (25 min)
- `interface` per definire la struttura degli oggetti
- Differenza tra `interface` e `type`
- Estendere interfacce

#### Esempi
- Definizione interfaccia `Libro`
- Funzione che accetta un oggetto conforme a `Libro`
- Estensione di un’interfaccia `Utente` con `Admin`

#### Esercizio
- Rifai es dei libri ma con ts

### 3.9 Esercizi pratici (30–40 min)
1. Definire un’interfaccia `Studente` (nome, età, corsi) e creare un array di studenti
2. Creare una funzione che calcola la media delle età
3. Definire una classe `Veicolo` con proprietà comuni, poi estenderla in `Auto` e `Moto`
4. Creare una funzione generica che restituisce l’elemento centrale di un array