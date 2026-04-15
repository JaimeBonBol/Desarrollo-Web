<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1 Actividad 2 - PHP</title>
</head>
<body>
    <h3>1. Crea un formulario que lea una cadena de caracteres, después crea una función para comprobar si la cadena es un palíndromo (se lee igual en ambos sentidos, por ejemplo, Ana o Acaso hubo búhos aca) o no.</h3>

    <form action="ejercicio1.php" method="post">
        <label for="cadena">Introduce una cadena:</label>
        <input type="text" name="cadena">
        <input type="submit" value="Enviar"> <br>
    </form>
    <?php
        if (isset($_POST["cadena"]) == true && $_POST["cadena"] != "") {
            $cadena = $_POST["cadena"];
            if (esPalindromo($cadena)) {
                echo "La cadena $cadena es un palíndromo <br>";
            }else {
                echo "La cadena $cadena NO es un palíndromo <br>";
            }

        }else {
            echo "No se ha introducido cadena <br>";
        }

        function esPalindromo($cadena) : bool {
            $cadenaSinEspacio = quitarEspacios($cadena);
            $cadenaReves = strrev($cadenaSinEspacio);

            if (strtoupper($cadenaSinEspacio) == strtoupper($cadenaReves)) {
                return true;
            }
            return false;
        }

        function quitarEspacios($cadena): string {
            $cadenaSinEspacios = "";

            for ($i=0; $i < strlen($cadena); $i++) {
                if ($cadena[$i] != " ") {
                    $cadenaSinEspacios .= $cadena[$i];
                } 
            }

            return $cadenaSinEspacios;
        }

    ?>
</body>
</html>