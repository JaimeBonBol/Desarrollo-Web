class Asignatura {
    constructor(nombre, numCreditos, numMaxAlumnos) {
        this.nombre = nombre;
        this.numCreditos = numCreditos;
        this.numMaxAlumnos = numMaxAlumnos;
    }

    getNombre(){
        return this.nombre;
    }

    mostrarInfo(){
        return `Nombre: ${this.nombre}, Nº créditos: ${this.numCreditos}, Nº máximo de alumnos: ${this.numMaxAlumnos}`;
    }

    toString(){
        return this.getNombre();
    }
}

class Curso {
    constructor(nombreCurso, asignaturas=[]) {
        this.nombreCurso = nombreCurso;
        this.asignaturas = asignaturas;
    }

    anyadirAsignatura(asignatura){
        let encontrada = false;

        for (const a of this.asignaturas) {
            if(a.getNombre() === asignatura.getNombre()){
                encontrada = true;
            }
        }

        if (encontrada == false) {
            this.asignaturas.push(asignatura);
        }
    }

    eliminarAsignatura(asignatura){
        /*let encontrada = false;

        for (const a of this.asignaturas) {
            if(a.getNombre() === asignatura.getNombre()){
                encontrada = true;
            }
        }

        if (encontrada == true) {
            let posicionAsignatura = this.asignaturas.indexOf(asignatura);

            for (let i = 0; i < this.asignaturas.length; i++) {
                this.asignaturas.splice()
            }
        }*/

        let posicionAsignatura = this.asignaturas.indexOf(asignatura);

        if (posicionAsignatura !== -1) {
            this.asignaturas.splice(posicionAsignatura, 1);
        }
        
    }

    calcularNumAsig(){
        contador = 0;

        for (const a of this.asignaturas) {
            contador ++;
        }


        return contador;
    }

    mostrarCurso(){
        return `Curso: ${this.nombreCurso}, número de asignaturas: ${this.calcularNumAsig()}`;
    }

    listarAsignaturas(){
        let texto = 'Asignaturas: <br>';

        for (const a of this.asignaturas) {
            texto += `${a.getNombre()}`;
        }

        return texto;
    }

    mostrarAsignatura(nombreAsignatura){
        for (const a of this.asignaturas) {
            if (a.getNombre() === nombreAsignatura) {
                a.toString();
            }
        }
    }

    toString(){
        return this.nombreCurso;
    }
}


let curso1 = new Curso("2ºDAM");
let curso2 = new Curso("1ºDAM");

let asignatura1 = new Asignatura("DIN", 12, 23);
let asignatura2 = new Asignatura("PSP", 14, 18);
let asignatura3 = new Asignatura("BBDD", 11, 16);

curso1.anyadirAsignatura(asignatura1);
curso1.anyadirAsignatura(asignatura2);

curso1.anyadirAsignatura(asignatura3);
curso1.eliminarAsignatura(asignatura3);

curso2.anyadirAsignatura(asignatura3);


let cursos = [curso1, curso2];
let asignaturas = [asignatura1, asignatura2, asignatura3];


function mostrarArrays(){
    document.getElementById('arrayCursos').innerHTML = cursos;
    document.getElementById('arrayAsignaturas').innerHTML = asignaturas;
}

mostrarArrays();


function buscarCurso() {
    const curson = document.getElementById('cursoBuscar').value.trim();

    for (const curso of cursos) {
        if(curson === curso.getNombre){
            console.log(curso.mostrarCurso());
        }
    }
    
}