import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [dia, setDia] = useState('Lunes');
  const [estudio, setEstudio] = useState('');

  function cambiarDia(e) {
    setDia(e.target.value);
  }

  function cambiarEstudio(e){
    setEstudio(e.target.value);
  }

  return (
    <div>
      <p>
        <select value={dia} onChange={cambiarDia}>
          <option >Lunes</option>
          <option >Martes</option>
          <option >Miercoles</option>
          <option >Jueves</option>
          <option >Viernes</option>
          <option >Sabado</option>
          <option >Domingo</option>
        </select>
      </p>

      <p>Día seleccionado : {dia}</p>

      <hr />

      <p>
        <input type="radio" value="Primario" checked = {estudio == 'primario'} onChange={cambiarEstudio}/>
        Primario
      </p>
      <p>
        <input type="radio" value="Secundaria" checked = {estudio == 'secundaria'} onChange={cambiarEstudio}/>
        Secundaria
      </p>
      <p>
        <input type="radio" value="Universitario" checked = {estudio == 'universitario'} onChange={cambiarEstudio}/>
        Universitario
      </p>

      <p>Estudio seleccionado : { estudio}</p>
    </div>
  )
}

export default App
