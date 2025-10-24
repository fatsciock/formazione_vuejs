## 2. DOM ed eventi

### Introduzione al DOM (15 min)
- **Cos’è il DOM (Document Object Model)**
  - Rappresentazione in memoria della pagina HTML
  - Ogni elemento HTML diventa un “nodo” manipolabile da JavaScript
- **Come accedere agli elementi**
  - `document.getElementById("id")`
  - `document.getElementsByClassName("classe")`
  - `document.getElementsByTagName("tag")`
  - `document.querySelector("css_selector")`
  - `document.querySelectorAll("css_selector")`
- **Proprietà comuni**:
  - `innerText`, `innerHTML`
  - `value` (per input)
  - `style` (per modificare il CSS)

#### Esempi
- Recuperare un elemento `<p>` e cambiarne il testo
- Recuperare un input e leggere quello che ha scritto l’utente
- Cambiare il colore di sfondo di un `<div>`


### Creare e modificare elementi (20 min)
- **Creazione dinamica**: `document.createElement("tag")`
- **Modifica attributi**: `setAttribute()`, `.id`, `.className`
- **Aggiunta in pagina**:
  - `appendChild()`
  - `append()` / `prepend()`
- **Rimozione elementi**: `remove()`

#### Esempi
- Creare un nuovo `<li>` e aggiungerlo a una lista
- Creare un pulsante dinamicamente e inserirlo nella pagina
- Rimuovere un elemento cliccando un pulsante


### Eventi ed Event Listener (30 min)
- **Eventi comuni**: `click`, `mouseover`, `mouseout`, `keydown`, `keyup`, `submit`, `change`, ecc.
- **Aggiungere listener**:
  - `element.addEventListener("evento", funzione)`
- **Rimuovere listener**:
  - `element.removeEventListener("evento", funzione)`
- **Oggetto `event`**:
  - `event.target` → elemento che ha scatenato l’evento
  - `event.preventDefault()` → per bloccare il comportamento predefinito (es. submit)

#### Esempi
- Aggiungere un `click` a un pulsante che cambia il colore del body
- Aggiungere un `mouseover` su un’immagine che la ingrandisce
- Usare `submit` su un form per validare i dati prima dell’invio

---

### Interazione DOM + eventi (30 min)
- **Modificare il DOM in risposta a eventi**
- Esempi:
  1. **Contatore con pulsanti `+` e `-`** (aggiornare un `<span>`)
  2. **To-do list**: scrivere un testo in input, cliccare “Aggiungi” → aggiunge un `<li>` in lista
  3. **Mostra/nascondi password**: checkbox che cambia l’attributo `type` dell’input

### Esercizi finali (20–30 min)
1. **Form di registrazione**
   - Input: nome, email, password
   - Alla pressione di “Invia”, controllare che i campi non siano vuoti
   - Se ok → mostra messaggio “Registrazione completata” in verde
   - Se errori → mostra messaggio in rosso

2. **Gioco del colore casuale**
   - Pulsante “Cambia colore”
   - Ogni click → sfondo della pagina cambia in un colore random

3. **Lista della spesa**
   - Input + pulsante “Aggiungi”
   - Crea `<li>` dentro `<ul>`
   - Ogni `<li>` ha anche un pulsante “Rimuovi” per cancellarlo
