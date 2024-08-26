
async function main() {
    Pantalla_Crea("TIT", 500, 250);

    let imagen = await Pantalla_ImagenLee("Img/Cargando.bmp", 1);
    Pantalla_DibujaImagen(imagen, 100, 100, 100, 100)
}

main()
