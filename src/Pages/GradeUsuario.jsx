import React from "react";
import './GradeUsuario.css'

export const GradeUsuario = () => {

  return (

    <div className="grid">
      <h1>Minhas Consultas</h1>
      {/* {consultas.map((consulta) => (
        <div className="consulta-item" key={consulta.id}>
          <div className="consulta-item-header">
            <div className="consulta-item-info">
              <h3 className="consulta-item-title">DR. {consulta.medico}</h3>
              <div className="consulta-item-details">
                <p><span className="font-medium">Horário:</span> {consulta.horario}</p>
                <p><span className="font-medium">Paciente:</span> {consulta.emailUser}</p>
                <p><span className="font-medium">N°:</span> {consulta.id}</p>
              </div>
            </div>
            <div className="consulta-actions">
              <button className="action-button-red" onClick={() => removerConsulta(consulta.id)}>Deletar</button>
            </div>
          </div>
        </div>
      ))} */}
    </div>
  );
}
