function unirSumar() {
    
    // Recoger los textos y números de los inputs.
    const texto1 = document.getElementById("texto1").value;
    const texto2 = document.getElementById("texto2").value;

    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    const suma = num1 + num2;

    // Mostrar ambos textos en un alert
    alert("Has escrito: " + texto1 + " " + texto2 + 
        "\nY la suma de los dos números es: " + suma
    );
}