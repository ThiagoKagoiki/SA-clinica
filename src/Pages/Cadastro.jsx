import React from "react";
import { Layout } from "../Componentes/Layout";

export const Cadastro = () => {
    return(
        <div>
            <Layout/>
            <form action="">
                <input type="text" placeholder="Usuário"/>
                <input type="text" placeholder="Email"/>
                <input type="text" placeholder="Senha"/>
                <button>Cadastrar</button>
            </form>
        </div>
    )
}