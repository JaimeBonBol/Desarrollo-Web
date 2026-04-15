<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 5 Actividad 2 - PHP</title>
</head>
<body>
    <h3>5. Crea un array con diferentes elementos, después crea un formulario que introduzca el nombre de uno de los elementos y este se elimine del vector.</h3>
    
    <?php
        $array[0] = "Hola";
        $array[1] = "que";
        $array[2] = "tal";
        $array[3] = "estas";
        $array[4] = "bien";

        function mostrarArray($array){
            foreach ($array as $indice => $palabra) {
                echo "$palabra ";
            }
        }

        echo "Array: <br>";
        mostrarArray($array);
    ?>

    <form action="ejercicio5.php" method="post">
        <label for="palabraEliminar">Palabra a a eliminar</label>
        <input type="text" name="palabraEliminar" id="palabraEliminar">
        <input type="submit" value="Enviar"> <br><br>
    </form>

    <?php
        
        // Comprobar si el formulario ha enviado algo
        if (isset($_POST["palabraEliminar"])) {
            
            // trim() para borrar espacios accidentales al inicio y al final.
            $palabraBuscada = trim($_POST["palabraEliminar"]);
            $econtrada = false;

            // Comprobamos si después de limpiar los espacios, realmente escribieron algo
            if ($palabraBuscada != "") {
                for ($i=0; $i < count($array); $i++) { 
                    if ($palabraBuscada == trim($array[$i])) {
                        $encontrada = true;
                        array_splice($array, $i, 1);
                    }
                }

                if($encontrada == true){
                    echo "Array nuevo: <br>"    ;
                    mostrarArray($array);
                }else{
                    echo "La palabra $palabraBuscada no se ecnuentra en el array";
                }
                
            } else {
                echo "<p>Por favor, introduce una palabra válida (no solo espacios).</p>";
            }
        }
    ?>
</body>
</html>