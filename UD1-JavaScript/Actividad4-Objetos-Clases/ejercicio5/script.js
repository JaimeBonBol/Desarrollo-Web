// Objeto constructor
function objeto(){
    let precio;
    let descuento;

    // Funciones públicas
    this.getPrecio = function(){
        return precio;
    }

    this.getDescuento = function(){
        return descuento;
    }

    this.setPrecio = function(precioNuevo) {
        precio =  precioNuevo;
    }

    this.setDescuento = function(desc){
        descuento = desc;
    }

    this.calcularPrecioNeto = function(){
        let neto = precio * (1 - descuento / 100);

        return neto;
    }
}

let objeto1 = new objeto();

function asignarParametros(){
    const precio = parseFloat(document.getElementById("inputPrecio").value);
    const descuento = parseFloat(document.getElementById("inputDescuento").value);

    objeto1.setPrecio(precio);
    objeto1.setDescuento(descuento);
}


function calcularDescuento(){
    const salidaPrecioNeto = document.getElementById("salidaNeto");
    
    // Llamar a la función para que se asignen loos datos recogidos
    asignarParametros();

    //Calcular el precio neto desde la función privada del objeto
    let precioNeto = objeto1.calcularPrecioNeto();

    salidaPrecioNeto.innerHTML = `El precio neto del objeto es de ${precioNeto}`;
}