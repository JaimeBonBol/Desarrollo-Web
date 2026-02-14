// Callback, muestra el resultado
function mostrarResultado(mensaje){
    const divResultado = document.getElementById('resultado');
    let texto = document.createElement('h3');

    divResultado.innerHTML = '';
    texto.textContent = mensaje;

    divResultado.appendChild(texto);
}

// Función lógica. Recibe el texto y el callback que debeje ejcutar al terminar
function analizarTexto(texto, callback){

    // Si está vacío
    if (!texto) {
        callback("La cadena está vacía");
        return;
    }

    // Expresiones regulares para comprobar (Regex)
    // ^ = inicio, $ = final, [0-9] números, [a-zA-Z] letras
    const esSoloNumeros = /^[0-9]+$/;
    const esSoloLetras = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
    const esAlfaNumerico = /^[a-zA-Z0-9ñÑ]+$/;

    // Lógica de comprobación
    if (esSoloNumeros.test(texto)) {
        callback("La cadena es NUMÉRICA");
    } 
    else if (esSoloLetras.test(texto)) {
        callback("La cadena es ALFABÉTICA");
    } 
    else if (esAlfaNumerico.test(texto)) {
        callback("La cadena es ALFANUMÉRICA");
    } 
    else {
        callback("La cadena contiene símbolos o caracteres especiales");
    }

}

// EL disparador que es cuando se pulsa el botón del html
function comprobarCadena(){

    const input = document.getElementById('inputCadena');
    const valor = input.value;

    // Llamada con callback
    analizarTexto(valor, mostrarResultado);

}