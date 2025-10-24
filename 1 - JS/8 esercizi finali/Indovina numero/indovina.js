let numeroSegreto;
let vite;
let noVite;
let min, max;

const setupDiv = document.getElementById("setup");
const gameDiv = document.getElementById("game");
const resultDiv = document.getElementById("result");

const viteInput = document.getElementById("tentativi");
const noTentativiInput = document.getElementById("noTentativi");

noTentativiInput.addEventListener("click", (e) => {
  if (e.target.checked) {
    viteInput.disabled = true;
    viteInput.value = "";
  } else {
    viteInput.disabled = false;
    viteInput.value = 10;
  }
});

document.getElementById("start").addEventListener("click", () => {
  min = Number(document.getElementById("min").value);
  max = Number(document.getElementById("max").value);
  vite = Number(viteInput.value);
  noVite = Boolean(noTentativiInput.checked);

  if (noVite) {
    if (isNaN(min) || isNaN(max) || min >= max) {
      alert("Controlla i valori inseriti!");
      return;
    }
  } else {
    if (isNaN(min) || isNaN(max) || isNaN(vite) || min >= max || vite <= 0) {
      alert("Controlla i valori inseriti!");
      return;
    }
  }

  numeroSegreto = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById("range").innerText = `${min} e ${max}`;
  if (noVite) {
    document.getElementById("vite").innerText = "∞";
  } else {
    document.getElementById("vite").innerText = vite;
  }
  document.getElementById("feedback").innerText = "";

  setupDiv.classList.add("hidden");
  gameDiv.classList.remove("hidden");
  resultDiv.classList.add("hidden");
});

document.getElementById("check").addEventListener("click", () => {
  const guess = Number(document.getElementById("guess").value);

  if (isNaN(guess)) {
    document.getElementById("feedback").innerText = "Inserisci un numero valido!";
    return;
  }

  if (!noVite) {
    vite--;
    document.getElementById("vite").innerText = vite;
  }
  
  if (guess === numeroSegreto) {
    endGame(true);
  } else if (!noVite && vite === 0) {
    endGame(false);
  } else if (guess < numeroSegreto) {
    document.getElementById("feedback").innerText = "Troppo basso!";
  } else {
    document.getElementById("feedback").innerText = "Troppo alto!";
  }
});

function endGame(vittoria) {
  gameDiv.classList.add("hidden");
  resultDiv.classList.remove("hidden");

  const finalMsg = document.getElementById("finalMessage");
  if (vittoria) {
    finalMsg.innerText = `🎉 Complimenti! Hai indovinato il numero ${numeroSegreto}!`;
    finalMsg.className = "success";
  } else {
    finalMsg.innerText = `❌ Hai perso! Il numero era ${numeroSegreto}.`;
    finalMsg.className = "error";
  }
}

document.getElementById("restart").addEventListener("click", () => {
  setupDiv.classList.remove("hidden");
  gameDiv.classList.add("hidden");
  resultDiv.classList.add("hidden");
  document.getElementById("guess").value = "";
  viteInput.value = 10;
  viteInput.disabled = false;
  noTentativiInput.checked = false;
});
