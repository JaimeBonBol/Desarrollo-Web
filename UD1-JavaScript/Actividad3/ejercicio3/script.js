let segundos = 0;
let minutos = 0;

function actualizarContador(){
    segundos ++;

    if(segundos === 60){
        segundos = 0;
        minutos ++;
    }

    document.getElementById('salidaContador').innerHTML = `La página lleva abierta ${minutos + ""} minutos y ${segundos + ""} segundos`;

    if(minutos === 2){
        redirijir("https://iesantoniogala.es/");
    }
}

function redirijir(url) {
    window.location.href = url;
}