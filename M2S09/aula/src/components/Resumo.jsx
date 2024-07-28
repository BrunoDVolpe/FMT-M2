import { useContext } from "react"
import { CarrinhoContext } from "../contexts/Carrinho"

function Resumo() {
    const carrinhoContexto = useContext(CarrinhoContext)

    return (
        <div>
            <strong>Resumo</strong>
            <h1>{carrinhoContexto.contador}</h1>
        </div>
    )
}

export default Resumo