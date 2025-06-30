import React from "react";
import './GradeUsuario.css'

export const GradeUsuario = () => {
  const diasDoMes = Array.from({ length: 30 }, (_, i) => i + 1); // Dias de 1 a 30
  const colunas = 7; // Como um calendário

  function handleClick(dia) {
    setDiaSelecionado(dia);
    setPage("agenda");
  }

  return (
    <div className="container-calendario">
      <h2 className="calendario-titulo">Selecione um Dia</h2>

      <div className="dias">
        {diasDoMes.map((dia) => (
          <button className="btn-calendario">
            {dia}
          </button>
        ))}
      </div>
    </div>
  );
}
