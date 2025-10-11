// Función que genera un color aleatorio.
function generarColor() {
    let numRandom1 = Math.random() * (255 - 0) + 0;
    let numRandom2 = Math.random() * (255 - 0) + 0;
    let numRandom3 = Math.random() * (255 - 0) + 0;
    return `rgb(${numRandom1}, ${numRandom2}, ${numRandom3})`;
}

function crearDivs(){

    const divsContenedor = document.getElementById('divs');
    
    for (let i = 1; i <= 255; i++) {

        let nuevoDiv = document.createElement('div');

        let nuevoTexto = document.createElement('p');

        nuevoTexto.textContent = "Este es el div " + i;

        nuevoDiv.appendChild(nuevoTexto);

        nuevoDiv.style.backgroundColor = generarColor();
        nuevoDiv.style.padding = "20px"
        nuevoDiv.style.marginBottom = "20px";

        divsContenedor.appendChild(nuevoDiv);
    }
}