import './App.css'
import { CarrinhoProvider } from './contexts/Carrinho'
import Home from './pages/Home/Home'

function App() {
  return (
    <>
      <CarrinhoProvider>
        <Home />
      </CarrinhoProvider>
    </>
  )
}

export default App
