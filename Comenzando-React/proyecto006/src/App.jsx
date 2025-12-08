import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dado from './Dado'

function App() {
  function generarValor() {
    return Math.trunc(Math.random() * 6) + 1;
  }

  function tirarDado() {
    setValor1(generarValor());
    setValor2(generarValor());
    setValor3(generarValor());
  }

  const [valor1, setValor1] = useState(generarValor());
  const [valor2, setValor2] = useState(generarValor());
  const [valor3, setValor3] = useState(generarValor());

  return (
    <div>
      <Dado valor = {valor1}/>
      <Dado valor = {valor2}/>
      <Dado valor = {valor3}/>
      <br />

      <button onClick={tirarDado}>Tirar dados</button>
    </div>
  )
}

export default App
