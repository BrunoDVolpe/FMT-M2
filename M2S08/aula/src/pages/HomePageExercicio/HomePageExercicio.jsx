import HeaderComponentExercicio from '../../components/HeaderComponentExercicio/HeaderComponentExercicio'
import HeroComponentExercicio from '../../components/HeroComponentExercicio/HeroComponentExercicio'
import './HomePageExercicio.css'

function HomePageExercicio() {
    return (
        <>
            <div className='home-body'>
                <HeaderComponentExercicio />
                <HeroComponentExercicio />
            </div>
        </>
    )
}

export default HomePageExercicio