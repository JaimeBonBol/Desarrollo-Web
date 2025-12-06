let semaforoAvance = null;
let semaforoRetroceso = null;

function iniciarSemaforoAvance(){
    if(semaforoAvance == null){
        semaforoAvance = setInterval(avanzar, 1000);
    }
}

function iniciarSemaforoRetroceso() {
    if (semaforoRetroceso == null) {
        semaforoRetroceso = setInterval(retroceder, 1000);
    }
}

let contador = 0;

function avanzar(){
    contador ++;

    if (contador === 100) {
        parar()
    }

    document.getElementById('salidaContador').innerHTML = contador;
}

function retroceder() {
    contador --;

    if (contador === 0) {
        parar()
    }

    document.getElementById('salidaContador').innerHTML = contador;
}

function parar(){
    clearInterval(semaforoAvance);
    clearInterval(semaforoRetroceso)
    semaforoAvance = null;
    semaforoRetroceso = null;
}