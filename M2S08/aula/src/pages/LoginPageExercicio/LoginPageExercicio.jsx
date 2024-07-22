import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPageExercicio.css'

function LoginPageExercicio() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        console.log('email: ', email, ' | senha: ', password)
        if(email == "admin@admin.com" && password == "admin123") {
            navigate('/')
        }
        setEmail('')
        setPassword('')
    }

    return (
        <>
        <div className='login-container'>
            <div className='login'>
                <div className='login-img'>
                    <img src='https://ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Flogo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3Dundefined%26h%3Dundefined%26dpr%3D2%26fm%3Dpng&w=256&q=75' alt='logo Zé Delivery' />
                </div>
                <p>Insira seu e-mail para entrar ou se cadastrar:</p>
                <form className='login-form' onSubmit={handleSubmit}>
                    <input type='text' placeholder='E-mail' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type='password' placeholder='Senha' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type='submit'>Continuar com e-mail</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginPageExercicio