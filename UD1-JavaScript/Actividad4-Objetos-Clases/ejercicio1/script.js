// Objeto literal alumno, se puede acceder a sus variables internas
let alumno = {
    nombre: "Juan",
    modulos: ["DIN", "AaD", "Opt", "IPE", "Ingles"],
    calificaciones: [10, 8.85, 9, 6.5, 9.5],

    salidaNombre: function(){
        return `Mi nombre es ${this.nombre}`
    },

    salidaCalificaciones: function() {
        let salida = "Mis calificaciones son:<br>";
        for (let i = 0; i < this.calificaciones.length; i++) {
            salida += `${this.modulos[i]}: ${this.calificaciones[i]}<br>`;
        }
        return salida;
    },

    salidaMedia: function(){
        let sumaNotas = 0;
        for (let i = 0; i < this.calificaciones.length; i++) {
            sumaNotas += this.calificaciones[i];
        }

        let media = sumaNotas / this.calificaciones.length;

        return `Mi nota media es ${media}`;
    }
}

function nombreAlumno(){
    const pNombre = document.getElementById("pNombre");

    pNombre.innerHTML = alumno.salidaNombre();
}

function calificacionesAlumno(){
    const pCalificaciones = document.getElementById("pCalificaciones");

    pCalificaciones.innerHTML = alumno.salidaCalificaciones();
}

function mediaAlumno(){
    const pMedia = document.getElementById("pMedia");

    pMedia.innerHTML = alumno.salidaMedia();
}