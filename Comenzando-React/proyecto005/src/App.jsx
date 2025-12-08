import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function eliminarUltimaFila(){
    if (articulos.length > 0) {
      const temp = Array.from(articulos);
      temp.pop();
      setArticulos(temp);
    }
  }

  const [articulos, setArticulos] = useState([
    {
      codigo : 1,
      descripcion : 'Papas',
      precio : 6.34
    },
    {
      codigo : 2,
      descripcion : 'Naranjas',
      precio : 3.20
    },
    {
      codigo : 3,
      descripcion : 'Peras',
      precio : 5.58
    }
  ])

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
            {articulos.map(articulo => {
              return (
                <tr key={articulo.codigo}>
                  <td>{articulo.codigo}</td>
                  <td>{articulo.descripcion}</td>
                  <td>{articulo.precio}</td>
                </tr>
              )
            })}
          </tbody>
      </table>
      <button onClick={eliminarUltimaFila}>Eliminar Fila</button>
    </div>
  )
}

export default App
