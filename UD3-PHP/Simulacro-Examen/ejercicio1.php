<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1 simulacro</title>
</head>
<body>
    <form action="ejercicio1.php" method="post">
        <label for="nombre">Nombre y apellidos:</label>
        <input type="text" name="nombre" id="nombre"><br><br>

        <label for="telefono">Teléfono:</label>
        <input type="text" name="telefono" id="telefono"><br><br>

        <label for="numDNI">Introduce el DNI:</label>
        <input type="text" name="numDNI" id="numDNI"><br><br>
        
        <input type="submit" value="Enviar">
    </form>
    <br>

    <?php
        $letras = array("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E");

        if (isset($_POST["numDNI"]) && isset($_POST["nombre"]) && isset($_POST["telefono"])) {
            $nombre = $_POST["nombre"];
            $telefono = $_POST["telefono"];
            
            // Validar nombre
            $nombreValido = true;
            for ($i = 0; $i < strlen($nombre); $i++) {
                if (is_numeric($nombre[$i])) {
                    $nombreValido = false;
                }
            }

            if ($nombreValido) {
                echo "Nombre correcto <br>";
            } else {
                echo "Nombre incorrecto: no puede contener números <br>";
            }

            // Validar teléfono
            $telefonoValido = false;
            
            // Comprobamos si tiene 9 caracteres y son números, o si tiene 13 y empieza por + y espacio en la posición 3
            if (strlen($telefono) == 9 && is_numeric($telefono)) {
                $telefonoValido = true;
            } else if (strlen($telefono) == 13 && $telefono[0] == '+' && $telefono[3] == ' ') {
                $telefonoValido = true;
            }

            if ($telefonoValido) {
                echo "Teléfono correcto <br>";
            } else {
                echo "Teléfono incorrecto <br>";
            }

            // Validar DNI
            $dni = $_POST["numDNI"];
            
            $letraDNI = $dni[-1];
            $numerosDNI = str_replace($letraDNI,"",$dni);

            $moduloDNI = ((int)$numerosDNI) % 23;

            echo "La letra del dni es $letraDNI y el número es $numerosDNI y el módulo es $moduloDNI, la letra es " . $letras[$moduloDNI];
            echo "<br>";

            if($letraDNI == $letras[$moduloDNI] ){
                echo "La letra es correcta: $letraDNI -> " . $letras[$moduloDNI];
            }else {
                echo "Letra incorrecta";
            }
        }
    ?>
</body>
</html>