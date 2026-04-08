async function filtrarPais() {
    
    // Cargar fichero
    const response = await fetch("movil.json");
    const texto = await response.text();

    const moviles = JSON.parse(texto);

    const divSalida = document.getElementById("salida");
    const lugarSeleccionado = document.getElementById("lugarOrigen").value;

    divSalida.innerHTML = "";

    for (let i = 0; i < moviles.length; i++) {
        let lugarOrigen = moviles[i].lugar_origen;

        if (lugarOrigen === lugarSeleccionado) {
            const divMovil = document.createElement("div");
            divMovil.style.padding = "10px";
            divMovil.style.border = "1px solid black";
            divMovil.style.marginBottom = "10px";

            let txt = "";
            txt += `<strong>Marca:</strong> ${moviles[i].marca} <br>`;
            txt += `<strong>Año de fundación:</strong> ${moviles[i].anio_fundacion} <br>`;

            divMovil.innerHTML = txt;
            divSalida.appendChild(divMovil);
        }else if(lugarSeleccionado === "Todos"){
            const divMovil = document.createElement("div");
            divMovil.style.padding = "10px";
            divMovil.style.border = "1px solid black";
            divMovil.style.marginBottom = "10px";

            let txt = "";
            txt += `<strong>Marca:</strong> ${moviles[i].marca} <br>`;
            txt += `<strong>Año de fundación:</strong> ${moviles[i].anio_fundacion} <br>`;

            divMovil.innerHTML = txt;
            divSalida.appendChild(divMovil);
        }
    }
}

// Esto es para que de primeras carge todos ya que esta la opción del select por defecto en todos
filtrarPais();