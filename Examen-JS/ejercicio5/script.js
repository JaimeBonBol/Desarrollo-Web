const cuadros = document.getElementsByTagName('textarea');

function cambiarRatonEncima(elemento){
    elemento.style.color = "red";
    elemento.style.fontSize = "20px";
    /*for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].style.color = "red";
        cuadros[i].style.fontSize = "20px";
    }*/
}

function salidaRatonEncima(elemento){
    elemento.style.color = "black";
    elemento.style.fontSize = "14px";
    /*for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].style.color = "black";
        cuadros[i].style.fontSize = "14px";
    }*/
}

function clickCuadro(elemento){
    elemento.style.backgroundColor = "yellow";
    /*for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].style.backgroundColor = "yellow";
    }*/
}

function salidaClickCuadro(elemento) {
    elemento.style.backgroundColor = "white";
    /*for (let i = 0; i < cuadros.length; i++) {
        cuadros[i].style.backgroundColor = "white";
    }*/
}