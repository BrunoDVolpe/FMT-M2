import PropTypes from 'prop-types'
import './CategoriaProdutoComponentExercicio.css'

function CategoriaProdutoComponentExercicio({ texto, imagem }) {
    return (
    <>
        <div className="card-categoria">
            <div className="card-categoria__bg">
                <img src={imagem} alt={texto} />
            </div>
            <span>{texto}</span>
        </div>
    </>
    );
}

CategoriaProdutoComponentExercicio.propTypes = {
    texto: PropTypes.string,
    imagem: PropTypes.string,
};

export default CategoriaProdutoComponentExercicio