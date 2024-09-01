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

main();
