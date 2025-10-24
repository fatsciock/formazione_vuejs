# Lezione introduttiva a Vue 3 (Composition API + TS)

## 1. Introduzione a Vue.js e Composition API (20 min)

- **Cos’è Vue.js:** framework per interfacce reactive
- **Perché usare Vue:** gestione del DOM, binding dati automatico, componenti riutilizzabili
- **Composition API vs Options API:**
  - Composition API → logica organizzata tramite `setup()`
  - Uso di `ref`, `reactive`, `computed` per gestire dati reattivi

---

## 2. Creare un progetto Vue 3 con npm + TypeScript (15 min)

- Comando:  
  ```bash
  npm create vue@latest
  ```
- Selezionare:
  - TypeScript
  - ESLint
  - Router/Pinia → **non selezionati**
- Spiegazione della struttura generata:
  - `src/main.ts` → punto di ingresso
  - `src/App.vue` → componente root
  - `src/components/` → componenti figli
  - `tsconfig.json` e `.eslintrc.cjs` già configurati