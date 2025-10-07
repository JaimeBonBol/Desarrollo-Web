function cambiarSize() {

    // Recoger imagen y números.
    const miImagen = document.getElementById("miImagen");
    const ancho =parseInt(document.getElementById("ancho").value);
    const alto =parseInt(document.getElementById("alto").value);

    // Aplicar ancho y alto recogido de los inputs de los números
    miImagen.style.width = ancho + "px";
    miImagen.style.height = alto + "px";
}