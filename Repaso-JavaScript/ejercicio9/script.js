/*class Compra {
    constructor(numeroCompra, productos, fechaCompra, unidadesProductos) {
        this.numeroCompra = numeroCompra;
        this.productos = productos;
        this.fechaCompra = fechaCompra;
        this.unidadesProductos = unidadesProductos;
    }

    getNumeroCompra(){
        return this.numeroCompra;
    }
    
    getProductos(){
        return this.productos;
    }

    getFechaCompra(){
        return this.fechaCompra;
    }

    getUnidadesProductos(){
        return this.unidadesProductos;
    }

    salidaNumeroCompra(){
        return `Compra número ${this.numeroCompra}`;
    }

    toString(){
        let texto = "Productos: <br>";
        for(let producto of this.productos){
            texto += producto + "<br>";
        }
        texto += `Fecha compra: ${this.getFechaCompra()} <br>`;
        texto += `Unidades de productos: <br> `

        for(let unidades of this.unidadesProductos){
            texto += unidades + "<br>";
        }

        return texto;
    }
}

let compra1 = new Compra("C1", ["Leche", "Huevos", "Pasta"], "20-11-2025", [2, 4, 1]);
let compra2 = new Compra("C2", ["Pan", "Ajo", "Levadura"], "28-11-2025", [7, 8, 3]);
let compra3 = new Compra("C3", ["Maiz", "Agua", "Vino"], "02-12-2025", [9, 1, 1]);
*/

class Compra {
    constructor(numeroCompra, productos, fechaCompra) {
        this.numeroCompra = numeroCompra;
        this.productos = productos; // OBJETO literal
        this.fechaCompra = fechaCompra;
    }

    getNumeroCompra() {
        return this.numeroCompra;
    }

    getProductos() {
        return this.productos;
    }

    getFechaCompra() {
        return this.fechaCompra;
    }

    toString() {
        let texto = `<strong>Productos:</strong><br>`;

        // Aquí usamos FOR…IN como querías
        for (let producto in this.productos) {
            texto += `${producto}: ${this.productos[producto]} unidades<br>`;
        }

        texto += `Fecha de compra: ${this.fechaCompra}<br>`;
        return texto;
    }
}

let compra1 = new Compra(
    "C1",
    { Leche: 2, Huevos: 4, Pasta: 1 },
    "20-11-2025"
);

let compra2 = new Compra(
    "C2",
    { Pan: 7, Ajo: 8, Levadura: 3 },
    "28-11-2025"
);

let compra3 = new Compra(
    "C3",
    { Maiz: 9, Agua: 1, Vino: 1 },
    "02-12-2025"
);

let arrayCompras = [compra1, compra2, compra3];

function actualizarArray() {
    const salidaArray = document.getElementById('salidaArray');
    let texto = "";

    for(compra of arrayCompras){
        texto += compra.getNumeroCompra() + "<br>  ";
    }

    salidaArray.innerHTML = texto;
}

function mostrarCompra(numeroCompra) {
    let encontrado = false;

    for(let compra of arrayCompras) {
      if (numeroCompra === compra.getNumeroCompra()) {
        encontrado = true;
        return compra.toString();
      }
    }

    if(encontrado == false){
        return 'La compra no se encuentra en el array';
    }
}

function mostrarCompraSeleccionada(){
    const inputUsuario = document.getElementById('inputUsuario');
    const valorInputUsu = inputUsuario.value.trim();

    let texto = mostrarCompra(valorInputUsu);

    document.getElementById('salidaCompra').innerHTML = texto;
}

actualizarArray();