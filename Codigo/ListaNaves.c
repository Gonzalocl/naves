#include "ListaNaves.h"
#include "Pantalla.h"

#include <stdlib.h>
#include <stdio.h>


struct ListaRep {
	Nave n;
	struct ListaRep *sig;
};



Lista Crea_Lista() {
	Lista cabecera = malloc(sizeof(struct ListaRep));
	cabecera->sig = NULL;
	return cabecera;
}


void Libera_Lista(Lista l){
	while(l != NULL) {
		Lista borrar = l;
		l = l->sig;
		Libera_Nave(borrar->n);
		free(borrar);
	}
}


void Inserta_Lista(Lista l, Nave n) {//nu
	Lista nuevo = malloc(sizeof(struct ListaRep));
	nuevo->n = n;
	nuevo->sig = l->sig;
	l->sig = nuevo;
}


Nave Recupera_Lista(Lista l) {
	return l->sig->n;
}


int Longitud_Lista(Lista l) {
	int c = 0;
	while (l->sig != NULL) {
		c++;
		l = l->sig;
	}
	return c;
}


Lista Siguiente_Lista(Lista l) {
	return l->sig;
}


void Dibuja_Lista(Lista l, Imagen img[]) {
	while(l->sig != NULL) {
		Dibuja_Nave(l->sig->n, img);
		l = l->sig;
	}
}

void Borrar_ListaNodo(Lista l) {
	Lista borrar = l->sig;
	l->sig = l->sig->sig;
	Libera_Nave(borrar->n);
	free(borrar);
}

void Actualiza_Lista(Lista l, float x, float y) {
	while (l->sig != NULL) {
		Actualiza_Nave(l->sig->n, x, y);
		if ((Get_NavePosicionX(l->sig->n)<0-31) || (Get_NavePosicionX(l->sig->n)>Pantalla_Anchura()+31) || (Get_NavePosicionY(l->sig->n)<0-31) || (Get_NavePosicionY(l->sig->n)>Pantalla_Altura()+31)) {
			Borrar_ListaNodo(l);
		} else {
			l = l->sig;
		}
	}
}

void Actualiza_ListaBalas(Lista l) {
    while (l->sig != NULL) {
        Actualiza_Balas(l->sig->n);
        if ((Get_NavePosicionX(l->sig->n)<0-31) || (Get_NavePosicionX(l->sig->n)>Pantalla_Anchura()+31) || (Get_NavePosicionY(l->sig->n)<0-31) || (Get_NavePosicionY(l->sig->n)>Pantalla_Altura()+31)) {
			Borrar_ListaNodo(l);
		} else {
			l = l->sig;
		}
	}
}

int Colision_NaveConLista(Nave n, Lista l) {
	while(l->sig != NULL && !Colision_Nave(Recupera_Lista(l), n)) {
		l = l->sig;
	}
	if (l->sig != NULL) {
		Borrar_ListaNodo(l);
		return 1;
	}
    return 0;
}

void Colision_ListaConLista(Lista a, Lista b) {
	while (a->sig != NULL) {
		if(Colision_NaveConLista(a->sig->n, b)) {
			Borrar_ListaNodo(a);
		} else {
			a = a->sig;
		}
	}
}





