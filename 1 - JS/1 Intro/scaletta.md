## 1. Introduzione a JS nel browser (30m)

### Intro
- Chiedi chi ha già lavorato con js
- Spiega che partiremo dal linguaggio in se e poi lo vedremo applicato al web, quindi la mattina è più un focus sul linguaggio
- Oggi vedremo come con JS possiamo manipolare il contenuto della pagina, prendere input, e aggiungere logica.
- Quello che oggi facciamo in maniera un po’ macchinosa, poi con Vue diventerà molto più semplice.

#### 1. Cos’è JavaScript?
- JavaScript è un linguaggio di programmazione nato nel 1995 per dare interattività alle pagine web.
- È il linguaggio che gira nel browser di tutti, senza dover installare nulla. (mostra in console)
- Oggi non serve solo per il web: con JavaScript si fanno anche server (Node.js), app mobile, desktop e persino videogiochi.
- “Si chiama JavaScript ma non c’entra nulla con Java (è solo marketing anni ’90).”

#### 2. Caratteristiche principali
- **Interpretato:** non si compila, il browser lo legge ed esegue direttamente. (java al contrario è compilato)
- **Dinamico:** non devi dichiarare i tipi delle variabili (anche se con TypeScript li possiamo aggiungere).
- **Multi-paradigma:** puoi programmare in modo procedurale, a oggetti o funzionale.
- **Event-driven:** molte cose avvengono in risposta a eventi (es. un click). (nel web tutto è un evento, click, focus, scroll, ecc)

#### 3. Dove gira JavaScript
- **Nel browser:** Chrome, Firefox, Edge, Safari hanno un “motore JS” (es. V8 in Chrome).
- **Fuori dal browser:** grazie a Node.js.
- **Insieme a HTML e CSS:** HTML struttura, CSS stile, JS logica.

Mini disegno alla lavagna:
```
HTML → scheletro  
CSS  → vestito  
JS   → cervello (decide e reagisce)
```

#### 4. Perché ci serve JS per Vue
- Vue.js è una libreria che si appoggia su JavaScript.
- Per capire Vue devi avere chiari i concetti base: variabili, funzioni, condizioni, array, oggetti.
- Oggi non dobbiamo diventare esperti di JS: ci bastano le fondamenta.

#### 5. Cosa vedremo oggi
- Stampare messaggi (`console.log`, `alert`).
- Chiedere input con `prompt`.
- Capire cosa sono le variabili e i tipi.
- Fare i primi piccoli programmi

### Cosa vediamo ora
- Breve recap: **HTML + CSS + JS** → cosa fa JS
- `console.log`, `alert`, `prompt`
- File JS esterno

### Recap (1)
- **HTML:** struttura la pagina web, definisce gli elementi (testi, immagini, link, form, ecc.)
- **CSS:** gestisce l’aspetto grafico della pagina (colori, spaziature, font, layout, responsive design)
- **JS:** aggiunge interattività e dinamicità alla pagina, permette di reagire agli eventi dell’utente, modificare il DOM, validare dati, comunicare con server, creare animazioni e molto altro

### Primi comandi (2)
- `console.log`: mostra un messaggio in console
- `alert`: mostra un popup con un messaggio
- `prompt`: mostra un popup con un messaggio e chiedi un input

### File JS esterno (3)