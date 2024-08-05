import { createContext, useState, useContext } from 'react'

export const AuthContext = createContext({
    user: null,
    signIn: async () => {},
    signOut: () => {}
})


export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLoggedStorage = localStorage.getItem('@exercicio:userLogged')
        if (userLoggedStorage) {
            return JSON.parse(userLoggedStorage)
        }

        return null
    })

    //username: 'emilys',
    //password: 'emilyspass'
    async function signIn({username, password}) {
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
        const data = await response.json()
        
        if (data.username) {
            const usuario = data
            setUser(usuario)
            localStorage.setItem('@exercicio:userLogged', JSON.stringify(usuario))
            return true
        }
        return false
    }

    function signOut() {
        setUser(null)
        localStorage.removeItem('@exercicio:userLogged')
    }

    return <AuthContext.Provider value={{ user, signIn, signOut }}>{children}</AuthContext.Provider>
}

export function useAuth() {
    const contexto = useContext(AuthContext)

    return contexto
}