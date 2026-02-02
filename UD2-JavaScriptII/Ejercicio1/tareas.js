// Seleccionar elementos del DOM
const newTaskInput = document.getElementById('entradaTexto');
const addTaskBtn = document.getElementById('anyadir');
const taskList = document.getElementById('listaTareas');

function editarTarea() {
  
}

// Función para agregar una nueva tarea
function anyadirTarea() {

  // Obtener el valor del input
  let textoTarea = newTaskInput.value;

  // Verificar que el campo no esté vacío
  if (textoTarea!="") {

    // Crear un nuevo elemento de lista (li)
    let taskItem = document.createElement('li');
    taskItem.textContent = textoTarea;

    // Crear botón para eliminar la tarea
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    let editButton = document.createElement('button');
    editButton.textContent = 'Editar'

    // Agregar evento al botón para eliminar la tarea
    deleteButton.addEventListener('click', () => {
      taskItem.remove();
    });

    editButton.addEventListener('click', () => {
      taskItem.contentEditable = true;
      editButton.textContent = 'Guardar';
    })


    //  Agregar la clase deleteBtn al botón de eliminar
    deleteButton.classList.add('deleteBtn');        
    editButton.classList.add('editarBtn');        
    
    // Agregar el botón al elemento de lista
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(editButton);

    // Agregar la tarea a la lista
    taskList.appendChild(taskItem);

    // Limpiar el campo de texto después de agregar la tarea
    newTaskInput.value = '';
  }
}
