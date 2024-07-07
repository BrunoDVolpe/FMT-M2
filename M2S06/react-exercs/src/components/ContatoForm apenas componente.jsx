import './ContatoForm.css'

function ContatoForm({ nome, setNome, email, setEmail, mensagem, setMensagem, handleSubmit }) {
    return (
        <div className='container justify-center'>
            <div className='contato-form'>
                <fieldset>
                    <label>Nome:</label>
                    <input type='text' placeholder='Digite seu nome' value={nome} onChange={(e) => setNome(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label>E-mail:</label>
                    <input type='text' placeholder='Digite seu e-mail' value={email} onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
                <fieldset>
                    <label>Mensagem:</label>
                    <textarea placeholder="Digite sua mensagem" rows="4" cols="50" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
                </fieldset>
                <button onClick={() => handleSubmit()}>Enviar</button>
            </div>
        </div>
    )
}

export default ContatoForm