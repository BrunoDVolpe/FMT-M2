import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPageExercicio from '../pages/LoginPageExercicio/LoginPageExercicio'
import HomePageExercicio from '../pages/HomePageExercicio/HomePageExercicio'

function RoutesComponentExercicio() {

    const isAuthenticated = true
    // function loginRedirect(component) {
    //     if (isAuthenticated) {
    //         return <Navigate to='/' replace />
    //     }

    //     return component
    // }

    return (
        <>
            <Routes>
                {/* Exercício */}
                <Route path='/login-exercicio' element={<LoginPageExercicio />} />

                {isAuthenticated ?
                    (
                        <>
                            <Route path='/' Component={HomePageExercicio} />
                        </>
                    )
                    : (
                        <>
                            <Route path='*' element={<Navigate replace to='/login-exercicio' />} />
                        </>
                    )
                }
            </Routes>
        </>
    )
}

export default RoutesComponentExercicio