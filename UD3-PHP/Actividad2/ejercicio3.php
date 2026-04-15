<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3 Actividad 2 - PHP</title>
    </head>
    
<body>
    <h3>3. Muestra un texto por pantalla, después crea un formulario que reciba una palabra, crea una función que cuente cuantas veces aparece la palabra en el texto, el texto es fijo y lo elige el alumno.</h3>
    
    <h4>El lenguaje de programación PHP es un lenguaje muy popular en el desarrollo web. Con PHP, los programadores pueden crear páginas web dinámicas. Aprender PHP es el primer paso para dominar el lado del servidor, ya que PHP se ejecuta en el servidor y envía el resultado al navegador.</h4>

    <form action="ejercicio3.php" method="post">
        <label for="palabra">Palabra a buscar en el texto:</label>
        <input type="text" name="palabra" id="palabra">
        <input type="submit" value="Enviar"> <br><br>
    </form>
    <?php
    /*
        $texto = "El lenguaje de programación PHP es un lenguaje muy popular en el desarrollo web. Con PHP, los programadores pueden crear páginas web dinámicas. Aprender PHP es el primer paso para dominar el lado del servidor, ya que PHP se ejecuta en el servidor y envía el resultado al navegador.";

        // Separar texto y alamacenarlo en un array por espacios
        $textoDividido = explode(" ", $texto);

        if (isset($_POST["palabra"]) == true && $_POST["palabra"] != "") {
            $palabraBuscada = $_POST["palabra"];
            $contador = 0;

            foreach ($textoDividido as $palabra) {
                if (strtolower($palabra) == strtolower($palabraBuscada)) {
                    $contador ++;
                }
            }

            echo "La palabra $palabraBuscada aparece $contador veces en el texto";
        }else{
            echo "Ninguna palabra introducida";
        }
        */

        // Comprobamos si nos han enviado algo
        if (isset($_POST["palabra"])) {
            
            // trim() para borrar espacios accidentales al inicio y al final.
            $palabraBuscada = trim($_POST["palabra"]);

            // Comprobamos si después de limpiar los espacios, realmente escribieron algo
            if ($palabraBuscada != "") {
                
                $textoOriginal = "El lenguaje de programación PHP es un lenguaje muy popular en el desarrollo web. Con PHP, los programadores pueden crear páginas web dinámicas. Aprender PHP es el primer paso para dominar el lado del servidor, ya que PHP se ejecuta en el servidor y envía el resultado al navegador.";

                // Vamos a crear una lista (array) con los signos que queremos eliminar
                $signos = array(".", ",", ";", ":");
                // Los reemplazamos por "" (nada) dentro del texto original (lo que buscas, por qué quieres remplazarlo y dónde lo buscas)
                $textoLimpio = str_replace($signos, "", $textoOriginal);

                // Ahora sí, dividimos el texto limpio en palabras
                $textoDividido = explode(" ", $textoLimpio);
                
                $contador = 0;

                foreach ($textoDividido as $palabra) {
                    if (strtolower($palabra) == strtolower($palabraBuscada)) {
                        $contador++;
                    }
                }

                echo "<p>La palabra <strong>'$palabraBuscada'</strong> aparece <strong>$contador</strong> veces en el texto.</p>";
            } else {
                echo "<p>Por favor, introduce una palabra válida (no solo espacios).</p>";
            }
        }
    ?>
</body>
</html>