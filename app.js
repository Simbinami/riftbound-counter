const STORAGE_KEY = "riftbound-counter-v4";

const ACCENTS = ["#ff7b7b", "#b7a6ff", "#7ee2a8", "#ffbd78", "#f3f6fa", "#f7dd72", "#e8a83c", "#64ceee", "#ff96c8", "#8fd8ff"];

const CHAMPIONS = [
  // Selección original del usuario
  { id: "Jinx", name: "Jinx", img: "champions/Jinx.png", accent: ACCENTS[0] },
  { id: "Vex", name: "Vex", img: "champions/Vex.png", accent: ACCENTS[1] },
  { id: "MasterYi", name: "Maestro Yi", img: "champions/MasterYi.png", accent: ACCENTS[2] },
  { id: "Annie", name: "Annie", img: "champions/Annie.png", accent: ACCENTS[3] },
  { id: "Fiora", name: "Fiora", img: "champions/Fiora.png", accent: ACCENTS[4] },
  { id: "LeeSin", name: "Lee Sin", img: "champions/LeeSin.png", accent: ACCENTS[6] },
  { id: "Nasus", name: "Nasus", img: "champions/Nasus.png", accent: ACCENTS[5] },
  { id: "Yasuo", name: "Yasuo", img: "champions/Yasuo.png", accent: ACCENTS[7] },
  // Origins (OGN + Proving Grounds)
  { id: "Ahri", name: "Ahri", img: "champions/Ahri.png", accent: ACCENTS[8] },
  { id: "Darius", name: "Darius", img: "champions/Darius.png", accent: ACCENTS[9] },
  { id: "Kaisa", name: "Kai'Sa", img: "champions/Kaisa.png", accent: ACCENTS[0] },
  { id: "Leona", name: "Leona", img: "champions/Leona.png", accent: ACCENTS[4] },
  { id: "MissFortune", name: "Miss Fortune", img: "champions/MissFortune.png", accent: ACCENTS[8] },
  { id: "Sett", name: "Sett", img: "champions/Sett.png", accent: ACCENTS[9] },
  { id: "Teemo", name: "Teemo", img: "champions/Teemo.png", accent: ACCENTS[2] },
  { id: "Viktor", name: "Viktor", img: "champions/Viktor.png", accent: ACCENTS[1] },
  { id: "Volibear", name: "Volibear", img: "champions/Volibear.png", accent: ACCENTS[6] },
  { id: "Garen", name: "Garen", img: "champions/Garen.png", accent: ACCENTS[3] },
  { id: "Lux", name: "Lux", img: "champions/Lux.png", accent: ACCENTS[5] },
  // Spiritforged
  { id: "Azir", name: "Azir", img: "champions/Azir.png", accent: ACCENTS[7] },
  { id: "Draven", name: "Draven", img: "champions/Draven.png", accent: ACCENTS[0] },
  { id: "Ezreal", name: "Ezreal", img: "champions/Ezreal.png", accent: ACCENTS[4] },
  { id: "Irelia", name: "Irelia", img: "champions/Irelia.png", accent: ACCENTS[9] },
  { id: "Jax", name: "Jax", img: "champions/Jax.png", accent: ACCENTS[1] },
  { id: "Lucian", name: "Lucian", img: "champions/Lucian.png", accent: ACCENTS[6] },
  { id: "Ornn", name: "Ornn", img: "champions/Ornn.png", accent: ACCENTS[3] },
  { id: "Reksai", name: "Rek'Sai", img: "champions/Reksai.png", accent: ACCENTS[5] },
  { id: "RenataGlasc", name: "Renata Glasc", img: "champions/RenataGlasc.png", accent: ACCENTS[2] },
  { id: "Rumble", name: "Rumble", img: "champions/Rumble.png", accent: ACCENTS[8] },
  { id: "Sivir", name: "Sivir", img: "champions/Sivir.png", accent: ACCENTS[7] },
  // Unleashed
  { id: "Diana", name: "Diana", img: "champions/Diana.png", accent: ACCENTS[3] },
  { id: "Ivern", name: "Ivern", img: "champions/Ivern.png", accent: ACCENTS[2] },
  { id: "Jhin", name: "Jhin", img: "champions/Jhin.png", accent: ACCENTS[6] },
  { id: "Khazix", name: "Kha'Zix", img: "champions/Khazix.png", accent: ACCENTS[1] },
  { id: "Leblanc", name: "LeBlanc", img: "champions/Leblanc.png", accent: ACCENTS[9] },
  { id: "Lillia", name: "Lillia", img: "champions/Lillia.png", accent: ACCENTS[5] },
  { id: "Poppy", name: "Poppy", img: "champions/Poppy.png", accent: ACCENTS[0] },
  { id: "Pyke", name: "Pyke", img: "champions/Pyke.png", accent: ACCENTS[4] },
  { id: "Rengar", name: "Rengar", img: "champions/Rengar.png", accent: ACCENTS[8] },
  { id: "Vi", name: "Vi", img: "champions/Vi.png", accent: ACCENTS[3] },
  // Vendetta
  { id: "Akali", name: "Akali", img: "champions/Akali.png", accent: ACCENTS[2] },
  { id: "Ambessa", name: "Ambessa", img: "champions/Ambessa.png", accent: ACCENTS[6] },
  { id: "Jayce", name: "Jayce", img: "champions/Jayce.png", accent: ACCENTS[1] },
  { id: "Kennen", name: "Kennen", img: "champions/Kennen.png", accent: ACCENTS[5] },
  { id: "Mel", name: "Mel", img: "champions/Mel.png", accent: ACCENTS[9] },
  { id: "Renekton", name: "Renekton", img: "champions/Renekton.png", accent: ACCENTS[0] },
  { id: "Shen", name: "Shen", img: "champions/Shen.png", accent: ACCENTS[4] },
  { id: "Zed", name: "Zed", img: "champions/Zed.png", accent: ACCENTS[3] },
  // Radiance (set 5 · salida 23/10/2026)
  { id: "Ekko", name: "Ekko", img: "champions/Ekko.png", accent: ACCENTS[5] },
  { id: "Seraphine", name: "Seraphine", img: "champions/Seraphine.png", accent: ACCENTS[8] },
  { id: "Evelynn", name: "Evelynn", img: "champions/Evelynn.png", accent: ACCENTS[1] },
  { id: "Ziggs", name: "Ziggs", img: "champions/Ziggs.png", accent: ACCENTS[3] },
  { id: "JarvanIV", name: "Jarvan IV", img: "champions/JarvanIV.png", accent: ACCENTS[7] },
  { id: "Orianna", name: "Orianna", img: "champions/Orianna.png", accent: ACCENTS[6] },
];
const CHAMPIONS_INDEX = new Map(CHAMPIONS.map((champion) => [champion.id, champion]));
const championById = (id) => CHAMPIONS_INDEX.get(id);
const isValidChampion = (id) => championById(id) !== undefined;

