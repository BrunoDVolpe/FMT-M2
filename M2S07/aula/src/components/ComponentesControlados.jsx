import { useState } from "react"

export function ComponentesControladosPage() {
    const [nome, setNome] = useState('') //Se sei que é string, já passo como uma string vazia, por exemplo.
    const [isFocus, setIsFocus] = useState(false)
    const [error, setError] = useState({
        error: false,
        message: ''
    })

    function onFocus() {
        setIsFocus(true)
    }

    // function onBlur() {
    //     setIsFocus(false)
    // }

    function onBlur2(event) {
        console.log(event.target)
        if(!event.target.value.includes('hello')) {
            setError({
                error: true,
                message: 'Informe um hello para seguir...'
            })
        } else {
            setError({
                error: false,
                message: ''
            })
        }
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(nome)
    }
    return (
        <div style={{ maxWidth: 250 }}>
            <span>Texto: {nome}</span>

            <form onSubmit={handleSubmit} className="form-container">
                <input
                    onFocus={onFocus}
                    //onBlur={onBlur} //Exemplo 1
                    onBlur={onBlur2} //Exemplo 2
                    className={isFocus ? 'input-focus' : undefined} //Exemplo ternário. Obrigatório ter o 'else'. Abaixo outra forma
                    //className={isFocus && 'input-focus'} //Alternativa: Condição verdadeira
                    type="text"
                    placeholder="Informe seu nome"
                    onChange={(event) => setNome(event.target.value)}
                />
                {error.error && (
                    <span>Erro: {error.message}</span>
                )}

                <button disabled={!nome}>Cadastrar</button>

            </form>
        </div>
    )
}