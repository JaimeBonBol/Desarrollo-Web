async function cargarFichero() {
    // Fetch y Parseo
    const respuesta = await fetch("catalogo.xml");
    const datos = await respuesta.text();
    
    const parser = new DOMParser();
    const docXml = parser.parseFromString(datos, "text/xml");

    const CDs = docXml.getElementsByTagName("CD");

    const divDatos = document.getElementById("datos");
    
    // Limpiar el contenedor por si se pulsa el botón de cargar varias veces
    divDatos.innerHTML = ""; 

    for (let i = 0; i < CDs.length; i++) {
        
        let anio = CDs[i].getElementsByTagName("YEAR")[0].textContent;
        
        if (parseInt(anio) > 1990) {
            let titulo = CDs[i].getElementsByTagName("TITLE")[0].textContent;
            let artista = CDs[i].getElementsByTagName("ARTIST")[0].textContent;

            const divCD = document.createElement("div");
            divCD.style.border = "1px solid black";
            divCD.style.margin = "10px";
            divCD.style.padding = "10px";

            // Declaramos 'txt' dentro del if
            // No usamos += porque queremos que cada div tenga SOLO su información
            let txt = `CD ${i} <br>`;
            txt += `Título: ${titulo} <br>`;
            txt += `Artista: ${artista} <br>`;
            txt += `Año: ${anio} <br>`;
            txt += `<br>`;

            divCD.innerHTML = txt;

            // Crear el botón de borrar 
            const botonBorrar = document.createElement("button");
            botonBorrar.textContent = "Borrar este CD";

            // Al hacer click en el botón se borra el div con la info del Cd
            botonBorrar.onclick = function(){
                divCD.remove();
            }

            divCD.appendChild(botonBorrar);

            divDatos.appendChild(divCD);
        }
    }
}