// Objeto constructor cliente
function cliente() {
    let nombre = "Luis Jemez";
    let saldo = 0;

    this.ingreso = function(cantidad){
        if(cantidad > 0){
            saldo += cantidad;
            alert(`Ingreso correcto. Nuevo saldo: ${saldo} €`);
        }else{
            alert('Error. La cantidad no puede ser negativa');
        }
    }

    this.retirada = function(cantidad){
        if(cantidad > 0){
            if(cantidad <= saldo){
                saldo -= cantidad;
            alert(`Retirada correcta. Nuevo saldo: ${saldo}`);
            }else{
                alert('Error. Saldo insuficiente');
            }
        }else{
            alert('Error. La cantidad no puede ser negativa');
        }
    }

    this.consultarSaldo = function(){
        return saldo;
    }
}

let cliente1 = new cliente();

function retirar(){
    const cantidaRetirar = parseFloat(document.getElementById("inputRetirar").value);

    cliente1.retirada(cantidaRetirar);
    limpiarCampos();
}

function ingresar(){
    const cantidaIngresar = parseFloat(document.getElementById("inputIngresar").value);

    cliente1.ingreso(cantidaIngresar);
    limpiarCampos();
}

function consultarSaldo(){
    const salidaSaldo = document.getElementById("salidaSaldo");

    let saldo = cliente1.consultarSaldo();

    salidaSaldo.innerHTML = `El saldo actual de la cuenta es de ${saldo} €`;
}

function limpiarCampos(){
    // Guardamos las referencias a los inputs
    const inputRetirar = document.getElementById("inputRetirar");
    const inputIngresar = document.getElementById("inputIngresar");

    // Vaciar los campos
    inputRetirar.value = "";
    inputIngresar.value = "";
}
