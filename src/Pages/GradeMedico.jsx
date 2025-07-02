import React, { useState } from 'react';
import './GradeMedico.css'

export const GradeMedico = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Consultas Médicas</h1>
            <button className="add-button">
              Adicionar Consulta
            </button>
          </div>

          <div className="grid">
            <div className="consulta-item">
              <div className="consulta-item-header">
                <div className="consulta-item-info">
                  <h3 className="consulta-item-title">Dr. João Silva - Cardiologia</h3>
                  <div className="consulta-item-details">
                    <p><span className="font-medium">Data:</span> 15/01/2024 às 14:30</p>
                    <p><span className="font-medium">Paciente:</span> Maria Santos</p>
                    <p><span className="font-medium">Status:</span> <span className="consulta-status">Agendada</span></p>
                  </div>
                </div>
                <div className="consulta-actions">
                  <button className="action-button-yellow"></button>
                  <button className="action-button-red"></button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
