async function filtrarCategoria(){
    const selectCategorias = document.getElementById("categorias");
    const salida = document.getElementById("salida");

    const categoriaElegida = selectCategorias.value;

    // Cargar fichero con fetch y parsear a objetos javascript
    const response = await fetch("productos.xml");
    const texto = await response.text();

    const datos = new DOMParser().parseFromString(texto, "text/xml");

    // Obtener los productos
    const productos = datos.getElementsByTagName("producto");

    salida.innerHTML = "";

    for (let i = 0; i < productos.length; i++) {
        let categoria = productos[i].getElementsByTagName("categoria")[0].textContent;

        if(categoria === categoriaElegida){
            const divProducto = document.createElement("div");
            divProducto.style.border = "1px solid black";
            divProducto.style.padding = "20px";
            divProducto.style.maxWidth = "200px";

            let txt = "";
            txt += "<strong>Nombre</strong>: " + productos[i].getElementsByTagName("nombre")[0].textContent + "<br>";
            txt += "<strong>Categoría</strong>: " + categoria + "<br>";
            txt += "<strong>Precio</strong>: " + productos[i].getElementsByTagName("precio")[0].textContent + " Euros <br>";

            divProducto.innerHTML = txt;

            salida.appendChild(divProducto);
        }
    }

}