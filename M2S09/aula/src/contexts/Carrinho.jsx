import { createContext, useContext, useState } from "react";

// Aqui vamos criar o contexto
export const CarrinhoContext = createContext({
    contador: 0, // contador inicia com 0 e é do tipo number
    adicionarMaisUm: () => {}, //indicando que esse parâmetro é do tipo função
    signIn: (nome) => {},
    usuario: {
        first_name: null
    }
})

// Aqui vamos aplicar o contexto. Poderíamos colocar essa tag <CarrinhoContext.Provider value={ xpto }>elemento/contexto</...>
// mas podemos abstrair e deixar o esse tipo de estrutura aqui e passar apenas a função provider pra frente.
// Dentro dela diremos quais informações do contexto que vamos utilizar.
export function CarrinhoProvider({ children }) {
    const [contador, setContador] = useState(0)
    const [usuario, setUsuario] = useState({ first_name: null })

    function adicionarMaisUm() {
        setContador(prev => prev + 1)
    }

    function signIn(nome) {
        setUsuario({ first_name: nome })
    }

    return <CarrinhoContext.Provider value={{ adicionarMaisUm, contador, signIn, usuario }}>{children}</CarrinhoContext.Provider>
}

// Sobre context trabalha com o consumer e com o provider.
// O provider é quem provê as informações para o escopo dele. Usamos ele para podemos nos comunicar com qualquer elemento
// dentro do escopo dele, sem precisar passar as informações de pai pra filho (caminho único). Ele funciona como uma variável
// global dentro do escopo.

// Como os filhos precisarão chamar contexto = useContext(CarrinhoContext) pra usar o componente, podemos abstrair mais um pouco
// e antecipar essa parte, exportando direto o componente como um hook personalizado.

export function useCarrinho() {
    const contexto = useContext(CarrinhoContext)
    return contexto
}