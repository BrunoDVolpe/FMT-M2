import { useForm } from "react-hook-form"
import { useAuth } from "../../contexts/auth"
import { Navigate } from "react-router-dom"
import "./Login.css"

export function Login() {
    const { user, signIn } = useAuth()
    const { register, handleSubmit, formState: {errors} } = useForm()

    async function onSubmit(data) {
        console.log(data)
        await signIn(data)
    }

    return user ?
    (
        // <div>
        //     <p>Usuário logado.</p>
        //     <button onClick={signOut}>Sair</button>
        // </div>
        <Navigate to="/" replace={true} />
    )
    :
    (<div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 50 }}>
        <div className="login-form" style={{width: 350}}>
            <h2>Develop</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('username', { required: true })} className="form-control" placeholder="Username" />
                {errors.username && <span className="form-text text-muted">O username é obrigatório.</span>}
                <input type="password" {...register('password', { required: true })} className="form-control" placeholder="Senha" />
                {errors.password && <span className="form-text text-muted">A idade é obrigatória e deve ser pelo menos 18 anos.</span>}
                <button type="submit">Logar</button>
            </form>
        </div>
    </div>)
}