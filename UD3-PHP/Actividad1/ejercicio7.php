<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 7 - PHP</title>
</head>
<body>
    <h3>7. Crea una página que genere 10 divs diferentes, cada div tendrá el fondo de un color generado aleatoriamente.</h3>
    

    <?php
        for ($i=1; $i <= 10; $i++) { 
            echo "
                <div style='background-color: rgb(".generarColor().",".generarColor().",".generarColor().");"." width: 200px; height: 100px'>"
                . "Este es el div $i". 
                "</div>
            ";
            echo "<br>";
        }

        function generarColor(): int {
            return random_int(0, 255);
        }
    ?>
</body>
</html>