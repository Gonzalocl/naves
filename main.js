let progressBar = new ProgressBar(1080);

let gameInstructions = document.createElement("div");
gameInstructions.innerHTML = "Click: disparar.<br>" +
    "Espacio: m&aacute;s velocidad.<br>" +
    "Escape: salir.";
gameInstructions.style.color = "white";
gameInstructions.style.position = "fixed";
gameInstructions.style["inset-block-start"] = 0;
gameInstructions.style["inset-inline-start"] = 0;

document.body.appendChild(gameInstructions);

function closeGameInstructions() {
    document.body.removeChild(gameInstructions);
}

let enemyCounter = document.createElement("div");
enemyCounter.innerText = 0;
enemyCounter.style.color = "#125959";
enemyCounter.style["font-size"] = 40;
enemyCounter.style["font-weight"] = "bold";
enemyCounter.style.position = "fixed";
enemyCounter.style["inset-block-start"] = 0;
enemyCounter.style["inset-inline-start"] = 0;

function addEnemyCounter() {
    document.body.appendChild(enemyCounter);
}

function enemyCounterSetEnemies(e) {
    enemyCounter.innerText = e;
}

main();
