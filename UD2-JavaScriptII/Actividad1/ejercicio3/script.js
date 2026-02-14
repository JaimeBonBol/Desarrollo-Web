const input = document.getElementById('inputCadena');
const boton = document.getElementById('btnGenerar');
const divTabla = document.getElementById('divTabla');

function generarTabla(){

    // Limpiar la tabla anterior
    divTabla.innerHTML = '';

    // Obtener el texto
    let texto = input.value.trim();

    // Comprobar que no esté vacío
    if (texto == '') {
        alert("El input está vacío")
        return;
    }

    // Separar el texto
    let elementosInput = texto.split(' ');

    // Crear tabla
    let tabla = document.createElement('table');
    tabla.style.borderCollapse = "collapse";
    
    // Crear filas
    for (let i = 0; i < elementosInput.length; i++) {

        const fila = document.createElement('tr');
        const celda = document.createElement('td');

        celda.textContent = elementosInput[i];

        if (!isNaN(elementosInput[i])) {
            // Es un número
            celda.style.backgroundColor = 'lightgreen';
        } else {
            // Es texto
            celda.style.backgroundColor = 'cyan';
        }

        // Añadir celda en fila
        fila.appendChild(celda);

        // Añadir fila a la tabla
        tabla.appendChild(fila);
    }

    // Añadir la tabla al div
    divTabla.appendChild(tabla);

}