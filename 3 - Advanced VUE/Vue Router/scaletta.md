Scaletta lezione Vue Router:
- cos'è una SPA
- perchè ci serve Vue Router
- creazione progetto Vue con Vue Router
- spiega struttura progetto (app.use(router) e index.ts dentro la cartella router)

Logica con cui creiamo le rotte:
- partiamo da come si farebbe in un sito web normale: definiamo le pagine (Home, About, Catalogo, Dettagli Prodotto, Carrello, Checkout, Ordini)
- ogni pagina diventa una View che di fatto è un componente
- definiamo le rotte (associazione path-component) dentro l'index.ts del router

Come navigare:
- `router-view` e `router-link`

### Creaiamo la prima App multi pagina!
- in App mettiamo un piccolo header con le voci delle pagine a cui posso navigare (tramite `router-link`)
- in App inserisco la `router-view`

In questo esempio crea pagine molto semplici (Home, AboutUs, ...)

