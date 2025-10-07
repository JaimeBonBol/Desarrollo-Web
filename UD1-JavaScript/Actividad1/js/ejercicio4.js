function unirSumar(){

    // Crear la tabla
    let tabla = `
        <table id="miTabla">
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td></td>
                <td></td>
            </tr>
        </table>
    `;

    const divTabla = document.getElementById("tabla");

    divTabla.innerHTML = tabla;

    const miTabla = document.getElementById("miTabla");

    const celdas = miTabla.getElementsByTagName("td");


    // Recoger los textos y números de los inputs
    const texto1 = document.getElementById("texto1").value;
    const texto2 = document.getElementById("texto2").value;

    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    const suma = num1 + num2;

    celdas[0].textContent = "Texto 1";
    celdas[1].textContent = texto1;

    celdas[2].textContent = "Texto 2";
    celdas[3].textContent = texto2;

    celdas[4].textContent = "Textos unidos";
    celdas[5].textContent = texto1 + " " + texto2;

    celdas[6].textContent = "Número 1";
    celdas[7].textContent = num1;

    celdas[8].textContent = "Número 2";
    celdas[9].textContent = num2;

    celdas[10].textContent = "Suma números";
    celdas[11].textContent = suma;

}