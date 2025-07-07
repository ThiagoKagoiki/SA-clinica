import React, { useState } from "react";

export const MenuMedico = ({medico, setMedico}) => {


    const handleOption = (e) => {
        const value = e.target.value
        setMedico(value)
    }

    return(
        <div>
            <select className="opcoes" value={medico} onChange={handleOption}>
                <option value="">Médico</option>
                <option value="Raul Maui">Raul Maui</option>
                <option value="Leonardo Dreher">Leonardo Dreher</option>
                <option value="Thiago Dev">Thiago Dev</option>
            </select>
        </div>
    )
}