import { BrowserRouter as Router } from 'react-router-dom'
import RoutesComponent from './routes/RoutesExercicio'
import './AppExercicio.css'

// Link exercício (Zé Delivery)

function AppExercicio() {

  const isAuthenticated = true
  {/* Estrutura de tela quando está autenticado */}
  return (
    <>
      <Router>
        {isAuthenticated ? 
        (
          
          <div className='grid-container'>
            {/* <Header /> */}
            {/* <Sidebar /> */}

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
export default AppExercicio