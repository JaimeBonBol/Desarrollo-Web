async function filtrarCoches() {
    
    const response = await fetch("coche.json");
    const texto = await response.text();

    const coches = JSON.parse(texto);

    const divSalida = document.getElementById("salida");
    const paisSeleccionado = document.getElementById("paises").value;

    divSalida.innerHTML = "";
    for (let i = 0; i < coches.length; i++) {
        let pais = coches[i].lugar_origen;

        if(pais === paisSeleccionado){
            const divPais = document.createElement("div");
            divPais.style.border = "1px solid black";
            divPais.style.padding = "10px";
            divPais.style.marginBottom = "10px";

            let txt = "";
            txt += `Marca: ${coches[i].marca} <br>`;
            txt += `Año: ${coches[i].anio_fundacion} <br>`;
            txt += `País: ${coches[i].lugar_origen} <br>`;

            divPais.innerHTML = txt;
            divSalida.appendChild(divPais);
        }
    }
}