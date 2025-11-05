# Problema
Se ho 3 componenti Header, LoginView e ProfileView, come posso far sì che l'Header mostri Login o Logout in base allo stato dell'utente?

Potrei tramite prop ma si crea il problema del *prop drilling*

# Soluzione: Pinia
Si utilizza uno store centralizzato.

## 3 pilastri di uno store
- State: contiene i dati dello store (es. un oggetto User e il relativo token)
- Getters: consentono di leggere i valori (es. isLoggedIn)
- Actions: funzioni che consentono di interagire con lo store (es. login() e logout())

