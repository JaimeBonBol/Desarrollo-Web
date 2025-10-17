const inputs = document.getElementsByTagName('input');
const mensajes = document.getElementsByClassName('mensajeError');

// Función que comprueba si es número o texto.
function comprobarNum(valor) {

    if(/^\d*$/.test(valor)){
        return true;
    }else{
        return false;
    }
}

// Función que compueba si está vacío.
function vacio(valor) {

    if(valor === ""){
        return true;
    }else{
        return false;
    }

}

function comprobarTextosInputs() {
    for (let i = 0; i < inputs.length; i++) {

        // Se obtiene el valor de cada input
        const valorInput = inputs[i].value.trim();

        // Se comprueba si es numero o está vacío para poner en rojo
        if (vacio(valorInput) || comprobarNum(valorInput)){
            inputs[i].style.backgroundColor ="red";
            mensajes[i].style.display = "block";

            /* Se puede ir creando pero no se quitarlo
            const p = document.createElement('p');
            p.style.color="red";
            p.textContent = "El campo es requerido o es un número";
            divsIn[i].appendChild(p);*/
        }else {
            inputs[i].style.backgroundColor = "white";
            mensajes[i].style.display = "none";
        }

    }
}