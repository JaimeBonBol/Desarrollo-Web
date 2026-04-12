<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 - PHP</title>
</head>
<body>
    <style>
        body{
            background-color: rgb(223,102,74);
        }
    </style>
    <h3>Crea una página que tenga un fondo de pantalla aleatorio, genera tres números aleatorios (rojo, azul y verde), después establece el color del fondo de pantalla con los valores elegidos.</h3>
    <?php
        echo "
        <style>
        body{
            background-color: rgb(".generarColor().",".generarColor().",".generarColor().");
        }
        </style>";

        function generarColor(): int {
            return random_int(0, 255);
        }
    ?>
</body>
</html>