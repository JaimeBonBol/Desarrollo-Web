let listaAlumnos = JSON.parse(localStorage.getItem("alumnosLS")) || [];

mostrarAlumnos();

function insertarAlumno() {
    const curso = document.getElementById("inputCurso").value;
    const nombre = document.getElementById("inputNombre").value;
    const nota = document.getElementById("inputNota").value;

    let alumno = {
        curso: curso,
        nombre: nombre,
        nota: nota
    }

    listaAlumnos.push(alumno);
    actualizarMemoria();
    mostrarAlumnos();

    const inputCurso = document.getElementById("inputCurso");
    const inputNombre = document.getElementById("inputNombre");
    const inputNota = document.getElementById("inputNota");

    inputCurso.innerHTML = "";
    inputNombre.innerHTML = "";
    inputNota.innerHTML = "";
}

function mostrarAlumnos() {
    const divSalida = document.getElementById("salida");
    divSalida.innerHTML = "";

    listaAlumnos.forEach(alumno => {
        const divAlumno = document.createElement("div");
        divAlumno.style.padding = "10px";
        divAlumno.style.border = "1px solid black";
        divAlumno.style.marginBottom = "10px";

        let txt = "";
        txt += `<strong>Curso: </strong> ${alumno.curso} <br>`;
        txt += `<strong>Nombre: </strong> ${alumno.nombre} <br>`;
        txt += `<strong>Nota: </strong> ${alumno.nota} <br>`;

        const btnBorrar = document.createElement("button")
        btnBorrar.textContent = "Borrar alumno";
        btnBorrar.onclick = function borrarAlumno() {
            let index = listaAlumnos.indexOf(alumno);

            listaAlumnos.splice(index, 1);
            divAlumno.remove();
            actualizarMemoria();
        }

        divAlumno.innerHTML = txt;
        divAlumno.appendChild(btnBorrar);
        divSalida.appendChild(divAlumno);
    });
}

function actualizarMemoria() {
    localStorage.setItem("alumnosLS", JSON.stringify(listaAlumnos));
}

function borrarMemoria() {
    localStorage.clear();
    listaAlumnos = [];
    mostrarAlumnos();
}