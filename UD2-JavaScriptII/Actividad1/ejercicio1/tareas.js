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

    // crear un span para el texto
    let taskSpan = document.createElement('span');
    taskItem.appendChild(taskSpan); 
    taskSpan.textContent = textoTarea;

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
      // Comprobamos el estado actual del botón
      if (editButton.textContent === 'Editar') {
          // MODO EDITAR
          // Hacer editable el span solo para el texto
          taskSpan.contentEditable = true;
          taskSpan.focus();
          editButton.textContent = 'Guardar';
          
          taskSpan.style.borderBottom = "1px solid black"; 
          
      } else {
          // MODO GUARDAR
          taskSpan.contentEditable = false;
          editButton.textContent = 'Editar';
          
          taskSpan.style.borderBottom = "none";
          
      }
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
