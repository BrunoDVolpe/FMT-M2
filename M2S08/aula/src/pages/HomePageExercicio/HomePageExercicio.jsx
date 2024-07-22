import HeaderComponentExercicio from '../../components/HeaderComponentExercicio/HeaderComponentExercicio'
import HeroComponentExercicio from '../../components/HeroComponentExercicio/HeroComponentExercicio'
import ProdutosPageExercicio from '../../components/CategoriaProdutosComponentExercicio/CategoriaProdutosComponentExercicio'
import './HomePageExercicio.css'

function HomePageExercicio() {
    return (
        <>
            <div className='home-body'>
                <HeaderComponentExercicio />
                <HeroComponentExercicio />
                <ProdutosPageExercicio />
            </div>
        </>
    )
}

export default HomePageExercicio