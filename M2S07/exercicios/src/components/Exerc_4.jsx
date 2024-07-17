import { useEffect, useState } from "react"

export function Exerc_4() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        idade: ''
    })
    const [message, setMessage] = useState(null)

    useEffect(() => {
        const isError = Object.values(formData).reduce((totalizador, item) => {
            if(!item) {
                totalizador += 1
            }
            return totalizador
        }, 0)

        if(isError > 0) {
            setMessage("Preencha todos os campos!")
        } else {
            setMessage(null)
        }
    }, [formData])

    return (
        <div className="container mt-4">
            <form className="mb-4">
                {/* Input de NOME */}
                <input
                    placeholder="Informe seu nome"
                    type="text"
                    className="form-control"
                    onChange={(event) => setFormData(prevState => ({ ...prevState, nome: event.target.value }))}
                    />

                {/* Input de E-MAIL */}
                <input
                    placeholder="Informe seu e-mail"
                    type="text"
                    className="form-control"
                    onChange={(event) => setFormData(prevState => ({ ...prevState, email: event.target.value }))}
                    />

                {/* Input de IDADE */}
                <input
                    placeholder="Informe sua idade"
                    type="text"
                    className="form-control"
                    onChange={(event) => setFormData(prevState => ({ ...prevState, idade: event.target.value }))}
                    />

                <button className="btn btn-primary mt-4">Cadastrar</button>
            </form>

            <code>
                {/* {JSON.stringify(formData, null, 4)} */}
                {message}
            </code>
        </div>
    )
}