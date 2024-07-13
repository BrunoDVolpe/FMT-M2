import { useState } from "react"
import "./Contador.css"

function Contador() {
    const [resultado, setResultado] = useState(0)

    function handleAdd() {
        //setResultado(resultado + 1) //A atualização do estado leva um tempo. Quando colocamos várias atualizações em seguida, ele perde a referência e só executa a última chamada de atualização.
        //setResultado(resultado + 1)
        //setResultado(resultado + 3) //Só executaria essa última.
        //Testei chamando na do meio o setTimeout. Depois do tempo, ele atualizava o valor inicial para + 1, ignorando a mudança da última linha
        // Ou seja, a última linha transformou 0 em 3, mas um segundo depois transformava o 3 em 1.

        // Melhor trabalhar com estado anterior usando função de callback
        setResultado((estadoAnterior) => estadoAnterior + 1)
        setResultado((estadoAnterior) => estadoAnterior + 1)
        setResultado((estadoAnterior) => estadoAnterior + 1) //Usando a função de callback as 3 chamadas atualizam corretamente
    }

    function handleSubtract() {
        setResultado((estadoAnterior) => {
            if(estadoAnterior - 1 < 0) {
                return 0
            }
            return estadoAnterior - 1
        })
    }

    return (
        <div className="contador">
            <button className="grow1" onClick={handleSubtract}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                </svg>
            </button>
            <div className="grow2"><span className="resultado">{resultado}</span></div>
            <button  className="grow1" onClick={handleAdd}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" width={16} height={16}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>
    )
}

export default Contador