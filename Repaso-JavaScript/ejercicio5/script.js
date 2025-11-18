window.onload = function() {
    actualizarLista();
};

const salidaArray = document.getElementById('array');
const inputCoche = document.getElementById('inputCoche');

let listaCoches = ["Masserati"]

function actualizarLista(){
    let texto= "[";

    for (const coche of listaCoches) {
        texto += coche + " ";        
    }

    texto += "]"

    salidaArray.innerHTML = texto;
}

function addDeleteCoche() {
    const valorInput = inputCoche.value.trim();

    // Buscar si ya existe
    const index = listaCoches.indexOf(valorInput);

    // Si no existe, develve -1
    if (index !== -1) {
        // Si existe, eliminarlo
        listaCoches.splice(index, 1);
    } else {
        // Si no existe, añadirlo
        listaCoches.push(valorInput);
    }

    actualizarLista();
}
