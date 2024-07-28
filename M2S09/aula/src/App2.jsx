import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/Index'
import { ContadorProvider } from './contexts/Contador'

function App2() {
  return (
    <>
      <ContadorProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ContadorProvider>
    </>
  )
}

export default App2
