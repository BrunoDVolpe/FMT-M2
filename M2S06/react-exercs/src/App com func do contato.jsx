// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ContatoForm from './components/ContatoForm'
import { useState } from 'react'

function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleSubmit() {
    const form = {
        nome, // Quando o objeto e a variável tem o mesmo nome, basta declarar uma vez.
        email, // Ou seja, aqui é o equivalente a 'email: email'
        mensagem
    }
      console.log('Formulário a ser enviado: ', form)
  }

  return (
    <>
      <Header />
      
      <ContatoForm nome={nome} email={email} mensagem={mensagem} handleSubmit={handleSubmit}
        setNome={setNome} setEmail={setEmail} setMensagem={setMensagem} />

      <Footer />
    </>
  )
}

export default App
