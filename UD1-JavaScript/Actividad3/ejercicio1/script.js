let contador = 0;

function actualizarContador(){
    contador ++;
    document.getElementById('salidaContador').innerHTML = `La página lleva abierta ${contador + ""} segundos`;
}