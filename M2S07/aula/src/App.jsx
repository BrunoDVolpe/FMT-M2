import { useState } from 'react'
import './App.css'
import Contador from './components/Contador'
import { api } from './utils/api.js'
import { Filter } from './components/Filter.jsx'
import { Post } from './components/Post.jsx'

function App() {
  const [token] = useState(() => {
    const tokenStorage = localStorage.getItem('[chave-storage]')

    if(tokenStorage) return tokenStorage
    
    return null
  })

  api('/test') // ver em F12 > "rede" esse fetch acontecendo.

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

    </>
  )
}

export default App
