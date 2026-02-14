let articulo = {
    titulo: '',
    cuerpo: '',
    autor: '',
}

function crearArticulo(){
    const tituloInput = document.getElementById('inputTitulo');
    const cuerpoInput = document.getElementById('inputCuerpo');
    const autorInput = document.getElementById('inputAutor');

    if (tituloInput.value === '' || cuerpoInput.value === '' || autorInput.value === '') {
        alert("Debes rellenar todos los campos")
        return;
    }

    articulo.titulo = tituloInput.value;
    articulo.cuerpo = cuerpoInput.value;
    articulo.autor = autorInput.value;

    insertarArticulo();

    // Borrar datos del formulario escritos
    tituloInput.value = '';
    cuerpoInput.value = '';
    autorInput.value = '';
}

function insertarArticulo() {

    // El div principal de la ficha
    const nuevaFicha = document.createElement('div');
    nuevaFicha.classList.add('ficha');

    // El título
    const h3 = document.createElement('h3');
    h3.textContent = articulo.titulo;

    // El cuerpo
    const p = document.createElement('p');
    p.textContent = articulo.cuerpo;

    // El autor
    const small = document.createElement('small');
    small.textContent = "Escrito por: " + articulo.autor;

    // Crear el botón de borrar
    const btnBorrar = document.createElement('button');
    btnBorrar.textContent = "Borrar";
    btnBorrar.classList.add('btn-borrar');

    // Función de borrar: elimina solo esta ficha
    btnBorrar.addEventListener('click', () => {
        nuevaFicha.remove();
    });

    // Insertar todo al div padre
    nuevaFicha.appendChild(h3);
    nuevaFicha.appendChild(p);
    nuevaFicha.appendChild(small);
    nuevaFicha.appendChild(btnBorrar);

    // Insertar el div padre, que es la ficha, en el HTML
    const lista = document.getElementById('listaArticulos');
    lista.appendChild(nuevaFicha);
}