import './App.css'
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom'
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'
import Home from './pages/Home/Home'
import Bicicletas from './pages/Bicicletas/Bicicletas'

function App() {

  const isAuthenticated = true

  function loginRedirect(componente) {
    console.log(`loginRedirect::isAuthenticated::${isAuthenticated}`)
    if(isAuthenticated) {
      return <Navigate to={'/'} replace />
    }
    return componente
  }

  return (
    <>
      {/* 
      ROTAS (estrutura)
      - rota /home pages/home
      - rota / pages/home
      - rota /login pages/login
      */}
      <Router>
        <Routes>
          {/* <Route path='/login' Component={SignIn} /> */}
          {/* <Route path='/cadastro' Component={SignUp} /> */}
          {/* Outra forma de validar uma página através de função. Ex: Só abre signin se usuário não logado. */}
          <Route path='/login' element={loginRedirect(<SignIn />)} />
          <Route path='/cadastro' element={loginRedirect(<SignUp />)} />

          {isAuthenticated ?
          (
            <>
              <Route path='/' Component={Home} />
              {/* Uso o fragment porque aqui poderíamos ter várias rotas. Rota única não precisa dele. Exemplo:*/}
              {/* <Route path='/produtos' Component={Home} /> */}
              <Route path='/bicicletas' Component={Bicicletas} />
            </>
          )
          : (
              <Route path='*' element={<Navigate replace to={'/login'} />} />
            )
          }
          
        </Routes>
      </Router>
    </>
  )
}

export default App
