import { useState } from "react"
import "./Contador.css"

function Contador() {
    const [resultado, setResultado] = useState(0)

    function handleAdd() {
        setResultado((estadoAnterior) => estadoAnterior + 1)
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