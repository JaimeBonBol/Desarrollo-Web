let segundos = 0;
let minutos = 0;

function actualizarContador(){
    segundos ++;

    if(segundos === 60){
        segundos = 0;
        minutos ++;
    }

    document.getElementById('salidaContador').innerHTML = `La página lleva abierta ${minutos + ""} minutos y ${segundos + ""} segundos`;
}