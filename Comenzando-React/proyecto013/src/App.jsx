import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [texto, setTexto] = useState('');

  function cambiarTexto(e){
    setTexto(e.target.value);
  }

  return (
    <div>
      <p>
        <textarea value={texto} onChange={cambiarTexto} cols="100" rows="5"></textarea>
      </p>
      <hr />
      <p>
        <textarea value={texto} cols="100" rows="5"></textarea>
        <p>Cantidad de carácteres escritos : {texto.length}</p>
      </p>
    </div>
  )
}

export default App
