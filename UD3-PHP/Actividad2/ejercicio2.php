<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 2 Actividad 2 - PHP</title>
    
</head>
<body>
    <h3>Calculadora de Fibonacci</h3>

    <form method="POST" action="">
        <label for="posicion">¿Hasta qué posición quieres calcular?</label>
        <input type="number" name="posicion" id="posicion" min="1" required>
        <button type="submit">Calcular</button>
    </form>

    
    <?php
    
    // 2. RECIBIR LOS DATOS
    // Comprobamos si el formulario ha sido enviado
    if (isset($_POST['posicion'])) {
        
        $limite = (int)$_POST['posicion'] + 1; // Sumamos 1 vuelta extra para compensar el 0 inicial
        $vectorFibonacci = []; // Creamos nuestro vector (array) vacío

        // 3. LA FUNCIÓN RECURSIVA
        // Fíjate en el símbolo '&' antes de $vector. Luego te explico por qué es vital.
        function calcularFibonacci($limite, &$vector) {
            
            $cantidadActual = count($vector); // ¿Cuántos números llevamos guardados?

            // --- A) EL CASO BASE (La condición de parada) ---
            if ($cantidadActual == $limite) {
                return; // Si ya tenemos los números pedidos, cortamos la ejecución y salimos.
            }

            // --- B) LA LÓGICA (Generar el número) ---
            if ($cantidadActual == 0) {
                $vector[] = 0; // El primer número de Fibonacci siempre es 0
            } elseif ($cantidadActual == 1) {
                $vector[] = 1; // El segundo número siempre es 1
            } else {
                // Para los demás, sumamos los dos últimos que hayamos metido en el vector
                $ultimo = $vector[$cantidadActual - 1];
                $penultimo = $vector[$cantidadActual - 2];
                $vector[] = $ultimo + $penultimo;
            }

            // --- C) LA LLAMADA RECURSIVA ---
            // La función se invoca a sí misma para calcular el siguiente número
            calcularFibonacci($limite, $vector);
        }

        // 4. EJECUTAR Y MOSTRAR RESULTADOS
        // Hacemos la primera llamada para que empiece a trabajar
        calcularFibonacci($limite, $vectorFibonacci);

        // Imprimimos el resultado de forma elegante
        echo "<div class='resultado'>";
        echo "<h4>Secuencia de Fibonacci hasta la posición $limite:</h4>";
        // implode() junta todos los elementos de un array con un texto (en este caso, una coma)
        echo "<p>" . implode(", ", $vectorFibonacci) . "</p>";
        echo "</div>";
    }
/*
    if (isset($_POST['posicion'])) {
        
        $limite = (int)$_POST['posicion']; 
        
        // CAMBIO 1: Ya no necesitamos crear el vector vacío fuera, 
        // lo pasamos directamente como parámetro por defecto en la función.

        // CAMBIO 2: ¡Quitamos el &! 
        function calcularFibonacci($limite, $vector = []) {
            
            $cantidadActual = count($vector);

            // --- A) EL CASO BASE ---
            if ($cantidadActual == $limite) {
                // CAMBIO 3: En lugar de solo decir "return;" (salte de aquí),
                // ahora decimos "devuelve el vector terminado".
                return $vector; 
            }

            // --- B) LA LÓGICA ---
            if ($cantidadActual == 0) {
                $vector[] = 1; // Cambiamos el 0 por un 1
            } elseif ($cantidadActual == 1) {
                $vector[] = 1; // El segundo sigue siendo 1
            } else {
                $ultimo = $vector[$cantidadActual - 1];
                $penultimo = $vector[$cantidadActual - 2];
                $vector[] = $ultimo + $penultimo;
            }

            // --- C) LA LLAMADA RECURSIVA ---
            // CAMBIO 4: La función se llama a sí misma, pero tiene que 
            // capturar y devolver lo que su "clon" le entregue.
            return calcularFibonacci($limite, $vector);
        }

        // CAMBIO 5: Al ejecutarla por primera vez, tenemos que guardar
        // en una variable el resultado que la función nos va a escupir al final.
        $vectorFinal = calcularFibonacci($limite);

        echo "<div class='resultado'>";
        echo "<h4>Secuencia de Fibonacci hasta la posición $limite:</h4>";
        echo "<p>" . implode(", ", $vectorFinal) . "</p>";
        echo "</div>";
    }
    */
    ?>
</body>
</html>