import { useState } from 'react'
import './App.css'
import Contador from './components/Contador'
import { api } from './utils/api.js'
import { Filter } from './components/Filter.jsx'
import { Post } from './components/Post.jsx'
// import { ComponentesControladosPage } from './components/ComponentesControlados.jsx'
// import { ComponentesNControlados } from './components/ComponentesNControlados.jsx'
// import { ComponentsUseRef } from './components/Components-use-ref.jsx'
import { ComponentsUseRefStep } from './components/Components-use-ref-step.jsx'
import { PadraoForm } from './components/PadraoForm.jsx'

function App() {
  const [token] = useState(() => {
    const tokenStorage = localStorage.getItem('[chave-storage]')

    if(tokenStorage) return tokenStorage
    
    return null
  })

  api('/test') // ver em F12, aba "rede" (network) esse fetch acontecendo.

  return (
    <>
      <Contador />
      <div className='container'>
        <span>{token}</span>
      </div>

      {/* Filtros */}
      <Filter />

      <hr />

      <Post />

      {/* Aula 2 */}

      {/* <ComponentesControladosPage /> */}

      {/* <ComponentesNControlados /> */}

      {/* <ComponentsUseRef /> */}

      {/* Simula aqui form com 2 passos, mas precisa salvar o estado das variáveis. Do jeito que está ele perde. */}
      <ComponentsUseRefStep />

      <hr />
      {/* Aula 3 */}
      <PadraoForm />
    </>
  )
}

export default App
