import React, { useEffect, useState } from "react";
import './Grades.css'
import { verConsultaEmail } from "../services/api";

export const GradeUsuario = () => {

  const [consultas, setConsultas] = useState([])

  useEffect(() => {

    const carregarConsultas = async () => {
      try {
        const resposta = await verConsultaEmail();
        setConsultas(resposta.data);
      } catch (error) {
        console.error("erro ao carregar consultas: ", error);
      }
    };
  
    carregarConsultas()
  }, [])

  return (
    <div className="container">
      <h2>Minhas Consultas</h2>
      {consultas.length === 0 ? (
        <p>Você não tem consultas agendadas.</p>
      ) : (
        <div className="grid">
          {consultas.map((consulta) => (
            <div className="consulta-item" key={consulta.id}>
              <div className="consulta-item-header">
                <div className="consulta-item-info">
                  <h3 className="consulta-item-title">DR. {consulta.medico}</h3>
                  <div className="consulta-item-details">
                    <p><span className="font-medium">Horário:</span> {consulta.horario}</p>
                    <p><span className="font-medium">N°:</span> {consulta.id}</p>
                  </div>
                </div>
                <div className="consulta-actions">
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
