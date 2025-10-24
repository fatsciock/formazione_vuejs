# Corso TypeScript -- Scaletta

## 1️⃣ Installare Node.js

-   TypeScript si compila in JavaScript tramite **Node.js**.\
-   Vai su <https://nodejs.org> e installa la versione LTS.\
-   Dopo l'installazione, apri il terminale e verifica:

``` bash
node -v
npm -v
```

-   Dovresti vedere i numeri di versione di Node e npm.

------------------------------------------------------------------------

## 2️⃣ Installare TypeScript

-   Apri il terminale in VS Code nella cartella del progetto e digita:

``` bash
npm install -g typescript
```

-   Questo installa `tsc` (TypeScript Compiler) globalmente.\
-   Verifica l'installazione:

``` bash
tsc -v
```

------------------------------------------------------------------------

## 3️⃣ Creare un file TypeScript

-   In VS Code crea un file con estensione `.ts`, ad esempio `main.ts`.\
-   Scrivi qualcosa tipo:

``` ts
let x: number = 5;
console.log(x);
```

------------------------------------------------------------------------

## 4️⃣ Compilare il file TS in JS

-   Nel terminale digita:

``` bash
tsc main.ts
```

-   Verrà generato un file `main.js` che puoi eseguire con Node oppure
    includere in HTML:

``` html
<script src="main.js"></script>
```

------------------------------------------------------------------------

## 5️⃣ Compilazione automatica

-   Puoi far sì che TS compili automaticamente quando salvi:

``` bash
tsc main.ts --watch
```

------------------------------------------------------------------------

## 6️⃣ Integrazione con HTML

-   In un file HTML normale includi il JS compilato (`main.js`) con
    `<script src="main.js"></script>`.
-   Non si può includere direttamente `.ts` nel browser: serve **sempre
    il JS compilato**.

------------------------------------------------------------------------

💡 **Suggerimento**: Per progetti Vue, userai spesso **Vite o Vue CLI**,
che già integrano TS e compilano automaticamente.
