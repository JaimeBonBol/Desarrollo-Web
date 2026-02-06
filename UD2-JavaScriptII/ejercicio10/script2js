let cadenaOp = "(3+4-1) * 2 + 31 * (8-20) * 2";

function calcular(cadenaOp) {
    // Limpieza inicial, quitar espacios para evitar el error NaN
    cadenaOp = cadenaOp.split(' ').join(''); 
    
    let numeros = [];
    let i = 0;
    let aux = '';
    let esParentesis = false;

    while (i < cadenaOp.length) {
        
        if (cadenaOp[i] === '(') {
            esParentesis = true;
            aux += cadenaOp[i];
        
        } else if (cadenaOp[i] === ')') {
            esParentesis = false;
            aux += ')';
            numeros.push(aux); // Guardamos bloque paréntesis
            aux = '';
        
        } else if (esParentesis === true) {
            aux += cadenaOp[i]; // Acumulamos lo de dentro del paréntesis
        
        } else {
            // Hay que diferenciar claramente entre número y operador
            if (['+', '-', '*', '/'].includes(cadenaOp[i])) {
                // Si teníamos un número acumulado (ej: el "1" de "31"), lo guardamos antes
                if (aux !== '') { 
                    numeros.push(aux);
                    aux = '';
                }
                // Guardamos el operador
                numeros.push(cadenaOp[i]);
            } else {
                // Es un número (dígito), lo acumulamos en aux
                aux += cadenaOp[i];
                
                // Si es el último caracter de toda la cadena, empujamos
                if (i === cadenaOp.length - 1) {
                    numeros.push(aux);
                }
            }
        }
        i++;
    }

    console.log("Array inicial parseado:", numeros);

    // Copia de el array numeros
    let numeroOK = [...numeros]; 

    // Cálculo

    // PASO 1: Resolver paréntesis manual (convertir "(3+4-1)" en "6")
    for (let i = 0; i < numeroOK.length; i++) {
        // Si es un paréntesis (comprobamos si empieza por "(")
        if (numeroOK[i].toString().startsWith('(')) {
            
            // 1. Le quitamos los paréntesis: "3+4-1"
            let contenido = numeroOK[i].slice(1, -1);
            
            // 2. Lo convertimos en array: [3, "+", 4, "-", 1]
            let subArray = desmenuzarString(contenido);
            
            // 3. Calculamos
            let res = operarMatematicamente(subArray);
            
            // 4. Sustituimos en el array principal
            numeroOK[i] = res;
        }
    }
    
    console.log("Array sin paréntesis:", numeroOK);

    // PASO 2: Calcular el total del array principal
    let resultadoFinal = operarMatematicamente(numeroOK);
    
    console.log("Resultado Final:", resultadoFinal);
    return resultadoFinal;
}


// --- FUNCIONES DE APOYO (Para no usar eval ni recursividad) ---

// Función que recibe [3, "+", 5, "*", 2] y devuelve el número
function operarMatematicamente(lista) {
    // Primero hacemos MULTIPLICACIONES y DIVISIONES
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === '*' || lista[i] === '/') {
            let n1 = parseFloat(lista[i-1]);
            let n2 = parseFloat(lista[i+1]);
            let res = 0; // Creamos la variable
            if (lista[i] === '*') {
                res = n1 * n2; // Si es multiplicación
            } else {
                res = n1 / n2; // Si no (entonces es división)
            }
            
            lista.splice(i-1, 3, res); // Borramos 3, metemos 1
            i--; // Retrocedemos indice
        }
    }
    
    // Después hacemos SUMAS y RESTAS
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] === '+' || lista[i] === '-') {
            let n1 = parseFloat(lista[i-1]);
            let n2 = parseFloat(lista[i+1]);
            let res = (lista[i] === '+') ? n1 + n2 : n1 - n2;
            
            lista.splice(i-1, 3, res);
            i--;
        }
    }
    return lista[0]; // Devuelve el único número que queda
}

// Función simple para convertir "3+4-1" en array [3, "+", 4, "-", 1]
// (Es necesaria para resolver lo de dentro de los paréntesis)
function desmenuzarString(texto) {
    let salida = [];
    let aux = "";
    
    for (let char of texto) {
        if (['+', '-', '*', '/'].includes(char)) {
            if (aux !== "") salida.push(aux);
            salida.push(char);
            aux = "";
        } else {
            aux += char;
        }
    }
    if (aux !== "") salida.push(aux);
    return salida;
}

calcular(cadenaOp);