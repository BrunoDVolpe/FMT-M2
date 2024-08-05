import { useForm } from "react-hook-form"

export function CadastroUsuario() {
    const { register, handleSubmit, formState: {errors} } = useForm()

    function onSubmit(data) {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('nome', { required: true })} placeholder="Nome" /><br />
            {errors.nome && <><span>O nome é obrigatório</span><br /></>}
            <input type="email" {...register('email', { required: true })} placeholder="Email" /><br />
            {errors.email && <><span>O email é obrigatório</span><br /></>}
            <input type="password" {...register('senha', { required: true })} placeholder="Senha" /><br />
            {errors.senha && <><span>A senha é obrigatória</span><br /></>}
            <button type="submit">Enviar</button>
        </form>
    )
}