import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [datos, setdatos] = useState({
    nombre: '',
    edad : '',
    estudios : false
  })

  function cambiarNombre(e){
    setdatos((valores) => ({
      ...valores,
      nombre : e.target.value
    }))
  }

  function cambiarEdad(e){
    setdatos((valores) => ({
      ...valores,
      edad : e.target.value
    }))
  }

  function cambiarEstudios(e){
    setdatos((valores) => ({
      ...valores,
      estudios : !datos.estudios
    }))
  }

  function procesar(e) {
    e.preventDefault();
    alert('Datos cargados ' + datos.nombre + ' ' + datos.edad + ' ' + datos.estudios);
  }

  return (
    <div>
      <form onSubmit={procesar}>
        <p>Ingrese su nombre : 
          <input type="text" value={datos.nombre} onChange={cambiarNombre} />
        </p>
        <p>Ingrese su edad : 
          <input type="number" value={datos.edad} onChange={cambiarEdad} />
        </p>
        <p>Estudios : 
          <input type="checkbox" value={datos.estudios} onChange={cambiarEstudios} />
        </p>
        <p><input type='submit' /></p>
      </form>
      <hr />
      <h3>Datos ingresados</h3>
      <p>Nombre : {datos.nombre}</p>
      <p>Edad : {datos.edad}</p>
      <p>Estudios : {datos.estudios ? 'Con estudios' : 'Sin estudios'}</p>
    </div>
  )
}

export default App