const isScoreArray = (scores) =>
  Array.isArray(scores) && scores.length === 2 && scores.every((score) => Number.isSafeInteger(score) && score >= 0);

const defaultState = () => ({
  names: ["Jugador 1", "Jugador 2"],
  champions: [CHAMPIONS[0].id, CHAMPIONS[3].id],
  rounds: 1,
  roundWins: [0, 0],
  roundWon: false,
  scores: [0, 0],
});
let state = defaultState();

try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (
    saved &&
    Array.isArray(saved.names) && saved.names.length === 2 && saved.names.every((name) => typeof name === "string") &&
    isScoreArray(saved.scores) &&
    Array.isArray(saved.champions) && saved.champions.length === 2 && saved.champions.every(isValidChampion) &&
    saved.champions[0] !== saved.champions[1] &&
    Number.isSafeInteger(saved.rounds) && saved.rounds >= 1 && saved.rounds <= 3 &&
    Array.isArray(saved.roundWins) && saved.roundWins.length === 2 &&
    saved.roundWins.every((wins) => Number.isSafeInteger(wins) && wins >= 0 && wins <= saved.rounds) &&
    saved.roundWins[0] + saved.roundWins[1] <= saved.rounds &&
    typeof saved.roundWon === "boolean"
  ) {
    state = {
      names: saved.names.map((name) => name.slice(0, 30)),
      champions: saved.champions,
      rounds: saved.rounds,
      roundWins: saved.roundWins,
      roundWon: saved.roundWon,
      scores: saved.scores,
    };
  }
} catch {
  savedError();
}

function savedError() {
  document.getElementById("storage-note").textContent =
    "No se pudo recuperar la serie guardada. Mantén esta página abierta.";
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    document.getElementById("storage-note").textContent =
      "No se puede guardar en este navegador. Si cierras o recargas, puedes perder la partida.";
  }
}

