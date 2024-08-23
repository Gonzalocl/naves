#ifndef __Fractal_H__
#define __Fractal_H__

#include "Pantalla.h"

/** \brief TDA Fractal
 */
typedef struct FractalRep *Fractal;

/** \brief Reserva memoria para un fractal
 *
 * \param Coordenadas de donde sale el fractal
 * \param determina si el fractal se mueve hacia abajo (1) o si se mueve hacia arriba (-1)
 * \return devueleve la direccin de memoria del fractal
 *
 */
Fractal Fractal_Crea (float x, float y, int sentido);
/** \brief Dibuja el fractal en el estado que toque
 *
 * \param f Fractal fractal que se quiere dibujar
 * \return void
 *
 */
void Fractal_Dibuja(Fractal f);
/** \brief Libera memoria del fractal
 *
 * \param fractal que se quere borrrar
 *
 */
void Fractal_Libera (Fractal f);

#endif


