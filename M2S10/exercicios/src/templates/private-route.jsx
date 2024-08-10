import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/auth'
import "./private-route.css"

export function TemplatePrivateRoute() {
    const {user, signOut} = useAuth()
    return (
        user ?
        <div className='layout'>
            <div className='sidebar'>
                <h1>Sidebar</h1>
                <p>Olá, {user.firstName}!</p>
                <p>Conteúdo do template</p>
                <button onClick={signOut}>Logout</button>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
        : <Navigate to="/login" replace={true} />
    )
}