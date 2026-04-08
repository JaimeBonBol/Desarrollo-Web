let listaRelojes = [];

async function cargarFichero() {
    
    const response = await fetch("relojes.json");
    const texto = await response.text();

    const relojes = JSON.parse(texto);
    listaRelojes = []

    for (let i = 0; i < relojes.length; i++) {
        let modelo = relojes[i].modelo;
        let marca = relojes[i].marca;
        let sumergible = relojes[i].sumergible;
        let precio = relojes[i].precio;

        let reloj = {
            modelo: modelo,
            marca: marca,
            sumergible: sumergible,
            precio: precio
        }

        listaRelojes.push(reloj);
    }

    mostrarRelojes();
}

function mostrarRelojes() {
    const divSalida = document.getElementById("salida");
    
    divSalida.innerHTML = "";

    listaRelojes.forEach(reloj => {
        const divReloj = document.createElement("div");
        divReloj.style.padding = "10px";
        divReloj.style.border = "1px solid black";
        divReloj.style.marginBottom = "10px";

        let txt = "";
        txt += `<strong>Modelo: </strong> ${reloj.modelo}<br>`;
        txt += `<strong>Marca: </strong> ${reloj.marca}<br>`;
        txt += `<strong>Sumergible: </strong> ${reloj.sumergible}<br>`;
        txt += `<strong>Precio: </strong> ${reloj.precio}<br>`;

        divReloj.innerHTML = txt;

        const btnBorrar = document.createElement("button");
        btnBorrar.textContent = "Borrar reloj";
        btnBorrar.onclick = function borrarReloj() {
            let index = listaRelojes.indexOf(reloj);

            listaRelojes.splice(index, 1);
            divReloj.remove();
        }

        divReloj.innerHTML = txt;
        divReloj.appendChild(btnBorrar);
        divSalida.appendChild(divReloj);
    });
}

function filtrarMarcas() {
    const divSalida = document.getElementById("salida");
    
    divSalida.innerHTML = "";

    const marcaSeleccionada = document.getElementById("marca").value;

    listaRelojes.forEach(reloj => {

        if (reloj.marca === marcaSeleccionada) {
            const divReloj = document.createElement("div");
            divReloj.style.padding = "10px";
            divReloj.style.border = "1px solid black";
            divReloj.style.marginBottom = "10px";

            let txt = "";
            txt += `<strong>Modelo: </strong> ${reloj.modelo}<br>`;
            txt += `<strong>Marca: </strong> ${reloj.marca}<br>`;
            txt += `<strong>Sumergible: </strong> ${reloj.sumergible}<br>`;
            txt += `<strong>Precio: </strong> ${reloj.precio}<br>`;

            divReloj.innerHTML = txt;

            const btnBorrar = document.createElement("button");
            btnBorrar.textContent = "Borrar reloj";
            btnBorrar.onclick = function borrarReloj() {
                let index = listaRelojes.indexOf(reloj);

                listaRelojes.splice(index, 1);
                divReloj.remove();
            }

            divReloj.innerHTML = txt;
            divReloj.appendChild(btnBorrar);
            divSalida.appendChild(divReloj);
        }else if(marcaSeleccionada === "Todos"){
            mostrarRelojes();
        }
    });
}

function guardarMemoria() {
    localStorage.setItem("relojesLS", JSON.stringify(listaRelojes));
}

function borrarMemoria() {
    localStorage.clear();
}