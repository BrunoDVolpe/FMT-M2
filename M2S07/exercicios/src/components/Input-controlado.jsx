import { useState } from "react"

export function InputControlado() {
    const [texto, setTexto] = useState(null)

    return (
        <div className="container mt-4">
            <input
                placeholder="Informe seu nome"
                type="text"
                className="form-control"
                onChange={(event) => setTexto(event.target.value)} />
            <span style={{display: "block"}}>{texto}</span>
        </div>
    )
}