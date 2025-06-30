import React, { useState } from "react";
import './MenuDrop.css'

export const MenuDrop = ({cargo, setCargo}) => {


    const handleOption = (e) => {
        const value = e.target.value
        setCargo(value)
        console.log('Valor selecionado:', value);
    }

    return(
        <div>
            <select className="opcoes" value={cargo} onChange={handleOption}>
                <option value="">Cargos</option>
                <option value="paciente">Paciente</option>
                <option value="admin">Admin</option>
            </select>
        </div>
    )
}