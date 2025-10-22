let segundos = 0;
let minutos = 0;
const divImagen = document.querySelector('.imagen');

function ocultarGif(){

    segundos ++;

    if(segundos === 60){
        segundos = 0;
        minutos ++;
    }

    document.getElementById('salidaContador').innerHTML = `La página lleva abierta ${minutos + ""} minutos y ${segundos + ""} segundos`;

    if(segundos === 5){
        divImagen.innerHTML = '';
        crearTabla(5,5);
    }
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
    divImagen.appendChild(tabla);

}