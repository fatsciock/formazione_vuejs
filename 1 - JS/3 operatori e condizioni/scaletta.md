## 3. Operatori, condizioni e cicli (2h)

### 1. Operatori aritmetici (15 min)
- `+`, `-`, `*`, `/`, `%` (modulo), `**` (esponente)
- Operatori di incremento/decremento: `++`, `--`
- Attenzione: `+` con le stringhe → concatenazione

#### Esempi
- Calcolare il resto di una divisione
- Simulare un contatore con `++`

---

### 2. Operatori di confronto (15 min)
- `>`, `<`, `>=`, `<=`
- `==` vs `===`:
  - `==` (equality): converte i tipi e poi confronta → `"1" == 1` → true
  - `===` (strict equality): non converte i tipi → `"1" === 1` → false
- `!=` vs `!==`:
  - `!=` → confronta con conversione
  - `!==` → confronta senza conversione
- Attenzione: `isNaN()` è una funzione speciale (es. `isNaN("ciao")` → true)

---

### 3. Operatori logici (15 min)
- `&&` (AND), `||` (OR), `!` (NOT)
- Possibilità di concatenare condizioni:
  ```js
  let eta = 20;
  let citta = "Roma";
  if (eta >= 18 && citta === "Roma") {
    console.log("Puoi partecipare all'evento!");
  }
  ```

---

### 4. Strutture di controllo (30 min)
- `if`, `if/else`, `if/else if/else`
- `switch` con `case` e `break`

#### Esempi
- Controllare se un numero è positivo, negativo o zero
- Stampare un messaggio diverso a seconda del giorno della settimana con `switch`

---

### 5. Cicli (30 min)
- **Concetto**: ripetere un insieme di istruzioni senza riscriverle
- Tipi principali:
  - `while`: esegue finché la condizione è vera
  - `do...while`: esegue almeno una volta, poi controlla la condizione
  - `for`: quando sappiamo quante volte ripetere

#### Esempi
- Stampare i numeri da 1 a 10
- Stampare solo i numeri pari fino a 20
- Sommare i numeri da 1 a 100
- Chiedere un numero all’utente e stampare la sua tabellina
- Gioco: chiedere all’utente un numero finché non indovina quello segreto

---

### 6. Esercizi finali (15 min)
1. **Calcolatrice semplice**  
   - Chiedere due numeri e un’operazione (`+`, `-`, `*`, `/`)  
   - Stampare il risultato usando `if/else` o `switch`  

2. **Puoi guidare?**  
   - Chiedere con `prompt`:  
     - Età  
     - Se ha la patente (sì/no)  
     - Se ha un’auto (sì/no)  
   - Stampare:  
     - "Puoi guidare"  
     - "Non puoi guidare"  
