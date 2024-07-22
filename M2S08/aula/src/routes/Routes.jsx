import { Routes, Route, Navigate } from 'react-router-dom'
import Signin from '../pages/SignIn/SignIn'
import Signup from '../pages/SignUp/SignUp'
import Home from '../pages/Home/Home'
import Bicicletas from '../pages/Bicicletas/Bicicletas'

// Yan usa o sufixo Page e Component para ajudar a identificar as coisas.
// HomePage
// SidebarComponent

function RoutesComponent() {

    const isAuthenticated = true
    function loginRedirect(component) {
        if (isAuthenticated) {
            return <Navigate to='/home' replace />
        }

        return component
    }

    return (
        <>
            <Routes>
                <Route path='/login' element={loginRedirect(<Signin />)} />
                <Route path='/cadastro' element={loginRedirect(<Signup />)} />

                {/* {condição ? seVerdade : falso} */}
                {isAuthenticated ?
                    (
                        <>
                            <Route path='/' Component={Home} />
                            <Route path='/home' Component={Home} />
                            <Route path='/bicicletas' Component={Bicicletas} />
                        </>
                    )
                    : (
                        <>
                            <Route path='*' element={<Navigate replace to='/login' />} />
                        </>
                    )
                }
            </Routes>
        </>
    )
}

export default RoutesComponent