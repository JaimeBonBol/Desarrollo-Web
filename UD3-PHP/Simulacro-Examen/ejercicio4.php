<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4 simulacro</title>
</head>
<body>
    
        
    <?php 
        //Lógica para definir la pestaña activa
        $tab = isset($_GET['tab']) ? $_GET['tab'] : 'insertar';

        //Navegación (Enlaces)
        echo '<ul class="tabs">';
        echo '<li><a href="?tab=consulta" class="'.($tab == 'consulta' ? 'active' : '').'">consulta</a></li>';
        echo '<li><a href="?tab=borrado" class="'.($tab == 'borrado' ? 'active' : '').'">borrado</a></li>';
        echo '<li><a href="?tab=insertar" class="'.($tab == 'insertar' ? 'active' : '').'">insertar</a></li>';
        echo '</ul>';

        $productos = array("PC" => 2200, "Raton" => 20, "Teclado" => 30);

        //Contenido
        echo '<div class="tab-content">';
        switch($tab){
            case 'consulta':
             ?>   
                <form action="ejercicio4.php" method="POST">
                    <label for="productoConsulta">Introduce el producto</label>
                    <input type="text" name="productoConsulta">
                    <input type="submit">
                </form>
             <?php

                if(isset($_POST["productoConsulta"])){
                    $nombre = $_POST["productoConsulta"];
                    $existe = false;
                    foreach ($productos as $nombreV => $value) {
                        if ($nombreV == $nombre) {
                            $existe = true;
                        }
                    }

                    if($existe){
                        echo "El producto $nombre tiene un precio de ".$productos[$nombre];
                    }else {
                        echo "El producto no existe";
                    }
                    
                }
                break;

            case 'borrado':
                ?>
                    <form action="ejercicio4.php" method="POST">
                        <label for="productoBorrar">Introduce el producto</label>
                        <input type="text" name="productoBorrar">
                    <input type="submit">
                    </form>
                <?php
                
                if(isset($_POST["productoBorrar"])){
                    $nombre = $_POST["productoBorrar"];
                    $existe = false;
                    foreach ($productos as $nombreV => $value) {
                        if ($nombreV == $nombre) {
                            $existe = true;
                        }
                    }

                    if($existe){
                        unset($productos[$nombre]);

                        echo "Array nuevo: <br>";
                        foreach ($productos as $nombre => $precio) {
                            echo "$nombre, su precio es $precio <br>";
                        }
                    }else {
                        echo "El producto no existe";
                    }

                }
                break;

            case 'insertar':
                ?>
                    <form action="ejercicio4.php" method="POST">
                        <label for="productoInsertar">Introduce el producto</label>
                        <input type="text" name="productoInsertar">
                        <label for="precioInsertar">CIntroduce el precio del producto</label>
                        <input type="number" name="precioInsertar">
                    <input type="submit">
                    </form>
                <?php

                if(isset($_POST["productoInsertar"]) && isset($_POST["precioInsertar"])){
                    $nombre = $_POST["productoInsertar"];
                    $precio = $_POST["precioInsertar"];

                    // Añadirlo
                    $productos[$nombre] = $precio;
                    echo "Array nuevo: <br>";
                    foreach ($productos as $nombre => $precio) {
                        echo "$nombre, su precio es $precio <br>";
                    }
                }      
                break;
        }

        echo '</div>';

    ?>
</body>
</html>