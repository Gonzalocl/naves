const NAVE = 0
const MALO = 1
const FRECUENCIA = 20

async function main(argc, argv) {

    Pantalla_Crea("Light", ANCHO, ALTO);

    let cargando = await Pantalla_ImagenLee("Img/Cargando.bmp", 1);
    Pantalla_DibujaImagen(cargando, ANCHO / 2 - 546 / 2, ALTO / 2 - 119 / 2, 546, 119);
    Pantalla_Actualiza();

    let empezar1 = await Pantalla_ImagenLee("Img/Menu/Empezar1.bmp", 0);
    let empezar2 = await Pantalla_ImagenLee("Img/Menu/Empezar2.bmp", 0);
    let salir1 = await Pantalla_ImagenLee("Img/Menu/Salir1.bmp", 0);
    let salir2 = await Pantalla_ImagenLee("Img/Menu/Salir2.bmp", 0);

    let imgnave = [];
    await Cargar_Imagenes("Nave", imgnave);
    let imgmalo = [];
    await Cargar_Imagenes("Malo", imgmalo);
    let imgbala = [];
    await Cargar_Imagenes("Bala", imgbala);

    closeGameInstructions();
    progressBar.close();

    let balas = Crea_Lista();
    let malos = Crea_Lista();
    let nave = Crea_Nave(NAVE);
    let f = Fractal_Crea(Pantalla_Anchura() / 2, 0, 1);
    let g = Fractal_Crea(225, Pantalla_Altura(), -1);
    let h = Fractal_Crea(Pantalla_Anchura() - 225, Pantalla_Altura(), -1);

    let x = 0;
    let y = 0;
    let sal = 0;
    let juego = 0;
    let contador = 0;

    function MainLoop() {
        if (Pantalla_Activa() && !sal) {
            const {mouseX: x, mouseY: y} = Pantalla_RatonCoordenadas();
            Pantalla_DibujaRellenoFondo(0, 0, 100, 255);
            Fractal_Dibuja(f);
            Fractal_Dibuja(g);
            Fractal_Dibuja(h);

            if (juego) {
                if ((rand() % FRECUENCIA) === 0) {
                    Inserta_Lista(malos, Crea_Nave(MALO));
                    contador++;
                    console.log(contador);
                }
                Actualiza_ListaBalas(balas);
                Actualiza_NavePrincipal(nave, x, y);
                Actualiza_Lista(malos, Get_NavePosicionX(nave), Get_NavePosicionY(nave));
                Colision_ListaConLista(balas, malos);
                Dibuja_Lista(balas, imgbala);
                Dibuja_Lista(malos, imgmalo);
                Dibuja_Nave(nave, imgnave);
                if (Pantalla_RatonBotonPulsado(SDL_BUTTON_LEFT)) {
                    Inserta_Lista(balas, Crea_Bala(nave));
                }
                if (Pantalla_TeclaPulsada(SDL_SCANCODE_ESCAPE) || Colision_NaveConLista(nave, malos)) {
                    juego = 0;
                    Libera_Lista(balas);
                    Libera_Lista(malos);
                    Libera_Nave(nave);
                }
            } else {
                if (x > 1366 / 2 - 375 / 2 && x < 1366 / 2 + 375 / 2 && y > 150 && y < 150 + 126) {
                    Pantalla_DibujaImagen(empezar2, Pantalla_Anchura() / 2 - 416 / 2, 144, 416, 139);
                    if (Pantalla_RatonBotonPulsado(SDL_BUTTON_LEFT)) {
                        juego = 1;
                        balas = Crea_Lista();
                        malos = Crea_Lista();
                        nave = Crea_Nave(NAVE);
                    }
                } else {
                    Pantalla_DibujaImagen(empezar1, Pantalla_Anchura() / 2 - 375 / 2, 150, 375, 126);
                }

                if (x > 1366 / 2 - 372 / 2 && x < 1366 / 2 + 372 / 2 && y > 350 && y < 350 + 126) {
                    Pantalla_DibujaImagen(salir2, Pantalla_Anchura() / 2 - 413 / 2, 344, 413, 139);
                    if (Pantalla_RatonBotonPulsado(SDL_BUTTON_LEFT)) {
                        sal = 1;
                    }
                } else {
                    Pantalla_DibujaImagen(salir1, Pantalla_Anchura() / 2 - 372 / 2, 350, 372, 126);
                }
            }
            Pantalla_Actualiza();
            setTimeout(MainLoop, 40);
        } else {
            Fractal_Libera(f);
            Fractal_Libera(g);
            Fractal_Libera(h);
            Pantalla_ImagenLibera(empezar1);
            Pantalla_ImagenLibera(empezar2);
            Pantalla_ImagenLibera(salir1);
            Pantalla_ImagenLibera(salir2);
            Pantalla_ImagenLibera(cargando);
            Libera_Imagenes(imgmalo);
            Libera_Imagenes(imgnave);
            Pantalla_Libera();
        }
    }

    MainLoop();
    return 0;
}

