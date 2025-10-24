var _a, _b, _c, _d;
var GameState;
(function (GameState) {
    GameState[GameState["Setup"] = 0] = "Setup";
    GameState[GameState["Playing"] = 1] = "Playing";
    GameState[GameState["Ended"] = 2] = "Ended";
})(GameState || (GameState = {}));
var numeroSegreto;
var vite;
var noVite;
var min, max;
var stato = GameState.Setup;
var setupDiv = document.getElementById("setup");
var gameDiv = document.getElementById("game");
var resultDiv = document.getElementById("result");
var viteInput = document.getElementById("tentativi");
var noTentativiInput = document.getElementById("noTentativi");
// --- Gestione toggle vite ---
noTentativiInput.addEventListener("click", function (e) {
    var target = e.target;
    if (target.checked) {
        viteInput.disabled = true;
        viteInput.value = "";
    }
    else {
        viteInput.disabled = false;
        viteInput.value = "10";
    }
});
// --- Avvio gioco ---
(_a = document.getElementById("start")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);
    vite = Number(viteInput.value);
    noVite = Boolean(noTentativiInput.checked);
    if (noVite) {
        if (isNaN(min) || isNaN(max) || min >= max) {
            alert("Controlla i valori inseriti!");
            return;
        }
    }
    else {
        if (isNaN(min) || isNaN(max) || isNaN(vite) || min >= max || vite <= 0) {
            alert("Controlla i valori inseriti!");
            return;
        }
    }
    numeroSegreto = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("range").innerText = "".concat(min, " e ").concat(max);
    document.getElementById("vite").innerText = noVite ? "∞" : vite.toString();
    document.getElementById("feedback").innerText = "";
    cambiaStato(GameState.Playing);
});
// --- Check tentativo ---
(_b = document.getElementById("check")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", checkTentativo);
(_c = document.getElementById("guess")) === null || _c === void 0 ? void 0 : _c.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        checkTentativo();
    }
});
function checkTentativo() {
    if (stato !== GameState.Playing)
        return;
    var guess = Number(document.getElementById("guess").value);
    if (isNaN(guess)) {
        document.getElementById("feedback").innerText = "Inserisci un numero valido!";
        return;
    }
    if (!noVite) {
        vite--;
        document.getElementById("vite").innerText = vite.toString();
    }
    if (guess === numeroSegreto) {
        endGame(true);
    }
    else if (!noVite && vite === 0) {
        endGame(false);
    }
    else if (guess < numeroSegreto) {
        document.getElementById("feedback").innerText = "Troppo basso!";
    }
    else {
        document.getElementById("feedback").innerText = "Troppo alto!";
    }
}
// --- Funzione fine partita ---
function endGame(vittoria) {
    cambiaStato(GameState.Ended);
    var finalMsg = document.getElementById("finalMessage");
    if (vittoria) {
        finalMsg.innerText = "\uD83C\uDF89 Complimenti! Hai indovinato il numero ".concat(numeroSegreto, "!");
        finalMsg.className = "success";
    }
    else {
        finalMsg.innerText = "\u274C Hai perso! Il numero era ".concat(numeroSegreto, ".");
        finalMsg.className = "error";
    }
}
// --- Restart ---
(_d = document.getElementById("restart")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    document.getElementById("guess").value = "";
    viteInput.value = "10";
    viteInput.disabled = false;
    noTentativiInput.checked = false;
    cambiaStato(GameState.Setup);
});
// --- Gestore dello stato ---
function cambiaStato(nuovoStato) {
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
