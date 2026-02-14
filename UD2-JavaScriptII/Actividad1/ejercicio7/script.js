// La promesa, esta función solo se encarga de esperar y devolver el texto.
function saludar(nombre) {
    return new Promise((resolve) => {
      setTimeout(function(){
        // Avisa al porgrama principal
        resolve(`Hola ${nombre}`);
      }, 2000)
    });
}

// Función asíncrona qeue controla la promesa
async function iniciarSaludo() {
    
    const input = document.getElementById('inputNombre');
    const salida = document.getElementById('mensaje');
    const nombreUsuario = input.value;

    // COmprobar que el nombre ha sido introducido
    if (!nombreUsuario) {
        salida.textContent = "Escribe un nombre";
        return;
    }

    // Mostrar un mensaje mientras spera el saludo
    salida.textContent = "Generando saludo... (espera 2s)";
    salida.style.color = "grey";

    // Esperar a que se cumpla la promesa, en cuanto se ejecuta el resolve de la funcion saludar, lo recibe el await.
    const saludo = await saludar(nombreUsuario);

    salida.textContent = saludo;
    salida.style.color = "green";
}
