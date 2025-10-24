# 📅 Versione 1 – Solo JavaScript (8h)

## Mattina

### 9:00 – 9:30 → Introduzione a JS nel browser
- Dove si scrive (console, file esterno)
- Differenza tra HTML/CSS e JS
- Mini-esercizio: stampare un messaggio in console e in pagina

### 9:30 – 10:30 → Variabili e tipi
- `let`, `const`, tipi primitivi, conversioni

**Esercizi:**
- Inserire due numeri con `prompt` e stamparne la somma
- Verifica se un numero è pari o dispari

### 10:30 – 11:30 → Operatori e condizioni
- Operatori matematici e logici
- `if/else`, `switch`

**Esercizi:**
- Mini-calcolatrice (scegli operazione con `switch`)
- Controllo accesso: se età ≥ 18 → “puoi entrare”

### 11:30 – 12:30 → Funzioni
- Dichiarazione vs arrow function
- Parametri e `return`

**Esercizi:**
- Funzione `greet(name)` → ritorna “Ciao, X”
- Funzione che calcola media array

### 12:30 – 13:00 → Ripasso rapido con quiz pratici (console)

---

## Pomeriggio

### 14:00 – 15:00 → Array e oggetti
- Array (`push`, `map`, `filter`)
- Oggetti con proprietà semplici

**Esercizi:**
- Lista della spesa (aggiungi, mostra)
- Array di studenti e filtra >18 anni

### 15:00 – 17:00 → DOM e eventi
- `querySelector`, `innerText`, `.value`
- Eventi (`addEventListener`)

**Esercizi:**
- Bottone che incrementa contatore
- Input che aggiorna in tempo reale testo
- Rifai es degli studenti in cui fai aggiungere uno studente alla volta con l'età, e poi mostri 2 liste, una filtrata e una no
- ToDo list base (aggiungi task e mostra lista)

### 17:00 – 18:00 → Mini-progetto di giornata
**ToDo List completa in Vanilla JS:**
- aggiungi task
- elimina task
- segna come completato

👉 Collegamento finale: "Domani rifaremo la stessa cosa in Vue, e vedrete quanto sarà più facile".

---

# 📅 Versione 2 – JavaScript + introduzione a TypeScript (8h)

## Mattina (JavaScript puro)

### 9:00 – 9:30 → Introduzione JS (come sopra)
### 9:30 – 10:30 → Variabili e tipi + esercizi (come sopra)
### 10:30 – 11:30 → Condizioni e operatori + esercizi (come sopra)
### 11:30 – 12:30 → Funzioni (come sopra)
### 12:30 – 13:00 → Esercizio rapido riepilogativo

---

## Pomeriggio (mix JS + TS)

### 14:00 – 15:00 → Array e oggetti (JS) + esercizi (come sopra)
### 15:00 – 16:00 → Manipolazione DOM + eventi base
- Bottone contatore
- Input che aggiorna testo

### 16:00 – 18:00 → Introduzione a TypeScript
- Tipi di base: `string`, `number`, `boolean`
- Tipi opzionali e union (`string | null`)
- Oggetti e interfacce (`interface Student { name: string; age: number }`)
- Funzioni tipizzate

**Esercizi in TS:**
- Funzione `somma(a: number, b: number): number`
- Array di stringhe tipizzato
- Oggetto “studente” con interfaccia
- Lista studenti (array di `Student`) e filtrare >18

👉 Chiusura: differenze JS/TS, e collegamento a Vue (`defineProps<{ ... }>()`).

---

**In questo modo:**
- La versione JS puro prepara benissimo la base per Vue.
- La versione JS+TS fa capire subito i benefici dei tipi,