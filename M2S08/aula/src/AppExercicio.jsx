import { BrowserRouter as Router } from 'react-router-dom'
import RoutesComponent from './routes/RoutesExercicio'
import './AppExercicio.css'

// Link exercício (Zé Delivery)

function AppExercicio() {

  const isAuthenticated = true

  return (
    <>
      <Router>
        {isAuthenticated ? 
        (
          <RoutesComponent />
        ) 
        : (
          <RoutesComponent />
        )}
      </Router>  
    </>
  )
}
export default AppExercicio