function enfoque(id){
    let input = document.getElementById(id);

    input.style.backgroundColor = "gray";
    input.style.color = "lightblue";
}

function desenfoque(id) {
    let input = document.getElementById(id);

    input.style.backgroundColor = "white";
    input.style.color = "black";
}

const inputs = document.getElementsByTagName("input");
//const inputsArray = Array.from(document.getElementsByTagName("input"));

const botonEliminar = document.getElementById("botonEliminarTextos");

function eliminarTextos() {

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }

}