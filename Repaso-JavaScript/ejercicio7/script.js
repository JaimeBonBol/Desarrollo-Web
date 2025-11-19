let segundos = 0;
let minutos = 0;

function sumarContador(){
    segundos ++;

    if(segundos === 60){
        segundos = 0;
        minutos ++;
    }

    document.getElementById('salidaContador').innerHTML = `La página lleva abierta ${minutos} minutos y ${segundos} segundos`;

    if (segundos == 12) {
        clearInterval(semaforo);
        semaforo = null;
    }

    if (segundos === 17) {
        iniciarSemaforo();
    }
}

function iniciarSemaforo() {
    // IMPORTANTE: asignar nuevamente el ID
    semaforo = setInterval(generarTabla, 5000);
}

// Arranca al principio
iniciarSemaforo();

function generarTabla(){
    let Nfilas = segundos / 5;

    crearTabla(Nfilas, 1);
}

function crearTabla(filas, columnas){

    // Crear la tabla
    const tabla = document.createElement('table');
    tabla.style.borderCollapse = "collapse";
    
    // Crear filas
    for (let i = 0; i < filas; i++) {

        const fila = document.createElement('tr');

        for (let j = 0; j < columnas; j++) {
            const celda = document.createElement('td');
            celda.style.border = "1px solid black";
            celda.style.padding = "50px";

            // Añadir columna a la fila
            fila.appendChild(celda);
        }

        // Añadir fila a la tabla
        tabla.appendChild(fila);
    }

    // Añadir la tabla al div
    divTabla = document.querySelector('.salidaTabla');

    divTabla.innerHTML = "";

    divTabla.appendChild(tabla);

}