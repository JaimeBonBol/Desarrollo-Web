async function filtrarCategoria() {
    
    const divSalida = document.getElementById("salida");
    const categoriaSeleccionada = document.getElementById("productos").value;

    const response = await fetch("productos.xml");
    const texto = await response.text();

    const datos = new DOMParser().parseFromString(texto, "text/xml");

    const nodosProductos = datos.getElementsByTagName("producto");

    divSalida.innerHTML = "";

    for (let i = 0; i < nodosProductos.length; i++) {
        let categoria = nodosProductos[i].getElementsByTagName("categoria")[0].textContent;

        if (categoria === categoriaSeleccionada) {
            const divProducto = document.createElement("div");
            divProducto.style.border = "1px solid black";
            divProducto.style.padding = "10px";
            divProducto.style.marginBottom = "10px";

            let txt = "";
            txt += `Nombre: ${nodosProductos[i].getElementsByTagName("nombre")[0].textContent} <br>`;
            txt += `Categoria: ${nodosProductos[i].getElementsByTagName("categoria")[0].textContent} <br>`;
            txt += `Precio: ${nodosProductos[i].getElementsByTagName("precio")[0].textContent} <br>`;

            divProducto.innerHTML = txt;
            divSalida.appendChild(divProducto);
        }

    }
}