<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3 - PHP</title>
    </head>
    <style>
        table{
            border-collapse: collapse;
        }
        td{
            border: 1px solid black;
            padding: 10px;
        }
    </style>
<body>
    <h3>3. Crea una página que imprima desde un módulo PHP una tabla, cuyo contenido sea la tabla de multiplicar de un número, tiene que tener 3 columnas y 10 filas (del 1 al 10).</h3>
    
    <?php
        function generarTabla($numero) {
            // Variable para ir guardando el código HTML
            $html = ""; 
            
            // Un solo bucle que da 10 vueltas para crear 10 filas
            for ($i = 1; $i <= 10; $i++) {
                $resultado = $numero * $i; // Hacemos el cálculo
                
                $html .= "<tr>"; // Abrimos la fila
                
                // Las 3 columnas
                $html .= "<td>$numero x $i</td>"; // Columna 1: La operación visual
                $html .= "<td>=</td>";            // Columna 2: El signo igual
                $html .= "<td>$resultado</td>";   // Columna 3: El resultado final
                
                $html .= "</tr>"; // Cerramos la fila
            }
            
            // Devolvemos todo el bloque HTML construido
            return $html; 
        }
        
        // Imprimimos la tabla llamando a la función
        echo "<table>";
        echo generarTabla(7);
        echo "</table>";
    ?>
</body>
</html>