const setupSection = document.getElementById("setup-screen");
const gameSection = document.getElementById("game-screen");
const setupInputs = [0, 1].map((player) => document.getElementById(`setup-name-${player}`));
const champContainers = [0, 1].map((player) => document.getElementById(`champs-${player}`));
const roundOptions = document.getElementById("round-options");
const playerCards = [...document.querySelectorAll(".player")];
const gameNames = [0, 1].map((player) => document.getElementById(`game-name-${player}`));
const gameChamps = [0, 1].map((player) => document.getElementById(`game-champ-${player}`));
const roundDots = [0, 1].map((player) => document.getElementById(`rounds-${player}`));
const roundHeading = document.getElementById("round-heading");
const statusEl = document.getElementById("status");

function show(screen) {
  setupSection.hidden = screen !== "setup";
  gameSection.hidden = screen !== "game";
  document.getElementById("victory-screen").hidden = screen !== "victory";
  window.scrollTo(0, 0);
}

function applyChampions() {
  [0, 1].forEach((player) => {
    const champion = championById(state.champions[player]);
    playerCards[player].style.setProperty("--accent", champion.accent);
    gameChamps[player].src = champion.img;
    gameChamps[player].alt = `Campeón de ${state.names[player]}: ${champion.name}`;
  });
}

function renderChampions() {
  [0, 1].forEach((player) => {
    const container = champContainers[player];
    container.replaceChildren();
    const otherChampion = state.champions[1 - player];
    for (const champion of CHAMPIONS) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "champ-btn";
      button.style.setProperty("--accent", champion.accent);
      button.title = champion.name;
      button.setAttribute("aria-label", `Champion ${champion.name}`);
      button.setAttribute("aria-pressed", String(champion.id === state.champions[player]));
      button.disabled = champion.id === otherChampion;
      const image = document.createElement("img");
      image.src = champion.img;
      image.alt = "";
      const label = document.createElement("span");
      label.textContent = champion.name;
      button.append(image, label);
      button.addEventListener("click", () => {
        state.champions[player] = champion.id;
        save();
        renderChampions();
        applyChampions();
      });
      container.appendChild(button);
    }
  });
}

function renderRoundOptions() {
  roundOptions.replaceChildren();
  for (const rounds of [1, 2, 3]) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = `${rounds} ${rounds === 1 ? "ronda" : "rondas"}`;
    button.setAttribute("aria-pressed", String(state.rounds === rounds));
    button.addEventListener("click", () => {
      state.rounds = rounds;
      state.roundWins = state.roundWins.map((wins) => Math.min(wins, rounds));
      if (state.roundWins[0] + state.roundWins[1] > state.rounds) {
        state.roundWins = [0, 0];
        state.roundWon = false;
      }
      save();
      renderRoundOptions();
      renderGame();
    });
    roundOptions.appendChild(button);
  }
}

function renderRoundDots() {
  [0, 1].forEach((player) => {
    roundDots[player].replaceChildren();
    for (let round = 0; round < state.rounds; round += 1) {
      const dot = document.createElement("span");
      dot.classList.toggle("won", round < state.roundWins[player]);
      roundDots[player].appendChild(dot);
    }
  });
}

state.names.forEach((name, player) => {
  setupInputs[player].value = name;
  setupInputs[player].addEventListener("input", () => {
    state.names[player] = setupInputs[player].value.slice(0, 30);
    save();
  });
});

document.getElementById("start").addEventListener("click", () => {
  state.names = setupInputs.map((input, player) => input.value.trim().slice(0, 30) || `Jugador ${player + 1}`);
  setupInputs.forEach((input, player) => {
    input.value = state.names[player];
  });
  const seriesComplete = state.roundWins[0] + state.roundWins[1] >= state.rounds;
  if (seriesComplete) {
    state.scores = [0, 0];
    state.roundWins = [0, 0];
    state.roundWon = false;
  }
  save();
  renderGame();
  show("game");
});

function resetSeries() {
  state.names = ["Jugador 1", "Jugador 2"];
  state.champions = [CHAMPIONS[0].id, CHAMPIONS[3].id];
  state.scores = [0, 0];
  state.roundWins = [0, 0];
  state.roundWon = false;
  setupInputs.forEach((input, player) => {
    input.value = state.names[player];
  });
  save();
  applyChampions();
  renderChampions();
  renderGame();
}

