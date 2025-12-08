import React from 'react'

function ListadoResultados(props) {
  return (
    <ul>
        {props.resultados.map((element) => 
            <li>La suma de {element.valor1} y {element.valor2} es {element.resultado} </li>
        )}
    </ul>
  )
}

export default ListadoResultados
