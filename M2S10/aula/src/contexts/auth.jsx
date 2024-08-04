import { createContext, useContext, useState } from "react";
//import { api } from '../utils/api'

export const AuthContext = createContext({
    user: null, // pode ser null ou {}
    signIn: async () => {}, // função entrar na aplicação
    signOut: () => {} // função para "remover" o estado do usuario da aplicar 
})
// simular uma chamada para api => fetch
async function apiAuth(url, data) {
    console.log(url, data)
    return new Promise(resolve => setTimeout(resolve, 3000))
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLoggedStorage = localStorage.getItem('@lab365:userLogged')

        if(userLoggedStorage) {
            return JSON.parse(userLoggedStorage)
        }

        return null
    })

    //async function signIn({ email, password }) {
    async function signIn(data) {
        // console.log(email, password)
        // console.log('console no contexto', data)
        // exemplo
        if(data.email !== "fulano@teste.com.br" || data.password !== "123") {
            throw new Error("Email/Senha invalida")
        }
        
        // // Exemplo com fetch, json-server e utils/api
        // const response = await api(`/users?email=${email}&senha=${password}`)
        // const data = await Response.json() // [] ou [{...}]

        // if(data.length > 0) {
        //     const usuario = data[0]
        //     setUser(usuario)
        //     localStorage.setItem('@lab365:userLogged', JSON.stringify(usuario))
        //     return true
        // }

        // // early return
        // return false

        await apiAuth('https://api.lab365.com.br/sessions', data) //Assim só como exemplo, por isso não estamos pegando os valores da response
        
        const userResponse = {
            id: Date.now(),
            first_name: "Fulano de tal",
            email: data.email,
        }

        setUser(userResponse)
        localStorage.setItem('@lab365:userLogged', JSON.stringify(userResponse))
        localStorage.setItem('@lab365:token', Date.now())
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@lab365:userLogged')
        localStorage.removeItem('@lab365:token')
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}
// custom hook
export function useAuth() {
    const contexto = useContext(AuthContext)

    return contexto
}