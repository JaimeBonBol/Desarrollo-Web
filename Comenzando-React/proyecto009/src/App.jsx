import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [texto, setTexto] = useState('');

  useEffect(() => {document.title = texto}, [texto]);

  function cambiar(evento) {
    setTexto(evento.target.value);
  }

  return (
    <div>
      <p>
        <input type="text" onChange={cambiar} />
      </p>
      <p>{texto}</p>
    </div>
  )
}

export default App
