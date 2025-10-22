let segundos = 0;
let posicion = 0;
const divImagen = document.querySelector('.imagen');
const gif = document.getElementById('gif');

function moverGif(){
    
    posicion += 10;
    gif.style.marginLeft = posicion + "px";

    // Por que se va a repetir la función cada 100ms
    segundos +=100;

    if(segundos >= 5000){
        divImagen.innerHTML = '';
        crearTabla(5, 5);
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

// Para ejecutar el intervalo cada 100ms, guardado en una varibale por si después quiero detener el intervalo con clearInteval(intervalo)
const intervalo = setInterval(moverGif, 100);
