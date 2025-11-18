const inptNum = document.getElementById('inputNumero');
const salidaResultado = document.getElementById('resultado');

function esNumero(num) {
    return /^\d+$/.test(num); // solo enteros positivos
}

function calcularFactorial() {
    const valorNum = inptNum.value;

    if (!esNumero(valorNum)) {
        salidaResultado.innerHTML = 'Introduce un número entero válido';
        return;
    }

    const n = parseInt(valorNum);

    if (n < 0) {
        salidaResultado.innerHTML = 'No existe factorial de números negativos';
        return;
    }

    let resultado = 1;
    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }

    salidaResultado.innerHTML = `Resultado: ${resultado}`;
}
