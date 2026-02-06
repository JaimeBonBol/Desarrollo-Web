let cadenaOp = "(3+4-1) * 2+ 31 * (8-20) * 2";

function calcular(cadenaOp) {
    //const cadenaOperacion = document.getElementById('inputCadena');

    let numeros = [];
    let i=0;
    let aux='';
    let esParentesis = false;

    while (i< cadenaOp.length){
        if (cadenaOp[i] === '(') {
            esParentesis = true;
        }else if(cadenaOp[i] === ')'){
            esParentesis = false;
            aux += ')';
        }else if (cadenaOp[i] !== isNaN && esParentesis === false){
            aux += cadenaOp[i];
        }

        if (esParentesis){
            aux += cadenaOp[i];
        }else{
            numeros.push(aux);
            aux='';
        }


        i++;
    }

    for (const i of numeros) {
        console.log(i)
    }

    let numeroOK = []

    for (let i of numeros){
        if(i !== ' '){
            numeroOK.push(i);
        }
    }

    for (let i =0 ; i < numeroOK.length ; i++) {
        if ( /[0-9]/.test(numeroOK[i]) === true && /[0-9]/.test(numeroOK[i+1]) === true) {
            numeroOK[i]=numeroOK[i]+numeroOK[i+1];
            numeroOK.splice(i + 1, 1);
        }

        let solucionPosicion = resolverOperacion(numeroOK[i]);
        console.log(numeroOK[i])
    }


    
}

function resolverOperacion(cadena) {
    if (cadena.includes('(')) {
        let tamanio = cadena.length;
        cadena.slice(1, (tamanio - 1));
    }
    console.log(cadena)
}

calcular(cadenaOp);