import { useContext } from "react"
import Formulario from "../../components/Formulario"
import Resumo from "../../components/Resumo"
import { CarrinhoContext, useCarrinho } from "../../contexts/Carrinho"

function Home() {
    const contexto = useCarrinho()

    console.log(contexto.usuario)

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={() => {contexto.signIn('Bruno')}}>Entrar na aplicação</button>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap:32 }}>
                <Formulario />
                <Resumo />
            </div>
        </div>
    )
}

export default Home