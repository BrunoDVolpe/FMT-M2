import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import App1 from './App-aula1.jsx'
// import App3 from './App-aula3.jsx'
import Exercicios from './pages/Exercicios/Exercicios.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App1 /> */}
    {/* <App /> */}
    {/* <App3 /> */}
    <Exercicios />
  </React.StrictMode>,
)
