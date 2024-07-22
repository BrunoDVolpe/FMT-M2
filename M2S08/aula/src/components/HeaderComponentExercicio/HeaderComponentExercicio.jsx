import './HeaderComponentExercicio.css'
import { Link } from "react-router-dom"

function HeaderComponentExercicio() {
    return (
        <>
            <div className='header__bg'>
                <div className='header'>
                    <img width={120} height={40}
                    src='https://ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwhite-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D121%26h%3D40%26dpr%3D2%26fm%3Dpng&w=128&q=75' alt='Logo Zé Delivery' />
                    <Link to={'/signin'}><button >Entrar</button></Link>
                </div>
            </div>
        </>
    )
}

export default HeaderComponentExercicio