<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 5 - PHP</title>
</head>
<body>
    <h3>5. Crea un módulo PHP que reciba una cadena con espacios y te devuelva la cadena sin espacios.</h3>

    <?php
        /*
            Con el método str_replace:
            // La función str_replace necesita 3 cosas:
            // 1. Qué buscar: " " (un espacio en blanco)
            // 2. Por qué reemplazarlo: "" (nada, texto vacío sin espacio)
            // 3. Dónde buscarlo: en nuestra variable $cadena
        */
        // 1. Creamos la función que recibe la cadena como parámetro
        function quitarEspacios($cadena) {
            $cadenaLimpia = str_replace(" ", "", $cadena);
            
            // Devolvemos el resultado
            return $cadenaLimpia;
        }

        function quitarEspaciosManual($cadena) : String {
            $cadenaDevuelta = "";

            // Por cada carácter en la cadena compruebo si es un espacio y si es así, no lo apendo en la cadena que devuelvo
            for ($i=0; $i < strlen($cadena); $i++) { 
                if ($cadena[$i] != " ") {
                    $cadenaDevuelta .= $cadena[$i];
                }
            }

            return $cadenaDevuelta;
        }

        // 2. Definimos una frase con muchos espacios para probar
        $textoOriginal = "H o l a   M u n d o ,   e s t o   e s  u naaa p ru eba  P H P !";

        // 3. Llamamos a la función y guardamos el resultado
        $textoProcesado = quitarEspaciosManual($textoOriginal);

        // 4. Imprimimos los resultados para comparar
        echo "<p><strong>Texto original:</strong> '$textoOriginal'</p>";
        echo "<p><strong>Texto sin espacios:</strong> '$textoProcesado'</p>";
    ?>
</body>
</html>