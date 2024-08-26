let ctx;
let canvas;

function Pantalla_Crea(titulo, w, h) {
    document.title = titulo;
    canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
}

function Pantalla_Libera() {
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

function Pantalla_Espera(ms) {
}

function Pantalla_Actualiza() {
}

function Pantalla_TeclaPulsada(scancode) {
}

function Pantalla_ColorTrazo(r, g, b, a) {
}

function Pantalla_ColorRelleno(r, g, b, a) {
}

function Pantalla_DibujaRellenoFondo(r, g, b, a) {
}

function Pantalla_DibujaPunto(x, y) {
}

function Pantalla_DibujaLinea(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function Pantalla_DibujaTriangulo(x1, y1, x2, y2, x3, y3) {
}

function Pantalla_DibujaRectangulo(x, y, w, h) {
}

function Pantalla_DibujaCirculo(x, y, r) {
}

function Pantalla_DibujaTexto(st, x, y) {
}

async function Pantalla_ImagenLee(fichero, transparencia) {
    const img = new Image();
    img.src = fichero;
    await img.decode();
    return img;
}

function Pantalla_DibujaImagen(imagen, x, y, w, h) {
    ctx.drawImage(imagen, x, y, w, h);
}

function Pantalla_ImagenAnchura(imagen) {
}

function Pantalla_ImagenAltura(imagen) {
}

function Pantalla_ImagenLibera(imagen) {
}

function Pantalla_RatonBotonPulsado(boton) {
	return false;
}

function Pantalla_RatonCoordenadas(x, y) {
}
