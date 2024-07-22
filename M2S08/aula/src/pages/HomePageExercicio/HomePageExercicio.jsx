import HeaderComponentExercicio from '../../components/HeaderComponentExercicio/HeaderComponentExercicio'
import HeroComponentExercicio from '../../components/HeroComponentExercicio/HeroComponentExercicio'
import ProdutosPageExercicio from '../../components/CategoriaProdutosComponentExercicio/CategoriaProdutosComponentExercicio'
import ModalExercicio from '../../components/ModalExercicio/ModalExercicio'
import './HomePageExercicio.css'
import { useEffect, useState } from 'react'

function HomePageExercicio() {
    const [modal, setModal] = useState()

    const mostrarModal = (status) => {
        setModal(status)
    }

    useEffect(() => {
        setModal(true)
    }, [])

    return (
        <>
            <div className='home-body'>
                <HeaderComponentExercicio />
                <HeroComponentExercicio />
                <ProdutosPageExercicio />
                {modal && <div className='modal-container'><ModalExercicio mostrarModal={mostrarModal} /></div>}
            </div>
        </>
    )
}

export default HomePageExercicio