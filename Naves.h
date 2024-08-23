#ifndef __Naves_H__
#define __Naves_H__

#include "Pantalla.h"

#define ANCHO 1366
#define ALTO 755


/**
\file Nave.h
\brief Permite representar una nave
*/


 /**
 \brief TDA Nave
*/

typedef struct NaveRep *Nave;
/** \brief Reserva memoria para guardar una nave
 \param 0 crea una nave principal y se coloca en el centro de la pantalla
 \param 1 crea un malo y lo pone en los bordes de la pantalla
 \return devuelve la direccion de memoria donde se ha guardado
 */

Nave Crea_Nave(int tipo);

/** \brief Reserva memorai para una bala
 *
 * \param nave La nave que dispara la bala
 * \return devuelve la direccion de memoria donde se ha guardado
 *
 */

Nave Crea_Bala (Nave n);

/** \brief Actualiza la posicion de una nave
 *
 * \param nave La nave que se queire actualizar
 * \param x, y Las coordenadas del punto que quiere seguir la nave
 *
 */

void Actualiza_Nave(Nave n, float x, float y);

/** \brief Actualiza la posicion de la nave principal, esta funcion impide que la nave se pueda salir de la pantalla
 *
 * \param Actualiza la posicion de una nave
 * \param x, y Las coordenadas del punto que quiere seguir la nave
 *
 *
 */

void Actualiza_NavePrincipal(Nave n, float x, float y);
/** \brief Recupera la coordenada x de la nave
 *
 * \param nave La nave de la que se quiere obtener la coordenada
 *
 * \return float El valor de la coordenada
 *
 */

float Get_NavePosicionX(Nave n);
/** \brief Recupera la coordenada y de la nave
 *
 * \param nave La nave de la que se quiere obtener la coordenada
 *
 * \return float El valor de la coordenada
 *
 */

float Get_NavePosicionY(Nave n);
/** \brief Recupera el angulo de la nave
 *
 * \param nave Nave de la que se queire obtener el angulo
 * \return int angulo de la nave
 *
 */

int Angulo_Nave(Nave n);
/** \brief Dibuja la nave en el angulo que este
 *
 * \param nave nave que se quiere dibujar
 * \param Imagen array con 360 imagenes una para cada angulo
 *
 */

void Dibuja_Nave(Nave n, Imagen img[]);
/** \brief Libera el espacio de una nave
 *
 * \param nave Nave que se quiere liberar
 *
 */

void Libera_Nave(Nave n);
/** \brief Carga en la memoria 360 imagenes para dibujar las naves
 *
 * \param char * cadena con el nombre de las imagenes que deben estar puestas en un fichero con el mismo nombre y el formateo nombre/nombrexxx.bmp donde xxx es el angulo de la nave de 000 a 259
 * \param imagen array donde se van a guardar las imagenes
 * \return
 *
 */

void Cargar_Imagenes(char *nombre, Imagen array[]);
/** \brief Libera todas las imagenes del array
 *
 * \param Imagen array que se queire liberar
 *
 */

void Libera_Imagenes(Imagen array[]);
/** \brief comprueba si la nave a y la nave b estan chocando
 *
 * \param nave a Una nave
 * \param nave b
 * \return devuelve 1 si las naves estan chocando 0 en caso contrario
 *
 */

int Colision_Nave (Nave a, Nave b);
/** \brief actualiza la posicion de la bala
 *
 * \param nave La bala que esta representada como una nave
 *
 */

void Actualiza_Balas (Nave n);


#endif




