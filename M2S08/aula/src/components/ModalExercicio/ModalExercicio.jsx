import PropTypes from 'prop-types'
import './ModalExercicio.css'

function ModalExercicio({mostrarModal}) {
    return (
        <>
        <div className='modal'>
            <img width={83} height={83}
                src='https://ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75' alt='Rosto do Zé Delivery' />
            <p>Você tem 18 anos ou mais?</p>
            <div className='modal-buttons'>
                <button className='modal-button no' onClick={() => mostrarModal(false)}>Não</button>
                <button className='modal-button yes' onClick={() => mostrarModal(false)}>Sim</button>
            </div>
        </div>
        </>
    )
}

ModalExercicio.propTypes = {
    mostrarModal: PropTypes.func
};

export default ModalExercicio