import { BrowserRouter as Router } from 'react-router-dom'
import Sidebar from "./components/Sidebar/Sidebar"
import Header from "./components/Header/Header"
import RoutesComponent from './routes/Routes'
import './App.css'

// Link exercício (Projeto Intelbras): https://www.figma.com/design/0Y0SutqjC0IrAXxYWAuWkO/SmartFarm-Intelbras?node-id=38-390&t=uu6KYa1It1V36a7i-1

function App3() {

  const isAuthenticated = true
  {/* Estrutura de tela quando está autenticado */}
  return (
    <>
      <Router>
        {isAuthenticated ? 
        (
          
          <div className='grid-container'>
            <Header />
            <Sidebar />

            <RoutesComponent />
          </div>
        ) 
        : (
          <RoutesComponent />
        )}
      </Router>  
    </>
  )
}
export default App3