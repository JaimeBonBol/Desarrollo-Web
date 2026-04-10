<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1 - PHP</title>
</head>
<body>
    <h3>Descarga dos imágenes de internet, genera un numero aleatorio entre 0 y 1, dependiendo del número que se genere haz que se muestre una imagen u otra.</h3>

    <?php
        $rutaImagenes = "images/";
        

        echo "<img src='".$rutaImagenes."/img".generarNum().".jpg' alt='' style='width: 250px;>'";

        function generarNum() : int {
            return random_int(1,2);
        }

    ?>
</body>
</html>