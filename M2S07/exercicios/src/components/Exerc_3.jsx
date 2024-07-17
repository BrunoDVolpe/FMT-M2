import { useState } from "react"

export function Exerc_3() {
    const [texto, setTexto] = useState('')
    const [lista, setLista] = useState([])

    function handleSubmit(event) {
        event.preventDefault()
        console.log(texto)

        if(texto) {
            //setLista([...lista, texto]) // Eu faria assim, mas o Nicholas fez o abaixo
            setLista(listaAnterior => {
                return [...listaAnterior, texto]
            })
        }
    }

    return (
        <div className="container mt-4">
            <form onSubmit={handleSubmit}>
                <input type="text" className="form-control" onChange={event => setTexto(event.target.value)} />
                <button className="btn btn-primary mt-4">Cadastrar</button>
            </form>

            <strong>Lista:</strong>
            <ul>
                { 
                    lista.map((item, index) => {
                        return <li key={index}>{item}</li>
                    }) 
                }
            </ul>
        </div>
    )
}