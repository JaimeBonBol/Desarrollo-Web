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
        $diaSeleccionado = "Viernes"; 

        // Evaluamos el día con el switch
        switch ($diaSeleccionado) {
            case "Lunes":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "08:30 - 09:30: SGE <br>";
                echo "09:30 - 10:30: AaD <br>";
                echo "10:30 - 11:30: OPT <br>";
                echo "12:00 - 13:00: DIN <br>";
                echo "13:00 - 14:00: PMD <br>";
                echo "14:00 - 15:00: PMD <br>";
                break;
            case "Martes":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "08:30 - 09:30: SGE <br>";
                echo "09:30 - 10:30: SGE <br>";
                echo "10:30 - 11:30: PSP <br>";
                echo "12:00 - 13:00: PSP <br>";
                echo "13:00 - 14:00: DIN <br>";
                echo "14:00 - 15:00: DIN <br>";
                break;
            case "Miércoles":
            case "Miérc.":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "08:30 - 09:30: DIN <br>";
                echo "09:30 - 10:30: DIN <br>";
                echo "10:30 - 11:30: OPT <br>";
                echo "12:00 - 13:00: OPT <br>";
                echo "13:00 - 14:00: AaD <br>";
                echo "14:00 - 15:00: AaD <br>";
                break;
            case "Jueves":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "08:30 - 09:30: PMD <br>";
                echo "09:30 - 10:30: ING <br>";
                echo "10:30 - 11:30: DIN <br>";
                echo "12:00 - 13:00: PSP <br>";
                echo "13:00 - 14:00: IPE <br>";
                echo "14:00 - 15:00: IPE <br>";
                break;
            case "Viernes":
                echo "<h4>Horario del $diaSeleccionado:</h4>";
                echo "08:30 - 09:30: SGE <br>";
                echo "09:30 - 10:30: PRO <br>";
                echo "10:30 - 11:30: PRO <br>";
                echo "12:00 - 13:00: IPE <br>";
                echo "13:00 - 14:00: ING <br>";
                echo "14:00 - 15:00: AaD <br>";
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
                // Imprime todos los días de la semana
                echo " Opción no válida";
                break;
        }
    ?>
</body>
</html>