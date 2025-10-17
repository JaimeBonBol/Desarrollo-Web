const divTabla = document.querySelector('.resultadoTabla');
const inputFilas = document.getElementById('inputFilas');
const inputColumnas = document.getElementById('inputColumnas');


function esPar(num) {
    if (num % 2 === 0) {
        return true;
    }else{
        return false;
    }
}

function crearTabla() {

    // Valor de los input
    const valorFilas = inputFilas.value.trim();
    const valorColumnas = inputColumnas.value.trim();

    // Crear tabla
    const tabla = document.createElement('table');
    tabla.style.borderCollapse = "collapse";

    for (let i = 1; i <= parseInt(valorFilas); i++) {
        // Cxrear fila
        const fila = document.createElement('tr');

        if(esPar(i)){
            fila.style.backgroundColor = "lightgray";
        }

        for (let j = 1; j <= parseInt(valorColumnas); j++) {
            // Crear columna
            const columna = document.createElement('td');
            columna.style.border = "1px solid black";
            columna.style.padding = "10px";

            if(esPar(j)){
                columna.style.backgroundColor = "lightblue";
            }

            // Añadirla a la fila
            fila.appendChild(columna);
        }

        // Añadir la fila a la tabla
        tabla.appendChild(fila);
    }

    //LImpiar tabla anterior
    divTabla.innerHTML="";
    // Añadir la tabla a el div
    divTabla.appendChild(tabla);
}