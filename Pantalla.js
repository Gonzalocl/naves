let ctx;
let canvas;

let mouseX;
let mouseY;
let mouseClick;
let spaceDown;
let escapeDown;

let editorCanvas = document.createElement("canvas");
let editorCtx = editorCanvas.getContext("2d");

function Pantalla_Crea(titulo, w, h) {
    document.title = titulo;
    document.body.style.margin = "0";
    canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    canvas.style.background = "black";
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");

    document.onmousemove = function (e) {
        mouseX = e.clientX - canvas.getBoundingClientRect().left;
        mouseY = e.clientY - canvas.getBoundingClientRect().top;
    }

    document.onmousedown = function () {
        mouseClick = true;
    }

    document.onmouseup = function () {
        mouseClick = false;
    }

    document.ontouchmove = function (e) {
        mouseX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
        mouseY = e.touches[0].clientY - canvas.getBoundingClientRect().top;
    }

    document.ontouchstart = function () {
        mouseClick = true;
    }

    document.ontouchend = function () {
        mouseClick = false;
    }

    document.onkeydown = function (e) {
        if (e.code === "Space") {
            spaceDown = true;
        } else if (e.code === "Escape") {
            escapeDown = true;
        }
    }

    document.onkeyup = function (e) {
        if (e.code === "Space") {
            spaceDown = false;
        } else if (e.code === "Escape") {
            escapeDown = false;
        }
    }
}

function Pantalla_Libera() {
    close();
}

function Pantalla_Anchura() {
    return canvas.width;
}

function Pantalla_Altura() {
    return canvas.height;
}

function Pantalla_Activa() {
    return true;
}

function Pantalla_Actualiza() {
}

function Pantalla_TeclaPulsada(scancode) {
    if (scancode === SDL_SCANCODE_SPACE) {
        return spaceDown;
    }

    if (scancode === SDL_SCANCODE_ESCAPE) {
        return escapeDown;
    }

    return false;
}

function Pantalla_ColorTrazo(r, g, b, a) {
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
}

function Pantalla_DibujaRellenoFondo(r, g, b, a) {
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function Pantalla_DibujaLinea(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

async function Pantalla_ImagenLee(fichero, transparencia) {
    const img = document.createElement("img");
    img.src = fichero;
    await img.decode();
    if (!transparencia) {
        return img;
    }

    editorCanvas.width = img.width;
    editorCanvas.height = img.height;
    editorCtx.drawImage(img, 0, 0);
    let imageData = editorCtx.getImageData(0, 0, img.width, img.height);
    let data = imageData.data;
    let r = data[0];
    let g = data[1];
    let b = data[2];

    for (let i = 0; i < data.length; i += 4) {
        if (data[i] === r && data[i + 1] === g && data[i + 2] === b) {
            data[i + 3] = 0;
        }
    }

    editorCtx.putImageData(imageData, 0, 0);
    img.src = editorCanvas.toDataURL();
    await img.decode();

    return img;
}

function Pantalla_DibujaImagen(imagen, x, y, w, h) {
    ctx.drawImage(imagen, x, y, w, h);
}

function Pantalla_ImagenAnchura(imagen) {
    return imagen.width;
}

function Pantalla_ImagenAltura(imagen) {
    return imagen.height;
}

function Pantalla_ImagenLibera(imagen) {
}

function Pantalla_RatonBotonPulsado(boton) {
    if (boton === SDL_BUTTON_LEFT) {
        return mouseClick;
    }

    return false;
}

function Pantalla_RatonCoordenadas() {
    return {mouseX, mouseY};
}
