const inputTexto = document.getElementById('inputText');
const divTabla = document.getElementById('tabla');

// Función que comprueba si es número o texto.
function comprobarTexto(input) {

    if(/^\d*$/.test(input)){
        return true;
    }else{
        return false;
    }
}

// Función que comrpueba si un númeor es par.
function esPar(num) {

    if(num % 2 === 0){
        return true;
    }else{
        return false;
    }

}

// Función para crear tabla.
function crearTabla() {

    // Valor del input
    const valorInput = inputTexto.value.trim();

    // Limpiar la tabla anterior
    divTabla.innerHTML ="";

    // Crear tabla
    const tabla = document.createElement('table');
    tabla.style.borderCollapse = "collapse";

    // Comporbar que es un número.
    if(comprobarTexto(valorInput)){

        const header = document.createElement('tr');
        const th = document.createElement('th');

        th.textContent = "Números pares";
        th.style.border = "1px solid black";
        th.style.padding = "20px";

        // Añadir al header la celda th y a la tabla la fila header.
        header.appendChild(th);
        tabla.appendChild(header);

        // Crear filas con números pares.
        for (let i = 0; i <= parseInt(valorInput); i++) {
            
            // Si es par el número se crea fila y celda con el número.
            if (esPar(i)) {
                const fila = document.createElement('tr');
                const celda = document.createElement('td');

                celda.textContent = i;
                celda.style.border = "1px solid black";
                celda.style.padding = "20px";

                // Se añade a la fila la celda, y a la tabla la fila.
                fila.appendChild(celda);
                tabla.appendChild(fila);
            }

        }

    }

    // Insertar la tabla en el div
    divTabla.appendChild(tabla);

}