document.getElementById("open-setup").addEventListener("click", () => {
  const inProgress = state.scores.some((score) => score > 0) || state.roundWins.some((wins) => wins > 0);
  if (inProgress && !window.confirm(
    "¿Salir de la partida? Se borrarán los puntos, las rondas ganadas, los nombres y los campeones elegidos: la configuración volverá a cero."
  )) return;
  resetSeries();
  show("setup");
});

function renderGame() {
  [0, 1].forEach((player) => {
    gameNames[player].textContent = state.names[player];
    gameChamps[player].alt = `Campeón de ${state.names[player]}: ${championById(state.champions[player]).name}`;
    document.getElementById(`score-${player}`).textContent = state.scores[player];
    document.querySelector(`[data-player="${player}"][data-delta="-1"]`).disabled = state.scores[player] === 0;
  });
  const winsTotal = state.roundWins[0] + state.roundWins[1];
  const currentRound = state.roundWon ? winsTotal : winsTotal + 1;
  roundHeading.textContent = `Ronda ${Math.min(currentRound, state.rounds)} de ${state.rounds}`;
  roundHeading.hidden = state.rounds === 1;
  renderRoundDots();
  statusEl.textContent = state.scores.some((score) => score >= 8)
    ? "Objetivo alcanzado. Comprobad que el último punto es válido antes de dar la partida por terminada."
    : "Registra los puntos después de comprobar la jugada.";
}

document.querySelectorAll("[data-delta]").forEach((button) => {
  button.addEventListener("click", () => {
    const player = Number(button.dataset.player);
    const next = state.scores[player] + Number(button.dataset.delta);
    if (!Number.isSafeInteger(next) || next < 0) return;
    if (Number(button.dataset.delta) === 1 && next === 8) {
      const confirmed = window.confirm(
        "Antes de sumar el octavo punto:\n\n" +
        "Si procede de una conquista, debes haber puntuado los demás campos de batalla este mismo turno. Si no se cumple, robas una carta en lugar de sumar el punto.\n\n" +
        "Si procede de mantener un campo o de un efecto de carta que concede puntos, esta restricción de conquista no se aplica.\n\n" +
        "¿Es válido el punto? Pulsa Aceptar para sumarlo o Cancelar para mantener el marcador."
      );
      if (!confirmed) return;
    }
    state.scores[player] = next;
    save();
    renderGame();
    if (next >= 8) showVictory(player);
  });
});

function showVictory(player) {
  const champion = championById(state.champions[player]);
  if (!state.roundWon && state.roundWins[0] + state.roundWins[1] < state.rounds) {
    state.roundWins[player] += 1;
    state.roundWon = true;
    save();
    renderGame();
  }
  const card = document.querySelector(".victory-card");
  card.style.setProperty("--accent", champion.accent);
  document.getElementById("victory-champ").src = champion.img;
  document.getElementById("victory-champ").alt = `Campeón ganador: ${champion.name}`;
  document.getElementById("victory-name").textContent = state.names[player];
  document.getElementById("victory-score").textContent = state.scores[player];
  document.getElementById("victory-rounds").textContent = `${state.roundWins[0]} – ${state.roundWins[1]}`;
  show("victory");
}

document.getElementById("back-to-score").addEventListener("click", () => {
  show("game");
});

document.getElementById("new-match").addEventListener("click", () => {
  const seriesComplete = state.roundWins[0] + state.roundWins[1] >= state.rounds;
  const message = seriesComplete
    ? "Serie completada. ¿Empezar una serie nueva con estos mismos jugadores? Se borrarán puntos y rondas ganadas."
    : "¿Empezar la siguiente ronda? Se borrarán los puntos de esta ronda. Los nombres y campeones se conservarán.";
  if (!window.confirm(message)) return;
  state.scores = [0, 0];
  state.roundWon = false;
  if (seriesComplete) state.roundWins = [0, 0];
  save();
  renderGame();
  show("game");
});

applyChampions();
renderChampions();
renderRoundOptions();
renderGame();
show("setup");

// Registra el service worker (solo con https o localhost: necesario para instalar la app)
const canInstallPWA = location.protocol === "https:" || location.hostname === "localhost" || location.hostname === "127.0.0.1";
if (canInstallPWA && "serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
