const inputNum1 = document.getElementById('inputNum1');
const inputNum2 = document.getElementById('inputNum2');
const inputOperador = document.getElementById('inputOperador');

const valorNum1 = parseFloat(inputNum1.value);
const valorNum2 = parseFloat(inputNum2.value);

function esNumero(num){
    if(/^\d*$/.test(num)){
        return true;
    }else{
        return false;
    }
}