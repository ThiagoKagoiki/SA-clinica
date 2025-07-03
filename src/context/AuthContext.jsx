import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(() => {
        const saveUser = localStorage.getItem('user')
        return saveUser && saveUser !== 'undefined' ? JSON.parse(saveUser) : null
    })
    const [token, setToken] = useState(() => localStorage.getItem('token' || ''))

    useEffect(() => {
        if(token){
            localStorage.setItem('token', token)
        }else{
            localStorage.removeItem('token')
        }
    }, [token])

    const login = (userData, token) => {
        setUser(userData)
        setToken(token)
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null)
        setToken('')
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }

    return(
        <AuthContext.Provider value={{user, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}