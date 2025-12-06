const inputs = document.getElementsByTagName('input');
const salidaError = document.getElementById('salidaError');

function comprobarCampos() {
    salidaError.innerHTML = '';


    let textoError = '';
    let errorNombre = false;
    let errorNum = false;
    let errorDirec = false;
    
    for (let i = 0; i < inputs.length; i++) {
        //const element = inputs[i];
        
        if (esLetra(inputs[0].value) == false) {
            errorNombre = true;
        }else if(esNumero(inputs[1].value) == false){
            errorNum = true;
        }else if(esAlfaNum(inputs[2].value) == false){
            return errorDirec = true;
        }
    }

    if (errorNombre) {
        textoError += `Error en el nombre, no puede ser número <br>`;
    }else if(errorNum){
        textoError += `Error en el número de teléfono, no puede ser letras <br>`;
    }else if(errorDirec){
        textoError += `Error en la direccion, no puede contener caracteres especiales <br>`;
    }

    salidaError.innerHTML = textoError;
}


function esNumero(valor){
    if(/^\d+$/.test(valor)){
        return true;
    }else{ 
        return false;
    }
}

function esLetra(valor) {
    if ((/^[a-zA-Z]+$/.test(valor))){
        return true;
    } else {
        return false;
    }
}

function esAlfaNum(valor) {
    if ((/^[a-zA-Z0-9]+$/.test(valor))){
        return true;
    } else {
        return false;
    }
}