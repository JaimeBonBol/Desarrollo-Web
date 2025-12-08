import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CoordenadaFlecha from './components/CoordenadaFlecha';

function App() {

  const [visible, setVisible] = useState(true);

  function ocultar(){
    setVisible(false);
  }

  return (
    <div>
      {visible ? <CoordenadaFlecha/> : <p> Se ocultó la coordenada</p>}
      <button onClick={ocultar}> Ocultar</button>
    </div>
  )
}

export default App
