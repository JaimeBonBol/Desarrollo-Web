<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "Hola clase <br>";

        $ejemploVariable = "Cadena dentro de una variable";

        echo "La variable es: " . $ejemploVariable . "<br>";
        /*echo "La variable es: $ejemploVariable <br>";

        $ejemploVariable = 20;

        echo "La variable es: $ejemploVariable <br>";*/

        echo strlen($ejemploVariable) . "<br>";
        echo str_replace("variable", "cambiado", $ejemploVariable);

        echo "<br>";

        $var1 = 5;
        $var2 = 5;

        echo $var1 + $var2;
        echo "<br>";

        $valor = 8; //posicion 800 por ejemplo
        $referencia = &$valor; // contiene la posición de la memoria de la variable valor

        echo "contenido de la variable valor: " . $referencia;
        echo "<br>";

        $referencia = 15;

        echo "<br>";
        echo "Contenido de la variable valor: " .$valor. " contenido de la variable referencia: ".$referencia;
        
        //$$variableDeVariable

        /* Macrovariable
        Realmente la variable se llama "edad" pero así escondemos/ocultamos su declaración, y lugeo con $$ le asignamos un valor a la variable 
        oculta "edad" que luego podemos usar en el resto de nuestro programa.
        */
        $var3 = "edad";
        $$var3 = 20;

        echo "<br>";
        echo "Estoy usando una macrovariable ", $edad;

    ?>
</body>
</html>