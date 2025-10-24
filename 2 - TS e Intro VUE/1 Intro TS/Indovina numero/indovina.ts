enum GameState {
  Setup,
  Playing,
  Ended,
}

let numeroSegreto: number;
let vite: number;
let noVite: boolean;
let min: number, max: number;
let stato: GameState = GameState.Setup;

const setupDiv = document.getElementById("setup") as HTMLDivElement;
const gameDiv = document.getElementById("game") as HTMLDivElement;
const resultDiv = document.getElementById("result") as HTMLDivElement;

const viteInput = document.getElementById("tentativi") as HTMLInputElement;
const noTentativiInput = document.getElementById("noTentativi") as HTMLInputElement;

// --- Gestione toggle vite ---
noTentativiInput.addEventListener("click", (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.checked) {
    viteInput.disabled = true;
    viteInput.value = "";
  } else {
    viteInput.disabled = false;
    viteInput.value = "10";
  }
});

// --- Avvio gioco ---
document.getElementById("start")?.addEventListener("click", () => {
  min = Number((document.getElementById("min") as HTMLInputElement).value);
  max = Number((document.getElementById("max") as HTMLInputElement).value);
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

  (document.getElementById("range") as HTMLElement).innerText = `${min} e ${max}`;
  (document.getElementById("vite") as HTMLElement).innerText = noVite ? "∞" : vite.toString();
  (document.getElementById("feedback") as HTMLElement).innerText = "";

  cambiaStato(GameState.Playing);
});

// --- Check tentativo ---
document.getElementById("check")?.addEventListener("click", checkTentativo);
document.getElementById("guess")?.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Enter") {
        checkTentativo();
    }
});

function checkTentativo(): void {
if (stato !== GameState.Playing) return;

  const guess = Number((document.getElementById("guess") as HTMLInputElement).value);

  if (isNaN(guess)) {
    (document.getElementById("feedback") as HTMLElement).innerText = "Inserisci un numero valido!";
    return;
  }

  if (!noVite) {
    vite--;
    (document.getElementById("vite") as HTMLElement).innerText = vite.toString();
  }

  if (guess === numeroSegreto) {
    endGame(true);
  } else if (!noVite && vite === 0) {
    endGame(false);
  } else if (guess < numeroSegreto) {
    (document.getElementById("feedback") as HTMLElement).innerText = "Troppo basso!";
  } else {
    (document.getElementById("feedback") as HTMLElement).innerText = "Troppo alto!";
  }
}

// --- Funzione fine partita ---
function endGame(vittoria: boolean): void {
  cambiaStato(GameState.Ended);

  const finalMsg = document.getElementById("finalMessage") as HTMLElement;
  if (vittoria) {
    finalMsg.innerText = `🎉 Complimenti! Hai indovinato il numero ${numeroSegreto}!`;
    finalMsg.className = "success";
  } else {
    finalMsg.innerText = `❌ Hai perso! Il numero era ${numeroSegreto}.`;
    finalMsg.className = "error";
  }
}

// --- Restart ---
document.getElementById("restart")?.addEventListener("click", () => {
  (document.getElementById("guess") as HTMLInputElement).value = "";
  viteInput.value = "10";
  viteInput.disabled = false;
  noTentativiInput.checked = false;
  cambiaStato(GameState.Setup);
});

// --- Gestore dello stato ---
function cambiaStato(nuovoStato: GameState): void {
  stato = nuovoStato;

  switch (stato) {
    case GameState.Setup:
      setupDiv.classList.remove("hidden");
      gameDiv.classList.add("hidden");
      resultDiv.classList.add("hidden");
      break;

    case GameState.Playing:
      setupDiv.classList.add("hidden");
      gameDiv.classList.remove("hidden");
      resultDiv.classList.add("hidden");
      break;

    case GameState.Ended:
      setupDiv.classList.add("hidden");
      gameDiv.classList.add("hidden");
      resultDiv.classList.remove("hidden");
      break;
  }
}
