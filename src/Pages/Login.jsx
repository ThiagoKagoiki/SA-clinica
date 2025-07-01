import React from "react";
import { Layout } from "../Componentes/Layout";
import './Login.css'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        const dados = { email, senha }
        console.log("#### TIPO DE DADO #### ", dados)
        try {
            const resposta = await registrarUsuario(dados);
            console.log(resposta.data); // Exibe a resposta da API
        } catch (error) {
            console.error("Erro ao registrar usuário:", error.response ? error.response.data : error.message);
            alert("Erro ao registrar usuário. Verifique os dados e tente novamente.");
            console.log("DEu erro", error)
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