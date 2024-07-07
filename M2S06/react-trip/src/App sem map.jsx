//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CardBike from './components/CardBike'

function App() {
  let titulo = 'Meu título'

  return (
    <>
      {titulo}

      <Header></Header>

      <CardBike modelo="Magic Might" preco="2.499,00" imagemSrc="https://origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg"></CardBike>
      <CardBike modelo="Nimbus Stark" preco="4.999,00" imagemSrc="https://origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg"></CardBike>
      <CardBike modelo="Nebula Cosmic" preco="3.999,00" imagemSrc="https://origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg"></CardBike>

      <Footer></Footer>
    </>
  )
}

export default App
