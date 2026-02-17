// Al cargar la página se comprueba lLocalStorage
const temaGuardado = localStorage.getItem("tema");

// Si había algo guardado, se lo ponemos al body, si no hay nada '' es el tema por defecto
if (temaGuardado) {
    document.body.className = temaGuardado;
}

// Función para cambiar y guardar el tema
function cambiarTema(nombreClase) {
    
    // Cambiamos la clase del body al momento
    // Si nombreClase está vacío (''), se quitan todas y vuelve al original
    document.body.className = nombreClase;

    // Guardamos en LocalStorage
    localStorage.setItem("tema", nombreClase);
}