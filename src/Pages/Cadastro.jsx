import React, { useState } from "react";
import { Layout } from "../Componentes/Layout";
import './Cadastro.css'
import { MenuDrop } from "../Componentes/MenuDrop";
import { registrarUsuario } from "../services/api";

export const Cadastro = () => {

    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cargo, setCargo] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        const dados = {nome, email, senha}
        const resposta = await registrarUsuario(dados)
        console.log(resposta)
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
        </div>
    )
}