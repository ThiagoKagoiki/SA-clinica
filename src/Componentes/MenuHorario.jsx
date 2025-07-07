import React, { useState } from "react";

export const MenuHorario = ({horario, setHorario}) => {


    const handleOption = (e) => {
        const value = e.target.value
        setHorario(value)
    }

    return(
        <div>
            <select className="opcoes" value={horario} onChange={handleOption}>
                <option value="">Horário</option>
                <option value="10:00">10:00</option>
                <option value="11:00">11:00</option>
                <option value="12:00">12:00</option>
                <option value="13:00">13:00</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
            </select>
        </div>
    )
}