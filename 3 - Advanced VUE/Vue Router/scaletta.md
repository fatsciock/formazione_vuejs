Scaletta lezione Vue Router:
- cos'è una SPA
- perchè ci serve Vue Router
- creazione progetto Vue con Vue Router
- spiega struttura progetto (app.use(router) e index.ts dentro la cartella router)
- prima parte:
    - esempi semplici su pagine vuote in cui cambia giusto il titolo della pagina (con router-view e router-link/router.push())
    - rotte dinamiche con parametri (:nomeParametro nella rotta)
    - fare esempi con degli Utenti (Users): esiste una lista di utenti (UsersList) e una pagina con i dettagli di un utente (UserDetails), oltre ad altre pagine come AboutUsView e HomeView
- seconda parte:
    - iniziare il progetto dell'e-commerce: condividere i requisiti funzionali e quindi le pagine che dovranno essere presenti (ancora in definizione)


Logica con cui creiamo le rotte:
- partiamo da come si farebbe in un sito web normale: definiamo le pagine (Home, About, Catalogo, Dettagli Prodotto, Carrello, Checkout, Ordini)
- ogni pagina diventa una View che di fatto è un componente
- definiamo le rotte (associazione path-component) dentro l'index.ts del router

Come navigare:
- `router-view` e `router-link`
