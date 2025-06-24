import React from "react";
import './GradeUsuario.css'
import { Layout } from "../Componentes/Layout";

export default function GradeUsuario({ setPage, setDiaSelecionado }) {
    const diasDoMes = Array.from({ length: 30 }, (_, i) => i + 1);
  
    function handleClick(dia) {
      setDiaSelecionado(dia);
      setPage("agenda");
    }
  
    return (
      <div>
      <Layout/>
      <div className="calendario-adm">
        <h2 className="select-dia">Selecione um Dia</h2>
  
        <div className="calendario">
          {diasDoMes.map((dia) => (
            <button
              key={dia}
              onClick={() => handleClick(dia)}
              className="dias"
            >
              {dia}
            </button>
          ))}
        </div>
      </div>
      </div>
    );
  }