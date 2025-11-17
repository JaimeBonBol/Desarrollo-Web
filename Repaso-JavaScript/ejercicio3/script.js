const imagenDado = document.getElementById('imgDado');


function tirarDado(){

    let numAleatorio = Math.floor(Math.random() * 6 + 1);

    switch (numAleatorio) {
        case 1:
            imagenDado.src = 'imagenes/cara1.png';
            break;

        case 2:
            imagenDado.src = 'imagenes/cara2.png';
            break;

        case 3:
            imagenDado.src = 'imagenes/cara3.png';
            break;

        case 4:
            imagenDado.src = 'imagenes/cara4.png';
            break;

        case 5:
            imagenDado.src = 'imagenes/cara5.png';
            break;

        case 6:
            imagenDado.src = 'imagenes/cara6.png';
            break;
        default:
            break;
    }
}