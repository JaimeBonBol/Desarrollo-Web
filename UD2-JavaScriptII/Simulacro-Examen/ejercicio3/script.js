async function filtrarPais(){
    const selectPaises = document.getElementById("lugar_origen");
    const salida = document.getElementById("salida");

    const paisElegido = selectPaises.value;

    // Cargar fichero con fetch y parsear a objetos javascript
    const response = await fetch("coche.json");
    const texto = await response.text();

    const coches = JSON.parse(texto);

    salida.innerHTML = "";

    for (let i = 0; i < coches.length; i++) {
        let pais = coches[i].lugar_origen;

        if(pais === paisElegido){
            const divCoche = document.createElement("div");
            divCoche.style.border = "1px solid black";
            divCoche.style.padding = "20px";
            divCoche.style.maxWidth = "200px";

            let txt = "";
            txt += "<strong>Marca</strong>: " + coches[i].marca + "<br>";
            txt += "<strong>Año</strong>: " + coches[i].anio_fundacion + "<br>";
            txt += "<strong>País de origen</strong>: " + pais + "<br>";

            divCoche.innerHTML = txt;

            salida.appendChild(divCoche);
        }
    }

}