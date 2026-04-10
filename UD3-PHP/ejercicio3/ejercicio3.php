<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3 - PHP</title>
</head>
<body>
    <h3>Crea una página que imprima desde un módulo PHP una tabla, cuyo contenido sea la tabla de multiplicar de un número, tiene que tener 3 columnas y 10 filas (del 1 al 10).</h3>
    <table>
        <tr>
            <td>A</td>
            <td>b</td>
            <td>c</td>
        </tr>
        <tr>
            <td>d</td>
            <td>e</td>
            <td>f</td>
        </tr>
    </table>
    <?php
        
        echo "<table>".generarTabla()."</table>";

        function generarTabla() {
            $numMultiplicador = 7;
            echo "<tr>";
            for($i=1;$i<=10;$i++){
                echo "<tr></tr>";
                $i++; 
            }
            echo "</tr>";
        }
        
    ?>
</body>
</html>