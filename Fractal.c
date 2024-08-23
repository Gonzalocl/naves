#include "Fractal.h"
#include <stdio.h>
#include <math.h>
#include <stdlib.h>


struct PuntoRep {
	float x;
	float y;
};

typedef struct PuntoRep Punto;


struct FractalRep {
	Punto p;
	int sentido;
	int altura;
};

void Fractal_Libera (Fractal f) {
    free(f);
}

Fractal Fractal_Crea (float x, float y, int sentido) {
	Fractal nuevo = malloc ( sizeof(struct FractalRep) );
	nuevo->p.x = x;
	nuevo->p.y = y;
	nuevo->sentido = sentido;
	nuevo->altura = Pantalla_Altura();
	return nuevo;
}

void Dibuja_Triangulo (Punto a, Punto b, Punto c) {
	Pantalla_DibujaLinea(a.x, a.y, b.x, b.y);
	Pantalla_DibujaLinea(a.x, a.y, c.x, c.y);
	Pantalla_DibujaLinea(c.x, c.y, b.x, b.y);
}

Punto Punto_Medio(Punto a, Punto b) {
	Punto medio;
	medio.x = (a.x+b.x)/2;
	medio.y = (a.y+b.y)/2;
	return medio;
}


void Fractal_Dibujar (Punto a, Punto b, Punto c, int nivel) {
	if (nivel == 8) return;
	Dibuja_Triangulo(a, b, c);
	Fractal_Dibujar(a, Punto_Medio(a, b), Punto_Medio(a, c), nivel+1);
	Fractal_Dibujar(Punto_Medio(a, b), b, Punto_Medio(c, b), nivel+1);
	Fractal_Dibujar(Punto_Medio(a, c), Punto_Medio(c, b), c, nivel+1);
}



void Fractal_Dibuja(Fractal f) {
	Punto a;
	Punto b;
	Punto c;
	int d;
	a.x = f->p.x;
	a.y = f->p.y;
	b.x = f->p.x - f->sentido*f->altura/sqrt(3);
	b.y = f->p.y + f->sentido*f->altura;
	c.x = f->p.x + f->sentido*f->altura/sqrt(3);
	c.y = f->p.y + f->sentido*f->altura;
	if (f->altura<Pantalla_Altura()/6) {
		d = 8;
	} else if (f->altura<Pantalla_Altura()+Pantalla_Altura()*2/6) {
		d = 9;
	} else if (f->altura<Pantalla_Altura()+Pantalla_Altura()*3/6) {
		d = 10;
	} else if (f->altura<Pantalla_Altura()+Pantalla_Altura()*4/6) {
		d = 11;
	} else if (f->altura<Pantalla_Altura()+Pantalla_Altura()*5/6) {
		d = 12;
	} else {
		d = 14;
	}
	f->altura = Pantalla_Altura() + (f->altura+d)%Pantalla_Altura();
	Pantalla_ColorTrazo(255, 255, 255, 255);
	Fractal_Dibujar (a, b, c, 1);
}



