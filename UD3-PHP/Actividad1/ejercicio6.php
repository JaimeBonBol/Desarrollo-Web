<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 6 - PHP</title>
</head>
<body>
    <h3>6. Crea un módulo que reciba el radio de una circunferencia y te devuelva el área del de la misma.</h3>

    <?php
        function calcularArea($radio): float {
            $area = pi() * pow($radio, 2);
            return $area;
        }

        $radio = 4;
        echo "Radio de la circunsferencia: $radio";
        echo "<br>";
        echo "Área de la circunsferencia: ".calcularArea($radio);
    ?>
</body>
</html>