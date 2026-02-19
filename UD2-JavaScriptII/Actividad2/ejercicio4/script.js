let intervalo;
let tiempoInicio = 0;
let timepoAcumulado = 0;
let estaCorriendo = false;

window.onload = function(){
    if(localStorage.getItem("miCronometro")){
        const datos = JSON.parse(localStorage.getItem("miCronometro"));

        timepoAcumulado = datos.acumulado;
        estaCorriendo = datos.corriendo;
        tiempoInicio = datos.inicio;

        if(estaCorriendo){
            tiempoInicio = Date.now() - timepoAcumulado;
            intervalo = setInterval(actualizarCronometro, 100);
        } else{
            mostrarTiempo(timepoAcumulado);
        }
    }
};

function iniciar(){
    if(!estaCorriendo){
        tiempoInicio = Date.now() - timepoAcumulado;

        intervalo = setInterval(actualizarCronometro, 100);
        estaCorriendo = true;
        guardarEstado();
    }
}

function parar(){
    if(estaCorriendo){
        clearInterval(intervalo);
        timepoAcumulado = Date.now() - tiempoInicio;
        estaCorriendo = false;
        guardarEstado();
    }
}

function borrar(){
    clearInterval(intervalo);
    tiempoInicio = 0;
    timepoAcumulado = 0;
    estaCorriendo = false;

    document.getElementById("demo").innerHTML = "00:00:00";
    localStorage.removeItem("miCronometro");
}

function actualizarCronometro(){
    timepoAcumulado = Date.now() - tiempoInicio;
    mostrarTiempo(timepoAcumulado);

    guardarEstado();
}

function guardarEstado(){
    const estado = {
        inicio: tiempoInicio,
        acumulado: timepoAcumulado,
        corriendo: estaCorriendo
    };

    localStorage.setItem("miCronometro", JSON.stringify(estado));
}

function mostrarTiempo(milisegundos){
    let segundos = Math.floor((milisegundos / 1000) % 60);
    let minutos = Math.floor((milisegundos / (1000 * 60)) % 60);
    let horas = Math.floor((milisegundos / (1000 * 3600)) % 24);

    let seg = (segundos < 10) ? "0" + segundos : segundos;
    let min = (minutos < 10) ? "0" + minutos : minutos;
    let hor = (horas < 10) ? "0" + horas : horas;

    document.getElementById("demo").innerHTML = hor + ":" + min + ":" + seg;
}