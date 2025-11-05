class Ficha{

    constructor(nombre, distancia, distanciaSesiones){
        this.nombre = nombre;
        this.distancia = distancia;
        this.distanciaSesiones = distanciaSesiones;
    }

    getNombre(){
        return this.nombre;
    }

    getDistancia(){

    }

    getDistanciaSesiones(){
        return this.distanciaSesiones;
    }

    setNombre(nombreNuevo){
        this.nombre = nombreNuevo;
    }

    setDistancia(distanciaNueva){
        this.distancia = distanciaNueva;
    }

    setDistanciaSesiones(arrayNuevo){
        this.distanciaSesiones = arrayNuevo;
    }

    anotar(dist) {
        const numero = parseFloat(dist); // convertir string a número
        if (!isNaN(numero)) {
            this.distanciaSesiones.push(numero);
        } else {
            alert("Error: introduce un número válido");
        }
    }


    media() {
        if (this.distanciaSesiones.length === 0) {
            return 0; // evita división por 0
        }

        let distanciaTotal = 0;

        for (let sesion of this.distanciaSesiones) {
            distanciaTotal += sesion;
        }

        let media = distanciaTotal / this.distanciaSesiones.length;

        return media.toFixed(2); // redondea a 2 decimales
    }

}

let arrayDistancias = [];

let ficha1 = new Ficha("Pepe Martinez", 0, arrayDistancias)

function anotarDistancia(){
    const inputDist = document.getElementById("inputDistancia"); // el elemento
    const valor = inputDist.value.trim(); // valor actual como string

    if (valor === "") {
        alert("Error. El input está vacío.");
    } else {
        ficha1.anotar(valor); // convertir a número dentro de anotar
    }

    actualizarDistancias();

    // Limpiar el input
    inputDist.value = "";
}

function actualizarDistancias(){
    const salidaDistancias = document.getElementById("distanciasTotales");

    let distanciasTotales = ficha1.getDistanciaSesiones();

    salidaDistancias.innerHTML = distanciasTotales;
}

function limpiarDistancias(){
    const salidaDistancias = document.getElementById("distanciasTotales");
    const salidaMedia = document.getElementById("mediaDistancias");

    ficha1.setDistanciaSesiones([]);

    salidaDistancias.innerHTML = "";
    salidaMedia.innerHTML = "";
}

function calcularMedia(){
    const salidaMedia = document.getElementById("mediaDistancias");

    let mediaDistancias = ficha1.media();

    salidaMedia.innerHTML = `La media de las distancias es ${mediaDistancias}`;
}