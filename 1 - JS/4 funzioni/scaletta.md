## 4. Funzioni (1h)

### Intro
- Una **funzione** è un blocco di codice riutilizzabile.
- Serve per:
  - Evitare duplicazioni.
  - Rendere il codice più leggibile.
  - Suddividere il programma in parti più piccole e chiare.
- Si definisce una volta, si richiama quando serve.

### Sintassi base

```js
function saluta() {
  console.log("Ciao!");
}

saluta(); // Output: Ciao!
```


### Parametri e argomenti

Le funzioni possono ricevere **parametri**:

```js
function somma(a, b) {
  console.log(a + b);
}

somma(5, 3); // Output: 8
```


### Valore di ritorno

Con `return` possiamo restituire un valore:

```js
function moltiplica(a, b) {
  return a * b;
}

let risultato = moltiplica(4, 6);
console.log(risultato); // Output: 24
```

⚠️ Se non c’è `return`, la funzione restituisce `undefined`.


### Scope delle variabili

- Variabili **dichiarate dentro** una funzione → visibili solo lì.
- Variabili **esterne** possono essere lette (ma non sempre modificate).

```js
let messaggio = "Ciao";

function saluta() {
  let nome = "Andrea";
  console.log(messaggio + " " + nome);
}

saluta();          // Output: Ciao Andrea
console.log(nome); // Errore: nome non è definito
```

### Funzioni come espressioni

Le funzioni possono essere salvate in variabili:

```js
const moltiplica = function(x, y) {
  return x * y;
};

console.log(moltiplica(3, 7)); // Output: 21
```

#### Differenza tra funzioni e funzioni come espressioni
- hoisting: se è una function la si può chiamare prima della definzione. Se è un'espressione no

```js
doSomething(); // ok
function doSomething() {
  ...
}

doSomething2(); // errore
const doSomething2 = function() {

}
```

### Arrow Functions (accenno)

Sintassi compatta introdotta in ES6:

```js
const quadrato = n => n * n;

console.log(quadrato(5)); // Output: 25
```


### Funzioni built-in utili
- parseInt
- toLowerCase()

### Esercizi