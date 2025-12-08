import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function generarNumsAleatorios() {
    const vector = new Array(5);
    for (let i = 0; i < vector.length; i++) {
      vector[i] = Math.trunc(Math.random() * 10);
    }

    setValores(vector);
  }

  // Hook useState
  const [numeros, setValores] = useState([0, 0, 0, 0, 0]);

  return (
    <div>
      <p>Números aleatorios : { numeros.map(num => (
        <p>{num}</p>
      )) }</p>
      <button onClick={generarNumsAleatorios}>Generar</button>
    </div>
  )
}

export default App
