<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 4 - PHP</title>
</head>
<body>
    <h3>4. Crea un módulo PHP, que, dependiendo del día de la semana, imprima tu calendario, (la opción default imprimirá todos los días de la semana).</h3>

    <?php
        // Definimos una variable con el día. 
        $diaSeleccionado = "Lunes"; 

        // Evaluamos el día con el switch
        switch ($diaSeleccionado) {
            case "Lunes":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "10:00 - PHP <br> 12:00 - Bases de Datos";
                break;
            case "Martes":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "09:00 - Diseño Web <br> 11:00 - Redes";
                break;
            case "Miércoles":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "10:00 - PHP <br> 13:00 - Inglés";
                break;
            case "Jueves":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo"09:00 - Diseño Web <br> 12:00 - Proyecto";
                break;
            case "Viernes":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "10:00 - Tutorías <br> Libre el resto del día";
                break;
            case "Sábado":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "Descanso";
                break;
            case "Domingo":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "Descanso";
                break;

            default:
                // Si la variable está vacía, o es una palabra que no coincide
                echo "Opción no disponible";
                break;
        }
    ?>
</body>
</html>