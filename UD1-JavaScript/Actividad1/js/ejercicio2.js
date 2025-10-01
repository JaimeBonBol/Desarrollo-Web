function dibujarTabla() {
    let tabla= `
    <table>
        <tr>
            <td>Hola</td>
        </tr>
        <tr>
            <td>Hello</td>
        </tr>
    </table>  
    `;

    // Obtengo del HTML el elemento con el div "tabla"
    const divTabla = document.getElementById("tabla");

    // Inserto la tabla en el elemento
    divTabla.innerHTML = tabla

    // Añado estilo.
    divTabla.style.color = "blue";

}