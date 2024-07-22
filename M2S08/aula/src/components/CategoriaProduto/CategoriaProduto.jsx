import PropTypes from 'prop-types'
import './CategoriaProduto.css'

function CategoriaProduto({ texto, imagem }) {
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

CategoriaProduto.propTypes = {
    texto: PropTypes.string,
    imagem: PropTypes.string,
};

export default CategoriaProduto