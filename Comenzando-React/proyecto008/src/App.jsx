import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListadoResultados from './components/Listado'
import FormularioNumeros from './components/FormularioNumeros'

function App() {

  const [operaciones, setOperacion] = useState([]);

  function sumar(event) {
    event.preventDefault();
    const valor1 = parseInt(event.target.valor1.value);
    const valor2 = parseInt(event.target.valor2.value);

    const suma = valor1 + valor2;

    const nuevo = {
      resultado : suma,
      valor1 : valor1,
      valor2 : valor2
    }

    setOperacion([nuevo, ...operaciones]);

    event.target.valor1.value = '';
    event.target.valor2.value = '';
  }

  return (
    <div>
      <FormularioNumeros onSumar = {sumar}/>
      <ListadoResultados resultados = {operaciones}/>
    </div>
  )
}

export default App
