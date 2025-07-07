import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const saveUser = localStorage.getItem('user')
        return saveUser && saveUser !== 'undefined' ? JSON.parse(saveUser) : null
    })
    const [token, setToken] = useState(() => localStorage.getItem(('token') || ''))

    useEffect(() => {
        if(token){
            localStorage.setItem('token', token)
        }else{
            localStorage.removeItem('token')
        }
    }, [token])

    useEffect(() => {
        if(user){
            localStorage.setItem('user', JSON.stringify(user))
        }else{
            localStorage.removeItem('user')
        }
    }, [user])

    const login = (userData, token) => {
        setUser(userData)
        setToken(token)
    }

    const logout = () => {
        setUser(null)
        setToken('')
    }

    return(
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}