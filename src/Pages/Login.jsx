import React, { useState } from "react";
import { Layout } from "../Componentes/Layout";
import './Login.css'
import { loginUsuario } from "../services/api";
import { useAuth } from "../hooks/useAuth";

export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const {login} = useAuth()

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     if (!email || !senha) {
    //         alert("Por favor, preencha todos os campos.");
    //         return;
    //     }
    //     const dados = { email, senha }
    //     console.log("#### TIPO DE DADO #### ", dados)
    //     try {
    //         const resposta = await loginUsuario(dados);
    //         console.log(resposta.data); // Exibe a resposta da API
    //         setEmail('')
    //         setSenha('')
    //     } catch (error) {
    //         console.error("Erro ao registrar usuário:", error.response ? error.response.data : error.message);
    //         alert("Erro ao registrar usuário. Verifique os dados e tente novamente.");
    //         console.log("DEu erro", error)
    //     }
    // }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const data = await loginUsuario({email, senha})
            login(data.usuario, data.token)
            alert("Login bem feito")
        }catch(error){
            console.error(error)
            alert("Falha no login")
        }
    }

    return (
        <div>
            <Layout />
            <form onSubmit={handleSubmit} className="forms-login">
                <h1>Login</h1>
                <input type="text" placeholder="Email" className="input-login" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" className="input-login"  value={senha} onChange={(e) => setSenha(e.target.value)}/>
                <button className="btn-login">Acessar</button>
            </form>
        </div>
    )
}