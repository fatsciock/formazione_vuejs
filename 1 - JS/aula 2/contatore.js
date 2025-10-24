/**
 * Creare una pagina in cui è presente
 * un contatore che parte da 0.
 * Deve essere possibile incrementarlo
 * e decrementarlo tramite 2 diversi
 * pulsanti. 
 */

let contatore = 0;
document.getElementById("meno").addEventListener("click", () => {
  contatore--;
  document.getElementById("contatore").innerText = contatore;
});
document.getElementById("piu").addEventListener("click", () => {
  contatore++;
  document.getElementById("contatore").innerText = contatore;
});