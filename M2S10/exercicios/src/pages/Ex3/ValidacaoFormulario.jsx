import { useForm } from "react-hook-form"

export function ValidacaoFormulario() {
    const { register, handleSubmit, formState: {errors} } = useForm()

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 50 }}>
            <div style={{width: 350}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register('nome', { required: true })} className="form-control" placeholder="Nome" />
                    {errors.nome && <span className="form-text text-muted">O nome é obrigatório.</span>}
                    <input type="email" {...register('email', { required: true })} className="form-control" placeholder="E-mail" />
                    {errors.email && <span className="form-text text-muted">O e-mail é obrigatório.</span>}
                    <input type="number" {...register('idade', { required: true, min: 18 })} className="form-control" placeholder="Idade" />
                    {errors.idade && <span className="form-text text-muted">A idade é obrigatória e deve ser pelo menos 18 anos.</span>}
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}