import React, { useState } from "react";
import './MenuDrop.css'

export const MenuDrop = ({position, setPosition}) => {


    const handleOption = (e) => {
        const value = e.target.value
        setPosition(value)
        console.log('Valor selecionado:', value);
    }

    return(
        <div>
            <select name="" className="opcoes" value={position} onChange={handleOption}>
                <option value="">Cargos</option>
                <option value="cidadao">Paciente</option>
                <option value="cidadao">Admin</option>
            </select>
        </div>
    )
}