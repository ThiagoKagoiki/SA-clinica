import React from "react";
import { Layout } from "../Componentes/Layout";
import './Login.css'

export const Login = () => {
    return(
        <div>
            <Layout/>
            <form action="" className="forms-login">
                <h1>Login</h1>
                <input type="text" placeholder="Email" className="input-login"/>
                <input type="password" placeholder="Senha" className="input-login"/>
                <button className="btn-login">Acessar</button>
            </form>
        </div>
    )
}