let alumnos = JSON.parse(localStorage.getItem("alumnosLS")) || [];

mostrarAlumnos();

function addAlumno() {
    const nombre = document.getElementById("inputNombre").value;
    const clase = document.getElementById("inputClase").value;

    let alumno = {
        nombre: nombre,
        clase: clase
    }

    alumnos.push(alumno);

    actualizarLocalStorage();
    mostrarAlumnos();

}

function actualizarLocalStorage() {
    localStorage.setItem("alumnosLS", JSON.stringify(alumnos));
}

function mostrarAlumnos() {
    const divSalida = document.getElementById("salida");
    divSalida.innerHTML = "";

    for (let i = 0; i < alumnos.length; i++) {
        const divAlumno = document.createElement("div");
        divAlumno.style.border = "1px solid black";
        divAlumno.style.padding = "10px";
        divAlumno.style.marginBottom = "10px";

        let txt = "";
        txt += `Nombre: ${alumnos[i].nombre} <br>`;
        txt += `Clase: ${alumnos[i].clase} <br>`;

        divAlumno.innerHTML = txt;

        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar Alumno";
        btnBorrar.onclick = function borrarAlumno() {
            let index = alumnos.indexOf(alumnos[i]);

            alumnos.splice(index, 1);
            actualizarLocalStorage();
            divAlumno.remove();
        }

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar Alumno";
        btnEditar.onclick = function editarAlumno() {
            let index = alumnos.indexOf(alumnos[i]);
            let nuevoNombre = prompt("Nuevo nombre:", alumnos[index].nombre);
            let nuevaClase = prompt("Nueva clase:", alumnos[index].clase);

            alumnos[i].nombre = nuevoNombre;
            alumnos[i].clase = nuevaClase;

            actualizarLocalStorage();
            mostrarAlumnos();
        }

        divAlumno.append(btnBorrar);
        divAlumno.append(btnEditar);

        divSalida.appendChild(divAlumno);
    }
}