import React from "react";
import { Layout } from "../Componentes/Layout";
import './Cadastro.css'
import { MenuDrop } from "../Componentes/MenuDrop";

export const Cadastro = () => {
    return(
        <div>
            <Layout/>
            <form action="" className="forms-cadastro">
                <h1>Cadastro</h1>
                <input type="text" placeholder="Usuário" className="input-cadastro"/>
                <input type="text" placeholder="Email" className="input-cadastro"/>
                <input type="password" placeholder="Senha" className="input-cadastro"/>
                <MenuDrop/>
                <button className="btn-cadastro">Cadastrar</button>
            </form>
        </div>
    )
}