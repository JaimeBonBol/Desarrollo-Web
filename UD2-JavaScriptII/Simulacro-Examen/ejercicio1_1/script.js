const listaCds = [];

async function cargarArchivo() {

    const response = await fetch("catalogo.xml");
    const texto = await response.text();

    const datos = new DOMParser().parseFromString(texto, "text/xml");

    const nodosCD = datos.getElementsByTagName("CD");

    for (let i = 0; i < nodosCD.length; i++) {
        let nacionalidad = nodosCD[i].getElementsByTagName("COUNTRY")[0].textContent;

        if (nacionalidad === "UK") {
            let cd = {
                title: nodosCD[i].getElementsByTagName("TITLE")[0].textContent,
                artist: nodosCD[i].getElementsByTagName("ARTIST")[0].textContent,
                country: nodosCD[i].getElementsByTagName("COUNTRY")[0].textContent,
                company: nodosCD[i].getElementsByTagName("COMPANY")[0].textContent,
                price: nodosCD[i].getElementsByTagName("PRICE")[0].textContent,
                year: nodosCD[i].getElementsByTagName("YEAR")[0].textContent
            }

            listaCds.push(cd);
        }
    }

    mostrarCds();


}

function insertarCD() {
    const inputTitulo = document.getElementById("inputTitulo");
    const inputArtista = document.getElementById("inputArtista");
    const inputCompany = document.getElementById("inputCompany");
    const inputPrecio = document.getElementById("inputPrecio");
    const inputYear = document.getElementById("inputYear");

    let cdNuevo = {
        title: inputTitulo.value,
        artist: inputArtista.value,
        country: "UK",
        company:inputCompany.value,
        price: inputPrecio.value,
        year: inputYear.value
    }

    listaCds.push(cdNuevo);

    mostrarCds();
}

function mostrarCds() {
    const divSalida = document.getElementById("salida");

    listaCds.forEach(cd => {
        let divCd = document.createElement("div");
        divCd.style.border = "1px solid black";
        divCd.style.padding = "10px";

        let txt = "";
        txt += `Título: ${cd.title} <br>`;
        txt += `Artista: ${cd.artist} <br>`;
        txt += `País: ${cd.country} <br>`;
        txt += `Compañía: ${cd.company} <br>`;
        txt += `Precio: ${cd.price} <br>`;
        txt += `Año: ${cd.year} <br>`;

        divCd.innerHTML = txt;
        let botonBorrar = document.createElement("button");
        botonBorrar.textContent = "Borrar Cd";

        botonBorrar.onclick = function borrarCd() {
            let index = listaCds.indexOf(cd);

            listaCds.splice(index, 1);
            divCd.remove();
        }

        divCd.appendChild(botonBorrar);
        divSalida.appendChild(divCd);
    });
}

cargarArchivo();