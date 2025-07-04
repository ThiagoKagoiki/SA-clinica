import React from "react";
import './GradeUsuario.css'

export const GradeUsuario = () => {

  const consultas = [
  { id: 1, data: '2025-07-05', hora: '14:00', medico: 'Dr. Silva', especialidade: 'Cardiologia' },
  { id: 2, data: '2025-07-10', hora: '09:00', medico: 'Dra. Pereira', especialidade: 'Dermatologia' },
];

  return (
    <div>
      <h2>Minhas Consultas</h2>
      {consultas.length === 0 ? (
        <p>Você não tem consultas agendadas.</p>
      ) : (
        <ul>
          {consultas.map((consulta) => (
            <li key={consulta.id}>
              <strong>Data:</strong> {consulta.data} <br />
              <strong>Hora:</strong> {consulta.hora} <br />
              <strong>Médico:</strong> {consulta.medico} <br />
              <strong>Especialidade:</strong> {consulta.especialidade}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
