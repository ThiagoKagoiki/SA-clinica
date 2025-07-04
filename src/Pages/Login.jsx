import React, { useState } from "react";
import { Layout } from "../Componentes/Layout";
import './Login.css'
import { loginUsuario } from "../services/api";
import { useAuth } from "../hooks/useAuth";
import { MenuDrop } from "../Componentes/MenuDrop";
import { useNavigate } from "react-router-dom";



export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cargo, setCargo] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await loginUsuario({ email, senha, cargo })

            localStorage.setItem('token', data.token);
            localStorage.setItem('userId', data.usuario.id);
            localStorage.setItem('userEmail', data.usuario.email);

            console.log("!!!!!!!!!!!!!!", data)
            // console.log("$$$$$$$$$$$$$$$$$$", data.usuario.email)

            if (!data.usuario || !data.token) {
                throw new Error("Resposta de login incompleta!");
            }

            login(data.usuario, data.token)
            alert("login feito")
            console.log("API resposta bruta:", data);
            if (data.usuario.cargo === "paciente") {
                navigate('/user')
            } else {
                navigate('/medico')
            }
        } catch (error) {
            console.error(error)
            alert("Falha no login")
        }
    }

    return (
        <div>
            <Layout />
            <form onSubmit={handleSubmit} className="forms-login">
                <h1>Login</h1>
                <input type="text" placeholder="Email" className="input-login" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Senha" className="input-login" value={senha} onChange={(e) => setSenha(e.target.value)} />
                <MenuDrop cargo={cargo} setCargo={setCargo} />
                <button className="btn-login">Acessar</button>
            </form>
        </div>
    )
}