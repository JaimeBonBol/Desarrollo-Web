<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 6 Actividad 2 - PHP</title>
</head>
<body>
    <h3>6. Genera un vector con 20 números generados aleatoriamente, después muéstralo por pantalla, por ultimo crea una función que reciba un vector por argumentos y esta lo devuelva ordenado de menor a mayor, por ultimo muestra el vector ordenado.</h3>

    <?php
        function generarNum() : int {
            return rand(1,100);
        }

        function mostrarArray($array){
            foreach ($array as $indice => $valor) {
                echo "Posición " . ($indice + 1) . ": $valor <br>";
            }
        }

        $arrayNumeros;

        // Introducir 20 numeros aleatorios desde la función a el array
        for ($i=0; $i < 20; $i++) { 
            $arrayNumeros[] = generarNum();
        }

        // Mostrar por pantalla array
        mostrarArray($arrayNumeros);

        // función para ordenar array
        function ordenarAscendente($array): array{
            $arrayOrdenado = [];

            // Copiar el array en $arrayOrdenado
            foreach ($array as $valor) {
                $arrayOrdenado[] = $valor;
            }

            // Array nuevo ordenado con el metodo sort()
            sort($arrayOrdenado);

            return $arrayOrdenado;
        }

        echo "<br>";
        echo "<br>";
        echo "<strong>Array ordenado: </strong><br>";
        // Mostrar el array ordenado ascendentemente
        mostrarArray(ordenarAscendente($arrayNumeros));
    ?>
</body>
</html>