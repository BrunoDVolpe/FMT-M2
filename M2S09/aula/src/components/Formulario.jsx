import { useContext } from "react"
import { CarrinhoContext } from "../contexts/Carrinho"

function Formulario() {
    const carrinhoContexto = useContext(CarrinhoContext)

    console.log('Formulário: ', carrinhoContexto)

    return (
        <div>
            <strong>Formulário</strong>
            <button onClick={carrinhoContexto.adicionarMaisUm}>Adicionar</button>
        </div>
    )
}

export default Formulario