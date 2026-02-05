// Las 3 promesas que se ewncargarán de realizar los pasos individuales

function molerCafe() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve("Café molido en 2 segundos")
      }, 2000);
    });
}

function calentarAgua() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve("Agua caliente en 3 segundos")
      }, 3000);
    });
}

function servirCafe() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve("Café servido con canela en 4 segundos")
      }, 4000);
    });
}


// Funcón principal que encadena las tres promesas, hasta que no acabe una no empieza la siguiente
async function prepararCafe() {
    const salida = document.getElementById('salida');

    salida.innerHTML = "Comenzando proceso de preparación <br>";

    const paso1 = await molerCafe();
    salida.innerHTML += paso1 + "<br>";

    const paso2 = await calentarAgua();
    salida.innerHTML += paso2 + "<br>";

    const paso3 = await servirCafe();
    salida.innerHTML += paso3 + "<br>";
}