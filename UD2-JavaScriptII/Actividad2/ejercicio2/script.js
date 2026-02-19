async function cargarFichero() {
    //Fetch y Parseo
    const respuesta = await fetch("catalogo.xml");
    const datos = await respuesta.text();
    
    const parser = new DOMParser();
    const docXml = parser.parseFromString(datos, "text/xml");

    const CDs = docXml.getElementsByTagName("CD");

    let txt = "";

    for (let i = 0; i < CDs.length; i++) {
        
        // En vez de childNodes, buscamos la etiqueta DENTRO del CD actual (CDs[i])
        // Se usa [0] porque getElementsByTagName devuelve una lista, y sabemos que solo hay un TITULO por CD
        let anio = CDs[i].getElementsByTagName("YEAR")[0].textContent;
        
        // 4. Filtro
        if (parseInt(anio) >= 1990) {
            let titulo = CDs[i].getElementsByTagName("TITLE")[0].textContent;
            let artista = CDs[i].getElementsByTagName("ARTIST")[0].textContent;

            txt += `CD ${i} <br>`;
            txt += `Título: ${titulo} <br>`;
            txt += `Artista: ${artista} <br>`;
            txt += `Año: ${anio} <br>`;
            txt += `<br>`;
        }
    }
    
    document.getElementById("datos").innerHTML = txt;
}