import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function realizarOperacion(e) {
  e.preventDefault();
  const v1 = parseInt(e.target.valor1.value);
  const v2 = parseInt(e.target.valor2.value);
  const suma = v1 + v2;
  alert(`La suma es ${suma}`);
}

function App() {

  return (
    <div>
      <form onSubmit={ realizarOperacion }>
        <p>Ingrese primer valor: </p>
        <input type="number" name="valor1" id="" />
        <p>Ingrese segundo valor: </p>
        <input type="number" name="valor2" id="" />
        <p>Sumar</p>
        <input type="submit" name="sumar" id="" />
      </form>
    </div>
  )
}

export default App
