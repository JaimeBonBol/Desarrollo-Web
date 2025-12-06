const inputCant = document.getElementById('cantidadCambiar');
const selectorMoneda = document.getElementById('selectorMoneda');
const selectorCambio = document.getElementById('selectorCambio');
//const salida = document.getElementById('salidaCambiada');

function cambiar(){
    const valorCantidad = parseFloat(inputCant.value);
    const valorSelectMoneda = selectorMoneda.value.trim();
    const valorSelectCambio = selectorCambio.value.trim();

    let salidaFinal = realizarCambio(valorCantidad, valorSelectMoneda, valorSelectCambio);

    const salida = document.getElementById('salidaCambiada');

    salida.innerHTML= salidaFinal;
}

function realizarCambio(cantidad, monedaEntrada, monedaCambio){
    /*const valorCantidad = parseFloat(inputCant.value);
    const valorSelectMoneda = selectorMoneda.value.trim();
    const valorSelectCambio = selectorCambio.value.trim();*/

    if(monedaEntrada === 'EUR' && monedaCambio === 'USD'){
        return cantidad * 1,13;
    }else if(monedaEntrada === 'EUR' && monedaCambio === 'LIB'){
        return cantidad * 0.88;
    }else if(monedaEntrada === 'LIB' && monedaCambio === 'USD'){
        return cantidad * 1.31;
    }else if(monedaEntrada === 'LIB' && monedaCambio === 'EUR'){
        return cantidad / 0.88;
    }else if(monedaEntrada === 'USD' && monedaCambio === 'EUR'){
        return cantidad / 1.13;
    }else if(monedaEntrada === 'USD' && monedaCambio === 'LIB'){
        return cantidad / 1.31;
    }
}