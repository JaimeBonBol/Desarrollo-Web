const h2 = document.getElementById('mensaje');

function iniciarProceso() {
    
    // Primer mensaje
    h2.innerHTML = "Inicio de la función";

    // Crear la promesa
    const promesa = new Promise(function(exito, fracaso){

        // El código dentro del constructor de la promesa se ejecuta inmediatamente
        // al crearla.
        h2.innerHTML += "<br>Estoy dentro de la promesa";

        setTimeout(function () {
            // Avisamos al .then de que hemos terminado y le pasamos el nuevo mensaje
            let mensaje = "Salí de la promesa";
            exito(mensaje);
          }, 3000);

    });

    // Esto se queda "en espera" hasta que se ejecute el resolve() de arriba.
    promesa.then(function(valor){
        h2.innerHTML += `<br> ${valor}`;
    });

}

iniciarProceso();