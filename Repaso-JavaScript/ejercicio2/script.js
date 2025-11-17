const salidaNumeroSecreto = document.getElementById('numSecreto');
const inputJugador = document.getElementById('inputJugador');
const salidaEstado = document.getElementById('estadoIntento');

let numeroSecreto = generarNum();

function generarNum() {
    return Math.floor(Math.random() * 10 + 1);
}

function comprobarIntento(){
    const valorJugador = parseInt(inputJugador.value);

    if(valorJugador === numeroSecreto){
        salidaNumeroSecreto.innerHTML = `${numeroSecreto}`;
        salidaEstado.innerHTML = 'Enhorabuena!! Has acertado';
        inputJugador.value = '';

    }else{
        salidaEstado.innerHTML = 'Incorrecto, sigue intentándolo';
        inputJugador.value = '';

    }
}

function mostrarNumeroSecreto(){
    salidaNumeroSecreto.innerHTML = `${numeroSecreto}`;
    salidaEstado.innerHTML = 'Gran esfuerzo, prueba otra vez';
}