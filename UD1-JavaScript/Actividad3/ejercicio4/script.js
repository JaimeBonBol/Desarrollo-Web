let segundos = 0;
let minutos = 0;

function ocultarGif(){

    const divImagen = document.querySelector('.imagen');
    segundos ++;

    if(segundos === 60){
        segundos = 0;
        minutos ++;
    }

    document.getElementById('salidaContador').innerHTML = `La página lleva abierta ${minutos + ""} minutos y ${segundos + ""} segundos`;

    if(segundos === 5){
        divImagen.style.display = "block";
    }
}