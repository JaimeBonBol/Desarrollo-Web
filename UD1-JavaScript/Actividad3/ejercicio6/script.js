crono = document.getElementById('salidaCronometro');

let intervalo;

let segundos;
let minutos;
let horas;

function iniciarCrono() {
    intervalo = setInterval(actualizarCrono, 1000);
}

function pararCrono(){
    clearInterval(intervalo);
}

function actualizarCrono(){
    segundos ++;

    if (segundos === 60) {
        minutos ++;
        segundos = 0;
    }

    if (minutos === 60) {
        horas ++;
        minutos = 0;
    }


}