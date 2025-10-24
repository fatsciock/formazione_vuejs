## 2. Variabili e tipi (1h)

### Cos'è un variabile (5m)
- Una variabile è come una scatola con un’etichetta: dentro ci metti un valore, e poi puoi riutilizzarlo.
- In JS possiamo cambiare il contenuto di una variabile, ma il nome resta lo stesso.

### Dichiarazione di variabili (10m)
- Chiedi come dichiarerebbero solo una variabile (java style)
- Passa quindi alle 3 modalità di js e mostrale in https://playcode.io/javascript:
    - var: vecchio, non va usato. Dichiara una variabile, opzionalmente la inizializza
    - let: puoi riassegnare il valore. Dichiara una variabile locale, block-scoped, opzionalmente la inizializza
    - const: non puoi riassegnare. Dichiara una costante block-scoped

### Tipi primitivi (10 min)
Alcuni dei tipi primitivi sono:
- stringhe
- numeri
- booleani
- null e undefined

Cose da dire:
- JS è un linguaggio tipizzato **dinamicamente** (può cambiare il tipo di una variabile): il tipo si capisce al volo dal valore
- Si può cambiare il tipo di dato senza problemi... e a volte è un problema

### Conversioni (10 min)
Di 2 tipi:
- Conversioni esplicite (Number("42"), String(42), Boolean(0))
- Conversioni implicite ("5" + 2 → "52", "5" * 2 → 10)

Cose da dire:
- JS è weakly typed (debolmente tipizzato): consente di eseguire conversioni implicite quando un'operazione coinvolge tipi diversi (numero + stringa) invece di tirare errore
- JS a volte converte automaticamente, e questo crea sorprese
- Con Vue useremo spesso valori da input HTML (che arrivano come stringhe), quindi sarà importante saperli convertire
- spiegazione: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures#type_coercion

### Esercizi (20 min)

#### Somma due numeri
- Chiedi due numeri con prompt, salvali in variabili, stampa la somma in console
- Variante: prima concatenano (errore), poi mostri come convertire in Number().

#### Messaggio personalizzato
- Prompt per il nome che deve essere salvato in variabile
- Stampa in console e con alert un saluto.

#### Età e booleano
- Prompt per età che deve essere salvato in variabile
- Stampa in console se è >=18 (ANTICIPO DEGLI IF)
Introduci la variabile isAdult = age >= 18 come booleano.

#### Pari/dispari 
- Prompt per numero che deve essere salvato in variabile
- Verifica se è pari/dispari (ANTICIPO DEGLI IF)