import React, { useState } from "react";
import { Layout } from "../Componentes/Layout";
import './Cadastro.css'
import { MenuDrop } from "../Componentes/MenuDrop";
import { registrarUsuario } from "../services/api";
import { useNavigate } from "react-router-dom";

export const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cargo, setCargo] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!nome || !email || !senha || !cargo) {
            alert("Por favor, preencha todos os campos.");
            return;
        }
        const dados = {nome, email, senha, cargo}
        console.log("#### TIPO DE DADO #### ", dados)
        try {
            const resposta = await registrarUsuario(dados);
            console.log(resposta.data); // Exibe a resposta da API
            setNome('')
            setEmail('')
            setSenha('')
            setCargo('')
            if(cargo === "paciente"){
                navigate('/user')
            }else if(cargo === "admin"){
                navigate('/medico')
            }
        } catch (error) {
            console.error("Erro ao registrar usuário:", error.response ? error.response.data : error.message);
            alert("Erro ao registrar usuário. Verifique os dados e tente novamente.");
            console.log("DEu erro", error)
        }
    }

    const irLogin = () => {
        navigate('/login')
    }

    return(
        <div>
            <Layout/>
            <form onSubmit={handleSubmit} className="forms-cadastro">
                <h1>Cadastro</h1>
                <input type="text" placeholder="Usuário" className="input-cadastro" value={nome} onChange={e => setNome(e.target.value)}/>
                <input type="text" placeholder="Email" className="input-cadastro" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" className="input-cadastro" value={senha} onChange={e => setSenha(e.target.value)}/>
                <MenuDrop cargo={cargo} setCargo={setCargo}/>
                <button className="btn-cadastro">Cadastrar</button>
            </form>
            <button className="btn-cadastro-login" onClick={irLogin}>Fazer login</button>
        </div>
    )
}