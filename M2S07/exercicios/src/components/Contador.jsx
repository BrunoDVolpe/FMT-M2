import { useState } from "react"
import "./Contador.css"

function Contador() {
    const [resultado, setResultado] = useState(0)

    return (
        <div className="contador">
            <button className="grow1" onClick={() => {setResultado(resultado - 1)}}>-</button>
            <div className="grow2"><span className="resultado">{resultado}</span></div>
            <button  className="grow1" onClick={() => {setResultado(resultado + 1)}}>+</button>
        </div>
    )
}

export default Contador