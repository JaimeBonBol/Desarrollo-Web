const inputNum1 = document.getElementById('inputNum1');
const inputNum2 = document.getElementById('inputNum2');
const inputOperador = document.getElementById('inputOperador');
const salidaResultado = document.getElementById('resultado');
const salidaResto = document.getElementById('resto');


function esNumero(num){
    if(/^\d*$/.test(num)){
        return true;
    }else{
        return false;
    }
}

function operadorPermitido(valor){
    if(valor === "+" || valor === "-" || valor === "*" || valor === "/"){
        return true;
    }else{
        return false;
    }
}

function calcular(){

    const valorNum1 = parseFloat(inputNum1.value);
    const valorNum2 = parseFloat(inputNum2.value);
    const valorOperador = inputOperador.value;

    let resultado;
    let resto;

    if(operadorPermitido(valorOperador) && esNumero(valorNum1) && esNumero(valorNum2)){
        switch (valorOperador) {
            case "+":
                resultado = valorNum1 + valorNum2;
                break;

            case "-":
                resultado = valorNum1 - valorNum2;
                break;

            case "*":
                resultado = valorNum1 * valorNum2;
                break;

            case "/":
                resultado = valorNum1 / valorNum2;
                resto = valorNum1 % valorNum2;
                break;

            default:
                break;
        }

        salidaResultado.innerHTML = resultado;
        salidaResto.innerHTML = resto;

    } else {
        salidaResultado.innerHTML = 'Operación no permitida';
        salidaResto.innerHTML = '';
    }


}