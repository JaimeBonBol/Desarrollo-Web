const imagen = document.getElementById('imagen');
const texto = document.getElementById('texto');

const textos = ["Imagen 1", "Imagen 2", "Imagen 3", "Imagen 4", "Imagen 5", "Imagen 6", "Imagen 7", "Imagen 8", "Imagen 9", "Imagen 10",];
const imagenes = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10",];

function generarNum() {
    return Math.floor(Math.random() * 10);
}

let semaforo = setInterval(cambiarImagen, 5000);

function cambiarImagen(){
    posArray = generarNum();

    imagen.src = "./imagenes/"+imagenes[posArray]+".png";
    texto.innerHTML = textos[posArray];
}