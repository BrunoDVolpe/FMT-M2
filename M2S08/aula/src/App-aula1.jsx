import { useEffect, useState } from 'react'
import './App.css'
import { getUsers } from './services/web'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // [] indica que só vai executar uma vez no início do componente.
    // console.log("Componente iniciado no App.jsx")
    //const resposta_api = await getUsers() // Não posso usar assim porque o React não deixa eu chamar o useEffect de async.
    async function fetchData() {
      const response = await getUsers()
      console.log(response)
      setUsers(response)
    }
    fetchData();
  }, [])

  return (
    <>
      <ul>
        {/* <li>Yan Esteves (yan.m.esteves@gmail.com)</li>
        <li>João Coelho (joao.coelho@gmail.com)</li> */}
        { users.map(user => <li key={user.id}>{user.name} ({user.email})</li>) }
      </ul>
    </>
  )
}

export default App
