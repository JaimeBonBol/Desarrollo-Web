import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [numero, setNumero] = useState('');

  function cambiarNumero(event) {
    const entrada = event.target.value;
    console.log(entrada.length);
    let cant = 0;

    for (let i = 0; i < entrada.length; i++) {
      if (entrada[i] == '0' || entrada[i] == '1') {
        cant ++;
      }

      if(cant == entrada.length){
        setNumero(entrada);
      }
    }
  }

  return (
    <div>
      <p>Ingrese su número binario : </p>
      <input type="text" value={numero} onChange={cambiarNumero}/>
    </div>
  )
}

export default App
