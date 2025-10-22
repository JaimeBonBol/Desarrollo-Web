banner = ["images/banner-1.png", "images/banner-2.png", "images/banner-3.png", "images/banner-4.png", "images/banner-5.png"];

let indice = 0;

function cambiarBanner() {
    imagen = document.getElementById('imagen');

    // Avanza al siguiente indice del array banner
    indice ++;

    // Si llega al final del array, vuelve al principio
    if (indice >= banner.length) {
        indice = 0;
    }

    // Cambiar la imagen
    imagen.src = banner[indice];
}