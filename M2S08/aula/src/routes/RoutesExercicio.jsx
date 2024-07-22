import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPageExercicio from '../pages/LoginPageExercicio/LoginPageExercicio'
import HomePageExercicio from '../pages/HomePageExercicio/HomePageExercicio'
import ProdutosPageExercicio from '../pages/ProdutosPageExercicio/ProdutosPageExercicio'

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
                <Route path='/signin' element={<LoginPageExercicio />} />
                <Route path='/' element={<HomePageExercicio />} />
                <Route path='/home' element={<HomePageExercicio />} />
                <Route path='/produtos' element={<ProdutosPageExercicio />} />

                {isAuthenticated ?
                    (
                        <>
                            <Route path='/' Component={HomePageExercicio} />
                        </>
                    )
                    : (
                        <>
                            <Route path='*' element={<Navigate replace to='/signin' />} />
                        </>
                    )
                }
            </Routes>
        </>
    )
}

export default RoutesComponentExercicio