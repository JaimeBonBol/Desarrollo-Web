async function cargarFichero() {

    // Esperar y recoger el fichero xml con fetch
    const respuesta = await fetch("catalogo.xml");
    const datos = await respuesta.text();

    // Crear y parsear los datos del xml
    const parser = new DOMParser();
    const docXml = parser.parseFromString(datos, "text/xml");

    const artistas = docXml.getElementsByTagName("ARTIST");

    let txt = "";
    for (let i = 0; i < artistas.length; i++) {
        txt = txt + artistas[i].childNodes[0].nodeValue + "<br>";
    }
    document.getElementById("demo").innerHTML = txt;
}