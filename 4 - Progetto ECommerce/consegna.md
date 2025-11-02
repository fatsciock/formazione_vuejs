# E-commerce

## Requisiti Dati

È richiesto di creare i dati mock per i prodotti del negozio.

**Struttura del Prodotto**
Ogni prodotto deve avere le seguenti caratteristiche:
*   `id`: `number`
*   `name`: `string`
*   `type`: `string` (es. "Abbigliamento", "Accessori", ecc.)
*   `unitPrice`: `number`
*   `availableQuantity`: `number`
*   `mainImageUrl`: `string`

**Creazione Dati Mock**
*   All'interno del progetto, creare un file per contenere i dati finti dei prodotti (es. `src/data/products.ts`).
*   Definire l'interfaccia TypeScript `Product` secondo la struttura sopra indicata.
*   Creare un array contenente un minimo di 6-8 prodotti di esempio, assicurandosi di includere diverse tipologie, prezzi vari e almeno un prodotto con quantità disponibile pari a 0.
*   Implementare ed esportare le funzioni `fetchAllProducts()` e `fetchProductById(id)` per accedere ai dati.

---

## Requisiti Pagine e Funzionalità

L'applicazione deve includere le seguenti pagine e funzionalità, gestite tramite Vue Router.

**Layout Globale**
*   Deve essere presente un componente di navigazione (header) persistente in tutte le pagine.
*   L'header deve contenere i link per navigare alle sezioni: **Home**, **Prodotti** e **Carrello**.

**Homepage (`/`)**
*   Deve presentare un titolo e un testo di benvenuto/descrittivo per l'e-commerce.
*   Deve contenere un link o un pulsante per accedere alla pagina con la lista dei prodotti.

**Pagina Lista Prodotti (`/prodotti`)**
*   **Area Filtri:** La pagina deve includere una sezione dedicata ai filtri, contenente:
    *   Un campo di input per la ricerca testuale per **nome** del prodotto.
    *   Una `select` per filtrare per **tipologia**.
    *   Un sistema per filtrare per **range di prezzo** (minimo e massimo).
    *   Una checkbox per mostrare solo i **prodotti disponibili** (`availableQuantity > 0`).
*   **Visualizzazione Prodotti:** Sotto i filtri, deve essere mostrata la lista dei prodotti che corrispondono ai criteri di ricerca attivi.
*   Ogni prodotto visualizzato deve essere cliccabile e reindirizzare alla rispettiva pagina di dettaglio.

**Pagina Dettaglio Prodotto (`/prodotti/:id`)**
*   La pagina deve mostrare tutte le informazioni di un singolo prodotto, caricato dinamicamente in base all' `id` presente nell'URL.
*   Deve essere presente un pulsante "Aggiungi al carrello".
*   Il pulsante "Aggiungi al carrello" deve essere disabilitato se `availableQuantity` del prodotto è 0.

**Pagina Carrello (`/carrello`)**
*   Questa pagina serve come segnaposto.
*   Deve contenere un titolo (es. "Carrello") e un testo indicativo che la sua funzionalità verrà implementata successivamente.