// Simula uma API com tempo de resposta de 3 segundos
async function api(url, data) {
    return new Promise(resolve => setTimeout(() => resolve({
        id: Date.now(),
        url,
        ...data,
    }), 3000))
}

export function ComponentesNControlados() {

    async function handleSubmit(event) {
            event.preventDefault()
            const formData = new FormData(event.target)

            // formData.forEach((value, key) => {
            //     console.log(key, value) // key é o 'name' do campo ' value o valor digitado.
            // })

            const data = {
                nome: formData.get('nome'),
                email: formData.get('email')
            }
            //console.log(data)

            // Exemplo se fosse API
            const response = await api('/users', data)
            console.log(response)
    }

    return (
        <div style={{ maxWidth: 250 }}>
        <h1 style={{ fontSize: 18, marginBottom: 32 }}>Componentes não controlados (uncontrolled)</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <input
                    name="nome"
                    type="text"
                    placeholder="Informe seu nome"
                />
                <input
                    name="email"
                    type="text"
                    placeholder="Informe seu email"
                />
                <button>Cadastrar</button>
            </form>
        </div>
    )
}