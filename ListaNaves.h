#ifndef __ListaNaves_H__
#define __ListaNaves_H__

#include "Naves.h"


/** \brief TDA Lista
 */
typedef struct ListaRep *Lista;
/** \brief Reserva memoria para unalista con cabecera
 *
 * \return Lista devuelve la direccion de memoria
 *
 */
Lista Crea_Lista();
/** \brief Libera toda la lista
 *
 * \param l Lista lista qu ese quiere borrar
 * \return void
 *
 */
void Libera_Lista(Lista l);
/** \brief Inserta por el principio la nave n en la lista l
 *
 * \param l Lista lista donde se inserta
 * \param n Nave nave que se inserta
 * \return void
 *
 */
void Inserta_Lista(Lista l, Nave n);
/** \brief Recupera la nave que esta en el nodo l
 *
 * \param l Lista lista de donde se queire obtener la nave
 * \return Nave devuelve la nave
 *
 */
Nave Recupera_Lista(Lista l);
/** \brief Recupera la longitud de la lista
 *
 * \param l Lista lista que se quiere saber sulongitud
 * \return int devuelve un entero con la longitud de la lista
 *
 */
int Longitud_Lista(Lista l);
/** \brief Pasa a el siguiente elemento de la lista
 *
 * \param l Lista posicion donde se quiere obtener la sigueinte posicion
 * \return Lista posicion del siguiente
 *
 */
Lista Siguiente_Lista(Lista l);
/** \brief Dibuja todos los elementos de la lista en su posicion de la pantalla
 *
 * \param l Lista Lista que se queire dibujar
 * \param img[] Imagen array con las imagenes para dibujar las naves
 * \return void
 *
 */
void Dibuja_Lista(Lista l, Imagen img[]);
/** \brief  Actualiza la posicion de la pantalla de todos los elementos de la lista
 *
 * \param l Lista lista que se quiere actulizar
 * \param x float coordenadas que se quieren que siguan todos los elementos
 * \param y float
 * \return void
 *
 */
void Actualiza_Lista(Lista l, float x, float y);
/** \brief Actuliza la posicion de la lista de balas, ls balas siguien una trayectoria lineal
 *
 * \param l Lista lista de balas
 * \return void
 *
 */
void Actualiza_ListaBalas(Lista l);
/** \brief comprueba si alguno de los elementos de la lista esta chocando con la nave
 *
 * \param n Nave nave que se quiere comprobar
 * \param l Lista lista que se queiere comprobar
 * \return int devuelve 1 si la nave esta chocando con alguno de los elementos de la lista
 *
 */
int Colision_NaveConLista(Nave n, Lista l);
/** \brief Comprueba si alguno los elementos de la lista a esta chocndo con alguno de los elementos de la lista y en caso de que esten chocando se eliminan ambos
 *
 * \param a Lista Una lista de naves
 * \param b Lista
 * \return void
 *
 */
void Colision_ListaConLista(Lista a, Lista b);

#endif

