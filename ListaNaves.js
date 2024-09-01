






class Lista {
    n = new Nave();
    sig;
}



function Crea_Lista() {
    let cabecera = new Lista();
    cabecera.sig = undefined;
    return cabecera;
}


function Libera_Lista(l){
    while(l !== undefined) {
        let borrar = l;
        l = l.sig;
        Libera_Nave(borrar.n);

    }
}


function Inserta_Lista(l, n) {//nu
    let nuevo = new Lista();
    nuevo.n = n;
    nuevo.sig = l.sig;
    l.sig = nuevo;
}


function Recupera_Lista(l) {
    return l.sig.n;
}


function Longitud_Lista(l) {
    let c = 0;
    while (l.sig !== undefined) {
        c++;
        l = l.sig;
    }
    return c;
}


function Siguiente_Lista(l) {
    return l.sig;
}


function Dibuja_Lista(l, img) {
    while(l.sig !== undefined) {
        Dibuja_Nave(l.sig.n, img);
        l = l.sig;
    }
}

function Borrar_ListaNodo(l) {
    let borrar = l.sig;
    l.sig = l.sig.sig;
    Libera_Nave(borrar.n);

}

function Actualiza_Lista(l, x, y) {
    while (l.sig !== undefined) {
        Actualiza_Nave(l.sig.n, x, y);
        if ((Get_NavePosicionX(l.sig.n)<0-31) || (Get_NavePosicionX(l.sig.n)>Pantalla_Anchura()+31) || (Get_NavePosicionY(l.sig.n)<0-31) || (Get_NavePosicionY(l.sig.n)>Pantalla_Altura()+31)) {
            Borrar_ListaNodo(l);
        } else {
            l = l.sig;
        }
    }
}

function Actualiza_ListaBalas(l) {
    while (l.sig !== undefined) {
        Actualiza_Balas(l.sig.n);
        if ((Get_NavePosicionX(l.sig.n)<0-31) || (Get_NavePosicionX(l.sig.n)>Pantalla_Anchura()+31) || (Get_NavePosicionY(l.sig.n)<0-31) || (Get_NavePosicionY(l.sig.n)>Pantalla_Altura()+31)) {
            Borrar_ListaNodo(l);
        } else {
            l = l.sig;
        }
    }
}

function Colision_NaveConLista(n, l) {
    while(l.sig !== undefined && !Colision_Nave(Recupera_Lista(l), n)) {
        l = l.sig;
    }
    if (l.sig !== undefined) {
        Borrar_ListaNodo(l);
        return 1;
    }
    return 0;
}

function Colision_ListaConLista(a, b) {
    while (a.sig !== undefined) {
        if(Colision_NaveConLista(a.sig.n, b)) {
            Borrar_ListaNodo(a);
        } else {
            a = a.sig;
        }
    }
}





