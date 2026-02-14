function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0){
        return "Error, no se puede dividir por 0";
    }

    return a / b;
}

function realizarCalculo(callback, botonPulsado) {

    const input1 = document.getElementById('num1');
    const input2 = document.getElementById('num2');
    
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, introduce números válidos");
        return;
    }

    // Ejecutamos la callback, que será una de las funciones de arriba según el botón pulsado.
    let resultado = callback(num1, num2);

    // Obtener el nombre del botón pulsado para añadir la operación a la tabla.
    let nombreOperacion = botonPulsado.textContent;

    // Llamar a la función que agrega a la tabla.
    agregarEnTabla(num1, num2, nombreOperacion, resultado);
}

function agregarEnTabla(num1, num2, operacion, res) {
    // Buscamos el tbody (cuerpo de la tabla)
    const tbody = document.getElementById('tbody');

    // Creamos la fila
    const fila = document.createElement('tr');

    // Creamos las 4 celdas necesarias (Num1, Num2, Operación, Resultado)
    
    // Celda Número 1
    const tdNum1 = document.createElement('td');
    tdNum1.textContent = num1;
    
    // Celda Número 2
    const tdNum2 = document.createElement('td');
    tdNum2.textContent = num2;

    // Celda Operación
    const tdOp = document.createElement('td');
    tdOp.textContent = operacion; 

    // Celda Resultado
    const tdRes = document.createElement('td');
    tdRes.textContent = res;

    // Añadimos las celdas a la fila
    fila.appendChild(tdNum1);
    fila.appendChild(tdNum2);
    fila.appendChild(tdOp);
    fila.appendChild(tdRes);

    // Añadimos la fila a la tabla
    tbody.appendChild(fila);
}