class Bus { 
    
    constructor(capacidad, conductor){
        this.capacidad = capacidad;
        this.pasajeros = 0;
        this.conductor = conductor;
    }

    getCapacidad(){
        return this.capacidad;
    }

    getPasajeros(){
        return this.pasajeros;
    }

    getConductor(){
        return this.conductor;
    }

    setCapacidad(nuevaCapacidad){
        this.capacidad = nuevaCapacidad;
    }

    setPasajeros(nuevaCantPasajeros){
        this.pasajeros = nuevaCantPasajeros;
    }

    setConductor(nuevoConductor){
        this.conductor = nuevoConductor;
    }

    subir(pasajeros){
        const valorPasajeros = parseInt(pasajeros);
        if(valorPasajeros > 0){
            if(valorPasajeros <= this.capacidad){
                this.pasajeros += valorPasajeros;
                this.capacidad -= valorPasajeros;
            }else{
                alert("Error. No pueden subir más pasajeros de la capacidad permitida")
            }
        }else{
            alert("Error. Cantidad de pasajeros no puede ser negativa.")
        }
    }

    bajar(pasajeros){
        const valorPasajeros = parseInt(pasajeros);
        if(valorPasajeros > 0){
            if(valorPasajeros <= this.pasajeros){
                this.pasajeros -= valorPasajeros;
                this.capacidad += valorPasajeros;
            }else{
                alert("Error. No pueden bajar más pasajeros de los disponibles.")
            }
        }else{
            alert("Error. Cantidad de pasajeros no puede ser negativa.")
        }
    }

}


class Conductor {

    constructor(nombre, licencia){
        this.nombre = nombre;
        this.licencia = licencia;
    }

    getNombre(){
        return this.nombre;
    }

    getLicencia(){
        return this.licencia;
    }

    setNombre(nuevoNombre){
        this.nombre = nuevoNombre;
    }

    setLicencia(nuevaLicencia){
        this.licencia = nuevaLicencia;
    }

    mostrarInfo(){
        return `(Nombre: ${this.getNombre()} - Licencia: ${this.getLicencia()})`;
    }

}

let conductor1 = new Conductor("Josefa Nuñez", 1);

let bus1 = new Bus(50, conductor1);

function mostrarInformacionBus(){
    const salidaInfo = document.getElementById("infoBus");

    let capacidadBus = bus1.getCapacidad();
    let pasajeros = bus1.getPasajeros();
    let conductor = bus1.getConductor();

    salidaInfo.innerHTML = `Capacidad Bus: ${capacidadBus} - Pasajeros Bus: ${pasajeros} - Conductor Bus: ${conductor.mostrarInfo()}`;
}


// Mostrar la información de la clase cuando carge la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarInformacionBus();
});


function subirPasajerosBus(){
    // El elemento
    const pasajerosSubir = document.getElementById("inputSubir");
    // Valor elemennto
    const valorinput = pasajerosSubir.value.trim();

    bus1.subir(valorinput);

    mostrarInformacionBus();
    pasajerosSubir.value = "";
}

function bajarPasajerosBus(){
    // El elemento
    const pasajerosBajar = document.getElementById("inputBajar");
    // Valor elemennto
    const valorinput = pasajerosBajar.value.trim();

    bus1.bajar(valorinput);

    mostrarInformacionBus();
    pasajerosBajar.value = "";
}