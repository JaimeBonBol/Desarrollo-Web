const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');

input2.disabled = true;

// Devuelve true si el caracter es número
function esNumero(valor){
    return /^\d$/.test(valor); // solo 1 dígito
}

function comprobarTexto(){
    const valorInput1 = input1.value.trim();
    const valorInput2 = input2.value.trim();
    input2.style.backgroundColor = 'lightblue';
    
    let soloNumeros = "";

    for (const char of valorInput1) {
        if (esNumero(char)) {
            soloNumeros+= char;
        }else{
            input2.value = "";
        }
    }

    input2.value = soloNumeros;
}