// Variable global donde almacenar los Cds
let listaCDs = [];

// Cargar del XML y guardar en la lista global
async function cargarFichero() {
    const respuesta = await fetch("catalogo.xml");
    const datos = await respuesta.text();

    const parser = new DOMParser();
    const docXml = parser.parseFromString(datos, "text/xml");

    const CDs = docXml.getElementsByTagName("CD");
    
    // Vaciamos la lista actual para no duplicar si le das dos veces
    listaCDs = [];

    for (let i = 0; i < CDs.length; i++) {
        let anio = CDs[i].getElementsByTagName("YEAR")[0].textContent;

        if (parseInt(anio) > 1990) {
            let titulo = CDs[i].getElementsByTagName("TITLE")[0].textContent;
            let artista = CDs[i].getElementsByTagName("ARTIST")[0].textContent;
            
            // EN lugar de crear el Html aquí, guardamos en el array
            // Creamos un objeto
            let nuevoCD = {
                id: i,
                titulo: titulo,
                artista: artista,
                anio: anio
            };
            
            listaCDs.push(nuevoCD);
        }
    }
    // Mostrar por pantalla los Cds que estén en la lista
    mostrarEnPantalla(); 
}

// Mostrar por pantalla los Cds que hay en la lista
function mostrarEnPantalla() {
    const divDatos = document.getElementById("datos");
    divDatos.innerHTML = ""; // Limpiamos la pantalla

    listaCDs.forEach((cd, index) => {
        const divCD = document.createElement("div");
        divCD.style.border = "1px solid black";
        divCD.style.margin = "10px";
        divCD.style.padding = "10px";

        let txt = "";
        txt += `Título: ${cd.titulo} <br>`;
        txt += `Artista: ${cd.artista} <br>`;
        txt += `Año: ${cd.anio} <br>`;
        txt += `<br>`;

        divCD.innerHTML = txt;

        const botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar este CD";
        
       /* botonBorrar.onclick = function() {
            // Lo borramos de la lista usando su índice
            listaCDs.splice(index, 1); 

            mostrarEnPantalla();
        };
*/
        // Otra forma de hacerlo
        botonBorrar.onclick = function() {
            
            // Buscamos en qué posición está este objeto 'cd' ahora mismo en el array real
            // Esto nos da el índice actualizado, aunque hayamos borrado otros antes
            let posicionReal = listaCDs.indexOf(cd);

            if (posicionReal > -1) {
                // Lo borramos del array
                listaCDs.splice(posicionReal, 1);

                // Lo borramos de la pantalla (SOLO este div)
                divCD.remove();
                
            }
        };

        divCD.appendChild(botonBorrar);
        divDatos.appendChild(divCD);
    });
}

// Guardar en LocalStorage
function guardarEnLocalStorage() {
    // LocalStorage SOLO guarda texto.
    // Usamos JSON.stringify para convertir nuestro Array de objetos a texto.
    localStorage.setItem("CdsGuardados", JSON.stringify(listaCDs));
    alert("Datos guardados correctamente");
}

// Cargar desde LocalStorage
function cargarDatosLocalStorage() {
    // Recuperamos el texto
    let datosGuardados = localStorage.getItem("CdsGuardados");
    
    if (datosGuardados) {
        // Convertimos el texto otra vez a Array (Objetos)
        listaCDs = JSON.parse(datosGuardados);
 
        mostrarEnPantalla();
    } else {
        alert("No hay nada guardado en el LocalStorage");
    }
}

// Borrar datos de LocalStorage
function borrarDatosLocalStorage() {
    localStorage.removeItem("CdsGuardados");

    // LImpiamoss la pantalla y la lista
    listaCDs = [];
    mostrarEnPantalla();
    alert("LocalStorage borrado");
}