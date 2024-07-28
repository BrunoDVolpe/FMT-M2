import { createContext, useContext, useState } from "react";

// Cria o contexto e exporta ele. Ele será usado pelo useContext nas funções. 
export const ContadorContext = createContext({
    contador: 0,
    incrementar: () => {},
    decrementar: () => {}
})

// Precisamos criar um Provider pra que quando eu for usar o contexto, eu não precise fazer o formato abaixo
// lá nas minhas páginas.

export function ContadorProvider({ children }) {
    const [contador, setContador] = useState(0)

    function incrementar() {
        setContador(prevState => prevState + 1)
    }

    function decrementar() {
        setContador(prevState => prevState - 1)
    }

    return <ContadorContext.Provider value={{ contador, incrementar, decrementar }}>{children}</ContadorContext.Provider>
    // incrementar nesse código é o mesmo que incrementar: incrementar -> o primeiro é do contexto e o segundo da função.
    // Como tem o mesmo nome, basta declarar uma vez que ele associa as duas coisas.
}

// Fazendo assim só precisamos de uma importação, que é dessa função. Se não usarmos assim, podemos declarar esse contexto no
// código, mas faremos duas importações, do ContadorContext e do useContext.
export function useContador() {
    const contexto =  useContext(ContadorContext)
    return contexto
}