<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3 Simulacro PHP</title>
</head>
<body>
    <?php
        function factorial($num) {
            if($num ==  1){
                echo "Caso base <br>";
                return 1;
            }else {
                echo "Número $num <br>";
                return $num * factorial($num - 1);
            }
        }

        /*function factorial($num) {
            $acumulado = 0;
            if($num ==  1){
                echo "Caso base <br>";
                return 1;
            }else {
                $acumulado = $num * factorial($num - 1);
                echo "Número $num y el acumulado $acumulado<br>";
                return $acumulado;
            }
        }*/

        echo "El factorial de 5 es " . factorial(5);
    ?>
</body>
</html>