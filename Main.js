#include "Pantalla.h"
#include "Naves.h"
#include "ListaNaves.h"
#include "Fractal.h"
#include <stdio.h>
#include <time.h>
#include <stdlib.h>

#define NAVE 0
#define MALO 1
#define FRECUENCIA 20

int main ( int argc, char **argv ) {

	srand(time(NULL));

	Pantalla_Crea("Light", ANCHO, ALTO);

    Imagen cargando = Pantalla_ImagenLee("Img/Cargando.bmp", 1);
	Pantalla_DibujaImagen(cargando, ANCHO/2-546/2, ALTO/2-119/2, 546, 119);
	Pantalla_Actualiza();


	Imagen empezar1 = Pantalla_ImagenLee("Img/Menu/Empezar1.bmp", 0);
	Imagen empezar2 = Pantalla_ImagenLee("Img/Menu/Empezar2.bmp", 0);
	Imagen salir1 = Pantalla_ImagenLee("Img/Menu/Salir1.bmp", 0);
	Imagen salir2 = Pantalla_ImagenLee("Img/Menu/Salir2.bmp", 0);



	Imagen imgnave[360];
	Cargar_Imagenes("Nave", imgnave);
	Imagen imgmalo[360];
	Cargar_Imagenes("Malo", imgmalo);
	Imagen imgbala[360];
	Cargar_Imagenes("Bala", imgbala);

	Lista balas = Crea_Lista();
	Lista malos = Crea_Lista();
	Nave nave = Crea_Nave(NAVE);
	Fractal f = Fractal_Crea(Pantalla_Anchura()/2, 0, 1);
	Fractal g = Fractal_Crea(225, Pantalla_Altura(), -1);
	Fractal h = Fractal_Crea(Pantalla_Anchura()-225, Pantalla_Altura(), -1);

	double x = 0;
	double y = 0;
	int sal = 0;
	int juego = 0;
	int contador = 0;

	while (Pantalla_Activa() && !sal) {
		Pantalla_RatonCoordenadas(&x, &y);
		Pantalla_DibujaRellenoFondo(0, 0, 100, 255);
		Fractal_Dibuja(f);
		Fractal_Dibuja(g);
		Fractal_Dibuja(h);

		if (juego) {
			if ( (rand()%FRECUENCIA) == 0 ) {
				Inserta_Lista(malos, Crea_Nave(MALO));
				contador ++;
				printf ("%d\n", contador);
			}
			if (Pantalla_RatonBotonPulsado(SDL_BUTTON_LEFT)) {
				Inserta_Lista (balas, Crea_Bala(nave));
			}
			Actualiza_ListaBalas (balas);
			Actualiza_NavePrincipal(nave, x, y);
			Actualiza_Lista(malos, Get_NavePosicionX(nave), Get_NavePosicionY(nave));
			Colision_ListaConLista(balas, malos);
			Dibuja_Lista(balas, imgbala);
			Dibuja_Lista(malos, imgmalo);
			Dibuja_Nave(nave, imgnave);
			if (Pantalla_TeclaPulsada(SDL_SCANCODE_ESCAPE) || Colision_NaveConLista(nave, malos)) {
				juego = 0;
				Libera_Lista(balas);
				Libera_Lista(malos);
				Libera_Nave(nave);
			}
		} else {
			if (x > 1366/2-375/2 && x < 1366/2+375/2 && y > 150 && y < 150+126) {
				Pantalla_DibujaImagen(empezar2, Pantalla_Anchura()/2-416/2, 144, 416, 139);
				if (Pantalla_RatonBotonPulsado(SDL_BUTTON_LEFT)) {
					juego = 1;
					balas = Crea_Lista();
					malos = Crea_Lista();
					nave = Crea_Nave(NAVE);
				}
			} else {
				Pantalla_DibujaImagen(empezar1, Pantalla_Anchura()/2-375/2, 150, 375, 126);
			}

			if (x > 1366/2-372/2 && x < 1366/2+372/2 && y > 350 && y < 350+126) {
				Pantalla_DibujaImagen(salir2, Pantalla_Anchura()/2-413/2, 344, 413, 139);
				if (Pantalla_RatonBotonPulsado(SDL_BUTTON_LEFT)) {
					sal = 1;
				}
			} else {
					Pantalla_DibujaImagen(salir1, Pantalla_Anchura()/2-372/2, 350, 372, 126);
			}
		}
		Pantalla_Actualiza();
		Pantalla_Espera(40);
	}
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
	return 0;
}

