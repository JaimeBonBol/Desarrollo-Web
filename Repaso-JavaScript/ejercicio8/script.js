/*window.onload = function(){
    iniciarSemaforo();
};*/

let semaforo = null;
let segundos = 0;

function iniciarSemaforo(){
    semaforo = setInterval(iniciarCrono, 1000);
}

function iniciarCrono(){
    segundos ++;

    if (segundos === 10) {
        document.getElementById('salidaTitulo').innerHTML = "PRACTICANDO PARA EL EXAMEN";
    }

    const salidaCrono = document.getElementById('salidaContador');

    salidaCrono.innerHTML = `La página lleva abierta ${segundos} segundos`;
}

iniciarSemaforo();