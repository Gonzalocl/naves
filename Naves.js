const ACELERACION = 250
const POS_INICIAL_X = ANCHO / 2
const POS_INICIAL_Y = ALTO / 2

class Vector {
    x;
    y;
}

class Nave {
    pos = new Vector();
    pos0 = new Vector();
    v = new Vector();
    v0 = new Vector();
    a = new Vector();
    a0 = new Vector();
    t = new Vector();
    t0 = new Vector();
    radio;
}

function Modulo(v) {
    return Math.sqrt(Math.pow(v.x, 2) + Math.pow(v.y, 2));
}

function Distancia(a, b) {
    return Math.sqrt(Math.pow(a.pos.x - b.pos.x, 2) + Math.pow(a.pos.y - b.pos.y, 2));
}

function Colision_Nave(a, b) {
    return (Distancia(a, b) < (a.radio + b.radio));
}

function Aceleracion(a, moduloa) {
    let mod = Modulo(a);
    a.x = moduloa * a.x / mod;
    a.y = moduloa * a.y / mod;
    return a;
}

async function Cargar_Imagenes(nombre, array) {
    for (let i = 0; i <= 359; i++) {

        let ruta = `Img/${nombre}/${nombre}${String(i).padStart(3, "0")}.bmp`;
        array[i] = await Pantalla_ImagenLee(ruta, 1);
        progressBar.step();
    }
}

function Libera_Imagenes(array) {
    for (let i = 0; i <= 359; i++) {
        Pantalla_ImagenLibera(array[i]);
    }

}

function Angulo_Nave(n) {
    let mod = Modulo(n.v);
    let angulo = Math.floor(Math.asin(n.v.y / mod) * 180 / Math.PI);
    if (angulo <= 0 && n.v.x >= 0) angulo = -angulo;
    else if (angulo <= 0 && n.v.x < 0) angulo = 180 + angulo;
    else if (angulo > 0 && n.v.x < 0) angulo = 180 + angulo;
    else angulo = 360 - angulo;
    return angulo;
}

function Valores_Iniciales(nave) {
    if (nave.a.x !== nave.a0.x) {
        nave.pos0.x = nave.pos.x;
        nave.v0.x = nave.v.x;
        nave.t0.x = clock() - 40;
        nave.a0.x = nave.a.x;
    }
    if (nave.a.y !== nave.a0.y) {
        nave.pos0.y = nave.pos.y;
        nave.v0.y = nave.v.y;
        nave.t0.y = clock() - 40;
        nave.a0.y = nave.a.y;
    }
}

function Actualiza_Posicion(nave) {
    nave.v.x = nave.v0.x + nave.a.x * nave.t.x;
    nave.pos.x = nave.pos0.x + nave.v0.x * nave.t.x + (nave.a.x * nave.t.x * nave.t.x) / 2;

    nave.v.y = nave.v0.y + nave.a.y * nave.t.y;
    nave.pos.y = nave.pos0.y + nave.v0.y * nave.t.y + (nave.a.y * nave.t.y * nave.t.y) / 2;
}

function Crea_Bala(n) {
    let nueva = new Nave();
    let v = new Vector();
    v.x = n.v.x / Modulo(n.v);
    v.y = n.v.y / Modulo(n.v);
    nueva.v.x = v.x * 50;
    nueva.v.y = v.y * 50;
    nueva.pos.x = n.pos.x;
    nueva.pos.y = n.pos.y;
    nueva.radio = 10;
    return nueva;
}

function Crea_Nave(tipo) {
    let nuevo = new Nave();
    if (tipo) {
        let lado = rand() % 4;
        switch (lado) {
            case 0: //arriba
                nuevo.pos.x = rand() % ANCHO;
                nuevo.pos.y = -30;
                break;
            case 1://abajo
                nuevo.pos.x = rand() % ANCHO;
                nuevo.pos.y = ALTO + 30;
                break;
            case 2://izquierda
                nuevo.pos.x = -30;
                nuevo.pos.y = rand() % ALTO;
                break;
            case 3://derecha
                nuevo.pos.x = ANCHO + 30;
                nuevo.pos.y = rand() % ALTO;
                break;
        }
        nuevo.pos0 = nuevo.pos;
    } else {
        nuevo.pos.x = POS_INICIAL_X;
        nuevo.pos.y = POS_INICIAL_Y;
        nuevo.pos0 = {...nuevo.pos};
    }
    nuevo.radio = 30;
    nuevo.v.x = 0;
    nuevo.v.y = 0;
    nuevo.v0 = {...nuevo.v};
    nuevo.a = {...nuevo.v};
    nuevo.a0 = {...nuevo.v};
    nuevo.t = {...nuevo.v};
    nuevo.t0 = {...nuevo.v};
    return nuevo;
}

function Libera_Nave(n) {

}

function Get_NavePosicionX(n) {
    return n.pos.x;
}

function Get_NavePosicionY(n) {
    return n.pos.y;
}

function Actualiza_Nave(n, x, y) {

    n.a.x = x - n.pos.x;
    n.a.y = y - n.pos.y;

    if (n.a.y || n.a.x) {
        n.a = Aceleracion(n.a, ACELERACION);
    }

    Valores_Iniciales(n);

    n.t.x = (clock() - n.t0.x) / 1000;
    n.t.y = (clock() - n.t0.y) / 1000;

    Actualiza_Posicion(n);
}

function Limite_Pantalla(n) {
    if (n.pos.x < 0 + 30) {
        n.pos0.x = 30;
        n.a.x = 50;
        n.v0.x = 50;
    } else if (n.pos.x > Pantalla_Anchura() - 30) {
        n.pos0.x = Pantalla_Anchura() - 30;
        n.a.x = -50;
        n.v0.x = -50;
    }

    if (n.pos.y < 0 + 30) {
        n.pos0.y = 30;
        n.a.y = 50;
        n.v0.y = 50;
    } else if (n.pos.y > Pantalla_Altura() - 30) {
        n.pos0.y = Pantalla_Altura() - 30;
        n.a.y = -50;
        n.v0.y = -50;
    }
}

function Actualiza_NavePrincipal(n, x, y) {
    n.a.x = x - n.pos.x;
    n.a.y = y - n.pos.y;

    if (n.a.y || n.a.x) {
        if (Pantalla_TeclaPulsada(SDL_SCANCODE_SPACE)) {
            n.a = Aceleracion(n.a, 4000);
        } else {
            n.a = Aceleracion(n.a, 750);
        }
    }

    Valores_Iniciales(n);

    n.t.x = (clock() - n.t0.x) / 1000;
    n.t.y = (clock() - n.t0.y) / 1000;

    Limite_Pantalla(n);

    Actualiza_Posicion(n);


}

function Actualiza_Balas(n) {
    n.pos.x = n.pos.x + n.v.x;
    n.pos.y = n.pos.y + n.v.y;
}

function Dibuja_Nave(n, img) {
    let angulo = Angulo_Nave(n);
    let ancho = Pantalla_ImagenAnchura(img[angulo]);
    let alto = Pantalla_ImagenAltura(img[angulo]);
    Pantalla_DibujaImagen(img[angulo], n.pos.x - ancho / 2, n.pos.y - alto / 2, ancho, alto);
}
