// 1. Inicializamos el array. 
// Intentamos leer de localStorage. Si está vacío (null), creamos un array vacío [].
let alumnos = JSON.parse(localStorage.getItem("misAlumnos")) || [];

// Pintamos los datos nada más cargar la página para ver lo que ya estaba guardado
mostrarAlumnos();

// 2. Función para guardar los cambios en LocalStorage (la usaremos mucho)
function actualizarMemoria() {
    localStorage.setItem("misAlumnos", JSON.stringify(alumnos));
}

// 3. Función para insertar un alumno nuevo
function insertarAlumno() {
    const inputNombre = document.getElementById("inputNombre");
    const inputNota = document.getElementById("inputNota");

    // Creamos el objeto alumno
    let nuevoAlumno = {
        nombre: inputNombre.value,
        nota: inputNota.value
    };

    // Lo metemos en el array
    alumnos.push(nuevoAlumno);

    // Actualizamos la memoria y la pantalla
    actualizarMemoria();
    mostrarAlumnos();

    // Limpiamos los inputs
    inputNombre.value = "";
    inputNota.value = "";
}

// 4. Función para mostrar la lista
function mostrarAlumnos() {
    const salida = document.getElementById("salida");
    salida.innerHTML = ""; // Limpiamos antes de repintar

    // Recorremos el array. Usamos 'index' para saber la posición exacta de cada elemento
    alumnos.forEach((alumno, index) => {
        const divAlumno = document.createElement("div");
        divAlumno.style.border = "1px solid black";
        divAlumno.style.padding = "10px";
        divAlumno.style.marginBottom = "10px";

        divAlumno.innerHTML = `<strong>Nombre:</strong> ${alumno.nombre} <br> <strong>Nota:</strong> ${alumno.nota} <br><br>`;

        // -- Botón Borrar --
        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar";
        btnBorrar.onclick = () => borrarAlumno(index);

        // -- Botón Editar --
        const btnEditar = document.createElement("button");
        btnEditar.textContent = "Editar";
        btnEditar.style.marginLeft = "10px";
        btnEditar.onclick = () => editarAlumno(index);

        divAlumno.appendChild(btnBorrar);
        divAlumno.appendChild(btnEditar);
        salida.appendChild(divAlumno);
    });
}

// 5. Función para borrar
function borrarAlumno(index) {
    // splice corta el array en la posición 'index' y elimina 1 elemento
    alumnos.splice(index, 1);
    
    // Actualizamos la memoria y repintamos
    actualizarMemoria();
    mostrarAlumnos();
}

// 6. Función para editar
function editarAlumno(index) {
    // Usamos prompt() porque es la forma más rápida y nativa de pedir datos en un examen
    let nuevoNombre = prompt("Introduce el nuevo nombre:", alumnos[index].nombre);
    let nuevaNota = prompt("Introduce la nueva nota:", alumnos[index].nota);

    // Si el usuario no le ha dado a "Cancelar" en el prompt, actualizamos
    if (nuevoNombre !== null && nuevaNota !== null) {
        alumnos[index].nombre = nuevoNombre;
        alumnos[index].nota = nuevaNota;
        
        // Actualizamos la memoria y repintamos
        actualizarMemoria();
        mostrarAlumnos();
    }
}