async function filtrarProductos() {
    
    // Cargar archivo y parsear
    const response = await fetch("productos.xml");
    const texto = await response.text();

    const datos = new DOMParser().parseFromString(texto, "text/xml");

    const nodosProductos = datos.getElementsByTagName("producto");

    const divSalida = document.getElementById("salida");
    const categoriaSeleccionada = document.getElementById("categorias").value;

    divSalida.innerHTML = "";

    for (let i = 0; i < nodosProductos.length; i++) {
        let categoria = nodosProductos[i].getElementsByTagName("categoria")[0].textContent;

        if (categoria === categoriaSeleccionada) {
            const divProducto = document.createElement("div");
            divProducto.style.padding = "10px";
            divProducto.style.border = "1px solid black";
            divProducto.style.marginBottom = "10px";

            let txt = "";
            txt += `<strong>Nombre</strong>: ${nodosProductos[i].getElementsByTagName("nombre")[0].textContent} <br>`;
            txt += `<strong>Categoría</strong>: ${nodosProductos[i].getElementsByTagName("categoria")[0].textContent} <br>`;
            txt += `<strong>Precio</strong>: ${nodosProductos[i].getElementsByTagName("precio")[0].textContent} <br>`;

            divProducto.innerHTML = txt;
            divSalida.appendChild(divProducto);
        }else if(categoriaSeleccionada === "Todas"){
            const divProducto = document.createElement("div");
            divProducto.style.padding = "10px";
            divProducto.style.border = "1px solid black";
            divProducto.style.marginBottom = "10px";

            let txt = "";
            txt += `<strong>Nombre</strong>: ${nodosProductos[i].getElementsByTagName("nombre")[0].textContent} <br>`;
            txt += `<strong>Categoría</strong>: ${nodosProductos[i].getElementsByTagName("categoria")[0].textContent} <br>`;
            txt += `<strong>Precio</strong>: ${nodosProductos[i].getElementsByTagName("precio")[0].textContent} <br>`;

            divProducto.innerHTML = txt;
            divSalida.appendChild(divProducto);
        }

    }
}

// Esto es para que de primeras carge todos ya que esta la opción del select por defecto en todos
filtrarProductos();