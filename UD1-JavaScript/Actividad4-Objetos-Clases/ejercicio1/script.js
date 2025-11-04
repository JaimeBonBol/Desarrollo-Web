// Objeto literal alumno
let alumno = {
    nombre: "Juan",
    calificaciones: {
        DIN: 8.5,
        AaD: 10.0,
        Opt: 6.5,
        IPE: 9.0,
        Ingles: 8.0
    },

    // Devuelve el nombre
    salidaNombre: function() {
        return `Mi nombre es ${this.nombre}`;
    },

    // Devuelve las calificaciones formateadas
    salidaCalificaciones: function() {
        let salida = "<strong>Mis calificaciones son:</strong><br>";

        // Recorremos el objeto calificaciones con for...in
        for (let modulo in this.calificaciones) {
            salida += `${modulo}: ${this.calificaciones[modulo]}<br>`;
        }

        return salida;
    },

    // Calcula la media de las calificaciones
    salidaMedia: function() {
        let sumaNotas = 0;
        let cantidad = 0;

        for (let modulo in this.calificaciones) {
            sumaNotas += this.calificaciones[modulo];
            cantidad++;
        }

        let media = sumaNotas / cantidad;
        return `Mi nota media es ${media}`;
    }
};

// Funciones que interactúan con el HTML
function nombreAlumno() {
    const pNombre = document.getElementById("pNombre");
    pNombre.innerHTML = alumno.salidaNombre();
}

function calificacionesAlumno() {
    const pCalificaciones = document.getElementById("pCalificaciones");
    pCalificaciones.innerHTML = alumno.salidaCalificaciones();
}

function mediaAlumno() {
    const pMedia = document.getElementById("pMedia");
    pMedia.innerHTML = alumno.salidaMedia();
}
