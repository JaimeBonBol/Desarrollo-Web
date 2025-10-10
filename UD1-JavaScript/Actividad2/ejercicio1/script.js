function comprobarTexto() {

    //const numeros = ["0","1","2","3","4","5","6","7","8","9"];

    // Elemento
    const input = document.getElementById("txt");

    // Valor del input
    const valor = input.value;

    /*for (let i = 0; i < valor.length; i++) {
        if (!numeros.includes(valor[i])) {
            input.value = "";
            return;
        }
    }**/
   
    // Con exresión regular.
    if(!/^\d*$/.test(valor)){
        input.value  = "";
    }

}