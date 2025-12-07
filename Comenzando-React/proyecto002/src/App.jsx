import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function retornarNumeroAleatorio() {
  return Math.trunc(Math.random() * 10);
}

function mostrarTitulo(titulo) {
  return (
    <h1>{titulo}</h1>
  );
}

function App() {
  const buscadores = ['https://www.google.com/?hl=es', 'https://www.bing.com/?setlang=es', 'https://es.search.yahoo.com/?fr2=p:fprd,mkt:es'];
  const siglo = 21;
  const persona = {
    nombre: "Cristian",
    edad: 17
  }
  const titulo = 'Everyone';

  return (
    <div>
      <h1>Título nivel 1</h1>
      <hr />
      <p>Estamos en el siglo { siglo }</p>
      <h3>Acceso a un objeto</h3>
      <p>{persona.nombre} tiene {persona.edad} años</p>
      <h3>Llamada a una función</h3>
      <p>Un valor aleatorio llamado a un método : </p>
      {retornarNumeroAleatorio()}
      <h3>Cálculo inmediato de operaciones</h3>
       3 + 3 = {3 + 3}

       <a href={ buscadores[0] } target='blank'>Google</a>
       <a href={ buscadores[1] } target='blank'>Bing</a>
       <a href={ buscadores[2] } target='blank'>Yahoo</a>

       {mostrarTitulo('Hello world')}
       {mostrarTitulo(titulo)}
    </div>
  )
}

export default App
