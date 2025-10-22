const crono = document.getElementById('salidaCronometro');
const divParadas = document.querySelector('.paradas');

let intervalo;
let contadorParadas = 1;

let segundos = 0;
let minutos = 0;
let horas = 0;

function iniciarCrono() {
    // Para que si le doy otra vez a iniciar no inicie uno nuevo
    if (!intervalo) {
        intervalo = setInterval(actualizarCrono, 1000);
    }
}

function pararCrono(){
    clearInterval(intervalo);

    // Decir que ya no hay intervalo activo.
    intervalo = null;

    // Guardar la parada en el div
    guardarParada();
    contadorParadas ++;
}

function reiniciarCrono(){
    mostrarHoraReseteada();
    segundos = 0;
    minutos = 0;
    horas = 0;

    // No llamo a la funcion de pararCrono para que no se guarde la parada
    // ya que solo quiero guardar paradas no reseteos.
    clearInterval(intervalo);
    intervalo = null;
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

    // Formatear las horas, los min y los seg con dos digitos
    const h = horas.toString().padStart(2, "0");
    const min = minutos.toString().padStart(2, "0");
    const seg = segundos.toString().padStart(2, "0");

    crono.textContent =`${h}:${min}:${seg}`;

}

function mostrarHoraReseteada() {
    crono.textContent =`00:00:00`;
}

function guardarParada() {
    
    // Crear <p> para almacenar el tiempo de parada
    const pParada = document.createElement('p');

    // Formatear las horas, los min y los seg con dos digitos
    const h = horas.toString().padStart(2, "0");
    const min = minutos.toString().padStart(2, "0");
    const seg = segundos.toString().padStart(2, "0");

    // Añadir al elmento <p> el tiempo fromateado
    pParada.textContent = `Parada ${contadorParadas} - ${h}:${min}:${seg}`;

    // Añadir el <p> al div
    divParadas.appendChild(pParada);

}

function limpiarParadas(){
    divParadas.innerHTML = '';
    contadorParadas = 1;
}