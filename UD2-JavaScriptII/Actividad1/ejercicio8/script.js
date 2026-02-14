// Clase producto
class Producto {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }

    getValor(){
        return this.valor;
    }
}

// Creación de productos
let producto1 = new Producto("Ordenador", 700);
let producto2 = new Producto("Monitor", 150);
let producto3 = new Producto("Teclado", 27);
let producto4 = new Producto("Ratón", 18);

// Array de procutos
let productos = [producto1, producto2, producto3, producto4];

// Mostrar los produtcos del array en el html
const listaProductos = document.getElementById('listaProductos');
for (const p of productos) {
    listaProductos.innerHTML += `<br> ${p.nombre} `
}


// La promesa, esta función solo se encarga de buscar el producto en el array
function buscarEnArray(nombre) {
    return new Promise((resolve, reject) => {
      if (nombre === "") {
        reject("No se ha introducido nombre");
      }else {
        for (const producto of productos) {
            if (producto.nombre.toLowerCase() === nombre.toLowerCase()) {
                resolve(`El producto ${producto.nombre} tiene un valor de ${producto.valor}`);
            }
        }
        reject("El prodcuto que buscas no está en la lista");
      }
    });
}


async function iniciarBusqueda() {
    
    const inputProd = document.getElementById('inputProd');
    const salida = document.getElementById('salida');
    const nombreProducto = inputProd.value.trim();

    try {
        // El código se para aqui esperando el resoolve de la promesa
        const mensaje = await buscarEnArray(nombreProducto);
        
        salida.textContent = mensaje;
        salida.style.color = "black";

    } catch (error) {
        // Si recibe reject salta al catch directamente
        salida.textContent = error;
        salida.style.color = "red";
    }

}