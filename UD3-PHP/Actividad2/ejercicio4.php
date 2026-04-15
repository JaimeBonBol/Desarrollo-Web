<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 4 Actividad 2 - PHP</title>
</head>
<body>
    <h3>4. Crea un programa que imprima por pantalla los números primos comprendidos entre el 1 y el 100 (el número 1 no cuenta) en una tabla. Debes generar un vector denominado primos que los almacene. Los números primos han de obtenerse mediante algorítmica.</h3>

    <?php
        // 1. Declaramos el vector vacío donde guardaremos los resultados
        $primos = [];

        // Bucle principal: recorremos los números del 2 al 100 (el 1 no cuenta)
        for ($i = 2; $i <= 100; $i++) {
            
            $esPrimo = true; // Al principio, asumimos que el número ES primo

            // Bucle secundario: intentamos dividir $i entre todos los números anteriores a él
            for ($j = 2; $j < $i; $j++) {
                
                // Si el resto de la división (%) es 0, significa que es divisible
                if ($i % $j == 0) {
                    $esPrimo = false; // Descubrimos que NO es primo
                    break; // Cortamos este bucle interno, ya no hace falta seguir buscando
                }
            }

            // Si después de intentar dividirlo, la variable sigue siendo true
            if ($esPrimo == true) {
                $primos[] = $i; // Lo metemos en nuestro vector
            }
        }

        // IMPRIMIR LA TABLA 
        echo "<table>";
        echo "<tr><th>Posición</th><th>Número Primo</th></tr>";

        // Usamos foreach para recorrer el vector que acabamos de rellenar
        foreach ($primos as $indice => $numero) {
            $posicion = $indice + 1;
            
            echo "<tr>";
            echo "<td>$posicion</td>";
            echo "<td><strong>$numero</strong></td>";
            echo "</tr>";
        }
        
        echo "</table>";
    ?>
</body>
</html>