let listaCds = [];

async function cargarFichero() {
    
    // Cargar fichero con fetch y parsear a objetos javascript
    const response = await fetch("catalogo.xml");
    const texto = await response.text();

    const datos = new DOMParser().parseFromString(texto, "text/xml");

    // Obtener los Cds
    const Cds = datos.getElementsByTagName("CD");

    // Vaciar la lista de Cds
    listaCds = [];

    // Por cada Cd, creo un objeto literal y lo guardo en la lista
    for (let i = 0; i < Cds.length; i++) {
        
        // Comprobar y solo guardar los que su nacionalidad sea 'UK'
        let nacionalidad = Cds[i].getElementsByTagName("COUNTRY")[0].textContent;
        console.log(nacionalidad)

        if (nacionalidad === "UK") {
            // Si es de UK, se crea un objeto literal con la info de ese Cd y se gaurda en la lista
            // ya qaue la funcion mostrarCds() dibujará los Cds que hay en la lista en la pantalla
            let Cd = {
                titulo: Cds[i].getElementsByTagName("TITLE")[0].textContent,
                artista: Cds[i].getElementsByTagName("ARTIST")[0].textContent,
                nacionalidad: nacionalidad,
                compania: Cds[i].getElementsByTagName("COMPANY")[0].textContent,
                precio: Cds[i].getElementsByTagName("PRICE")[0].textContent,
                anio: Cds[i].getElementsByTagName("YEAR")[0].textContent
            }

            listaCds.push(Cd);

        }
    }

    // Mostrar los Cds de la lista, importante que esté fuera del bucle
    mostrarCds();

}

// Mostrar por pantalla los Cds que hay en la lista
function mostrarCds() {
    const divSalida = document.getElementById("salida");
    // Limpiar por si hay añlgo
    divSalida.innerHTML = '';
    
    /*console.log("LLlega")
    console.log(listaCds.length)*/

    // Por cada elemento (CD) de la lista se crea un div
    listaCds.forEach(cd => {
        const divCd = document.createElement('div');
        console.log("Llega")

        let txt = '';
        txt += `Titulo: ${cd.titulo}<br>`;
        txt += `Artitsta: ${cd.artista}<br>`;
        txt += `Nacionalidad: ${cd.nacionalidad}<br>`;
        txt += `Compañía: ${cd.compania}<br>`;
        txt += `Precio: ${cd.precio}<br>`;
        txt += `Año: ${cd.anio}<br>`;

        // añadir el texto con lo datos del cd al div
        divCd.innerHTML = txt;

        // Crear el  botón para borrar
        const btnBorrar = document.createElement('button');
        btnBorrar.textContent = 'Borrar CD';

        // Si se pulsa el botón se borra del array ese cd a través de su índice que lo hemos buscado
        // También se borra el div de ese disco.
        btnBorrar.onclick = () => {
            // Buscar la posición del disco actual
            let indexCd = listaCds.indexOf(cd);

            // Borrar del array
            listaCds.splice(indexCd, 1);

            // Borrar el div de la pantalla
            divCd.remove();
        }
        divCd.appendChild(btnBorrar);
        // Después de divCd.appendChild(btnBorrar)
        divCd.appendChild(document.createElement('br'));
        divCd.appendChild(document.createElement('br'));
        divSalida.appendChild(divCd);
    });
}