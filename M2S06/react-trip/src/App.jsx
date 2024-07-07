//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import CardBike from './components/CardBike'
import { useEffect, useState } from 'react'

function App() {
  let titulo = 'Meu título'

  // const [text, setText] = useState()
  const [text, setText] = useState('Senai')

  const bikes = [
    {
      id: 0,
      modelo: "Magic Might",
      preco: "2.499,00",
      imgSrc: "https://origamid.com/projetos/bikcraft/img/bicicletas/magic-home.jpg"
    },
    {
      id: 1,
      modelo: "Nimbus Stark",
      preco: "4.999,00",
      imgSrc: "https://origamid.com/projetos/bikcraft/img/bicicletas/nimbus-home.jpg"
    },
    {
      id: 2,
      modelo: "Nebula Cosmic",
      preco: "3.999,00",
      imgSrc: "https://origamid.com/projetos/bikcraft/img/bicicletas/nebula-home.jpg"
    },
  ]

  function buscarEmpresa() {
    console.log('Buscando empresa ', text)
  }

  useEffect(() => {
    if (text !== '') {
      console.log('Texto da empresa foi alterado.')
    }
  }, [text])

  useEffect(() => {
    console.log('Componente foi iniciado ou construído.')
  }, [])

  useEffect(() => {
    console.log('Alguma mudança está acontecendo.')
  })
  
  return (
    <>
      {titulo}
      <h6>{text}</h6>
      <input type='text' placeholder='Digite o nome da empresa'
        value={text} onChange={(event) => setText(event.target.value)} />
      
      <button onClick={() => buscarEmpresa()}>Buscar empresa</button>

      <Header></Header>

      {bikes.map(bike =>
        <CardBike key={bike.id} modelo={bike.modelo} preco={bike.preco} imagemSrc={bike.imgSrc} />
      )}
      
      <Footer></Footer>
    </>
  )
}

export default App
