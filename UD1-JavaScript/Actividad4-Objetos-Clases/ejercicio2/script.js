class Alumno{

    constructor(nombre, calificaciones){
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }

    getNombre(){
        return this.nombre;
    }

    getCalificaciones(){
        return this.calificaciones;
    }

    setNombre(nombre){
        this.nombre = nombre;
    }

    setCalificaciones(calificaciones){
        this.calificaciones = calificaciones;
    }

    salidaNombre(){
        return `Mi nombre es ${this.getNombre()}`;
    }

    salidaCalificaciones(){
        let texto = `<strong>Mis calificaciones son:</strong><br>`

        for(let modulo in this.calificaciones){
            texto += `${modulo} : ${this.calificaciones[modulo]}<br>`
        }

        return texto;
    }

    getNotaMedia(){
        let sumaNotas = 0;
        let cantidad = 0;

        for(let modulo in this.calificaciones){
            sumaNotas += this.calificaciones[modulo];
            cantidad ++;
        }

        let notaMedia = sumaNotas / cantidad;

        return `Mi nota media es ${notaMedia}`;
    }

}

let calificacionesAlumno = {
    DIN: 8.5,
    AaD: 10.0,
    Opt: 6.5,
    IPE: 9.0,
    Ingles: 8.0,
}

let alumno = new Alumno("Laura Jimenez", calificacionesAlumno);

// Funciones que interactúan con el HTML
function nombreAlumno() {
    const pNombre = document.getElementById("pNombre");
    pNombre.innerHTML = alumno.salidaNombre();
}

function salidaCalificacionesAlumno() {
    const pCalificaciones = document.getElementById("pCalificaciones");
    pCalificaciones.innerHTML = alumno.salidaCalificaciones();
}

function mediaAlumno() {
    const pMedia = document.getElementById("pMedia");
    pMedia.innerHTML = alumno.getNotaMedia();
}

