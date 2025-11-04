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
        let texto = `Mis calificaciones son:<br>`

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

class Clase {

    constructor(nombreCurso, aula, alumnos){
        this.nombreCurso = nombreCurso;
        this.aula = aula;
        this.alumnos = alumnos;
    }

    getNombreCurso(){
        return this.nombreCurso;
    }

    getAula(){
        return this.aula;
    }

    getAlumnos(){
        let texto = `<h4>Listado de Alumnos:</h4>`
        for(let alumno of this.alumnos){
            texto += alumno.salidaNombre() + `<br>`;
            texto +=  alumno.salidaCalificaciones();
            texto += `<br>`
        }

        return texto;
    }

    getInformacion(){
        let texto = '<h1>Información de clase</h1>';
        texto += `<h3>Nombre del curso : ${this.getNombreCurso()}</h3>`;
        texto += `<h3>Aula del curso : ${this.getAula()}<br></h3>`;

        return texto;
    }

}

let alumno1 = new Alumno("Marta Perez", {DIN: 9.8, PSP: 7.5, AaD: 8});
let alumno2 = new Alumno("Juan Lopez", {DIN: 5, PSP: 9.88, AaD: 4.25, INGLES: 6.5});
let alumno3 = new Alumno("Jose Sanchez", {DIN: 10, PSP: 9.25, AaD: 8.75, SGE: 3.15});
let alumno4 = new Alumno("Maria Rodriguez", {DIN: 5, PSP: 7.5, AaD: 10, INGLES: 10});

let arrayAlumnos = [alumno1, alumno2, alumno3, alumno4];

let clase = new Clase("2ºDAM", "Aula B4", arrayAlumnos);

const pClase = document.getElementById("pClase");

// Mostrar la información de la clase cuando carge la página
document.addEventListener("DOMContentLoaded", () => {
    const pClase = document.getElementById("pClase");
    pClase.innerHTML = clase.getInformacion();
});


// Función que interactúan con el HTML
function mostrarAlumnos() {
    const pAlumnos = document.getElementById("pAlumnos");
    pAlumnos.innerHTML = clase.getAlumnos();
}