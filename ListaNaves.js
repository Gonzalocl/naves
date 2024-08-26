function Crea_Lista() {
}

function Libera_Lista(l) {
}

function Inserta_Lista(l, n) {
}

function Recupera_Lista(l) {
}

function Longitud_Lista(l) {
}

function Siguiente_Lista(l) {
}

function Dibuja_Lista(l, img) {
}

function Borrar_ListaNodo(l) {
    // Lista borrar = l->sig;
    // l->sig = l->sig->sig;
    // Libera_Nave(borrar->n);
    // free(borrar);
}

function Actualiza_Lista(l, x, y) {
    // while (l->sig != NULL) {
    // 	Actualiza_Nave(l->sig->n, x, y);
    // 	if ((Get_NavePosicionX(l->sig->n)<0-31) || (Get_NavePosicionX(l->sig->n)>Pantalla_Anchura()+31) || (Get_NavePosicionY(l->sig->n)<0-31) || (Get_NavePosicionY(l->sig->n)>Pantalla_Altura()+31)) {
    // 		Borrar_ListaNodo(l);
    // 	} else {
    // 		l = l->sig;
    // 	}
    // }
}

function Actualiza_ListaBalas(l) {
    // while (l->sig != NULL) {
    //     Actualiza_Balas(l->sig->n);
    //     if ((Get_NavePosicionX(l->sig->n)<0-31) || (Get_NavePosicionX(l->sig->n)>Pantalla_Anchura()+31) || (Get_NavePosicionY(l->sig->n)<0-31) || (Get_NavePosicionY(l->sig->n)>Pantalla_Altura()+31)) {
    // 		Borrar_ListaNodo(l);
    // 	} else {
    // 		l = l->sig;
    // 	}
    // }
}

function Colision_NaveConLista(n, l) {
    // while(l->sig != NULL && !Colision_Nave(Recupera_Lista(l), n)) {
    // 	l = l->sig;
    // }
    // if (l->sig != NULL) {
    // 	Borrar_ListaNodo(l);
    // 	return 1;
    // }
    // return 0;
}

function Colision_ListaConLista(a, b) {
    // while (a->sig != NULL) {
    // 	if(Colision_NaveConLista(a->sig->n, b)) {
    // 		Borrar_ListaNodo(a);
    // 	} else {
    // 		a = a->sig;
    // 	}
    // }
}
