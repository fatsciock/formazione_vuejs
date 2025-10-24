# Mattina (4h) – Ripasso esercizi JS e introduzione TypeScript

## (30 min) Warm-up / ripresa

- Breve recap su quanto fatto la volta scorsa (JS + DOM).
- Domande sugli esercizi lasciati (spesa, ecc.).
- Mostri la tua soluzione dell’esercizio della spesa (HTML + JS) → confronto con la loro.

## (1h) Laboratorio: esercizi in JS

- Dividi in gruppi/coppie.
- Implementano gli altri 2 esercizi:
  - 📚 Gestione libri (aggiungi/rimuovi, lista dinamica).
  - 🔢 Indovina il numero.
- Giri tra i banchi e li aiuti a risolvere.

## (30 min) Correzione collettiva

- Rivedete insieme le soluzioni (commentate e pulite il codice).
- Mostri buone pratiche: funzioni piccole, evitare duplicazioni, gestione eventi, ecc.

## (2h) Introduzione a TypeScript

- Perché TypeScript? (tipizzazione, aiuto nell’evitare errori, leggibilità).
- Installazione rapida con `tsc` (se serve, anche solo via playground online).
- Concetti base:
  - Tipi primitivi (`string`, `number`, `boolean`, `any`, `unknown`).
  - Array e oggetti tipizzati.
  - Funzioni con tipizzazione parametri e return.
  - `enum`, union types.
  - Interfacce.
- **Hands-on:** tradurre l’esercizio della spesa da JS a TS (versione guidata insieme).

---

# Pomeriggio (4h) – TypeScript + Introduzione a Vue

## (1h) Laboratorio TypeScript

- Gli studenti traducono gli altri 2 esercizi (libri + indovina il numero) da JS a TS.
- Obiettivo: far vedere come cambia la gestione delle variabili e del flusso grazie alla tipizzazione.

## (30 min) Debrief

- Confronto soluzioni.
- Mostri la tua versione dell’“indovina il numero” con `enum` per gli stati.

## (2h30) Inizio Vue.js (Composition API)

- Spieghi cos’è Vue e il concetto di SFC (Single File Component).
- Parti con la tua scaletta:
  - `{{ }}` e declarative rendering.
  - `reactive` vs `ref` (mostra entrambi in azione).
  - Direttive Vue: `v-bind`, `v-on`, `v-model`, `v-if`.
- Esempi pratici:
  - cambio colore del testo con `v-bind`
  - contatore con `v-on` (mostra differenza con JS puro)
  - mini-form con `v-model`
  - toggle visibilità con `v-if`
- Se avanza tempo: collegare 2 direttive in un unico esempio (es. input che aggiorna dinamicamente un colore o un testo).