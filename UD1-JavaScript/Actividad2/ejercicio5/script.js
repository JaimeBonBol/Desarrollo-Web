const divsContenedor = document.getElementsByClassName('divs');

function crearDivs(){
    
    for (let i = 0; i < 255; i++) {

        let nuevoDiv = document.createElement('div');

        let nuevoTexto = document.createElement('p');

        nuevoTexto.value = "Este es el div " + id;

        nuevoDiv.appendChild(nuevoTexto);

        nuevoDiv.style.backgroundColor = "red";

        divsContenedor.appendChild(nuevoDiv);
    }
}