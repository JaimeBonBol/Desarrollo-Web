import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contador from './components/Contador'

function App() {
  function realizarConteo(){
    setNumero(numero + 1);
  }

  const [numero, setNumero] = useState(0);

  return (
    <div>
      <Contador valor = {numero} />
      <br />
      <button onClick={realizarConteo}>Incrementar</button>
    </div>
  )
}

export default App
