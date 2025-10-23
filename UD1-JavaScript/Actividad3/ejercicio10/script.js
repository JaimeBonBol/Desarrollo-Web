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

// Recoger el intervalo en una variable para parar el intervalo desde la función pararSecuencia
let intervalo = setInterval(cambiarBanner, 3000);

function pararSecuencia(){

    // Si hay intervalo activo, pararlo y decir que ya no hay intervalo activo. Si la prox vez que se 
    // ejecute la función, si no está activo el intervalo, se inicia
    if (intervalo) {
        console.log("ADIOS");
        clearInterval(intervalo);
        intervalo = null;
    }else{
        console.log("HOLA");
        intervalo = setInterval(cambiarBanner, 3000);
    }

}