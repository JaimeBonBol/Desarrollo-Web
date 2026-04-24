<?php 
// session_start() tiene que ir lo primero para que el número no cambie al recargar
session_start(); 
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2 simulacro</title>
</head>
<body>
    <form action="ejercicio2.php" method="post">
        <label for="num">Inserte número entre 00000 y 99999</label>
        <input type="text" name="num" id="num">
        <input type="submit" value="Enviar">
    </form>
    <br>
    <?php 
    function generarNum() : int {
        return rand(0,9);
    }
        
    // Generamos el array SOLO si no existe ya en la sesión
    if (!isset($_SESSION["numerosRandom"])) {
        $_SESSION["numerosRandom"] = array(generarNum(), generarNum(), generarNum(), generarNum(), generarNum());
        $_SESSION["intentos"] = 7;
    }

    $numerosRandom = $_SESSION["numerosRandom"];

    if(isset($_POST["num"])){
        $numUsusario = $_POST["num"];
        $posicionesAcertadas = "";

        if(strlen($numUsusario) == 5){
            
            $_SESSION["intentos"]--; // Restamos un intento

            for ($i=0; $i < strlen($numUsusario); $i++) { 
                if ($numUsusario[$i] == $numerosRandom[$i]) {
                    // Sumamos 1 para que cuente del 1 al 5 y sea más fácil de entender
                    $pos = $i + 1; 
                    $posicionesAcertadas .= "Posición $pos acertada! <br>";
                }
            }

            echo "Te quedan " . $_SESSION["intentos"] . " intentos.<br><br>";
            echo $posicionesAcertadas;

            // Si se acaban los intentos, borramos la sesión para la próxima y mostramos el número
            if ($_SESSION["intentos"] == 0) {
                echo "<br>JUEGO TERMINADO. El número era: " . implode("", $numerosRandom);
                session_destroy();
            }

        } else {
            echo "Introduce un número de 5 dígitos";
        }
    }
    ?>
</body>
</html>