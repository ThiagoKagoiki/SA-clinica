import React, { useState } from 'react';
import './GradeMedico.css'
import { adicionarConsulta } from '../services/api';

export const GradeMedico = () => {

  const [horario, setHorario] = useState('')
  const [medico, setMedico] = useState('')
  const [emailUser, setEmailUser] = useState('')

  const handlesubmit = async(e) => {
    e.preventDefault()
    if(!horario || !medico || !emailUser){
      alert("Preencha todos os campos do formulário para adicionar uma consulta")
      return
    }

    const dados = {horario, medico, emailUser}
    console.log("#######TIPO#######", dados)

    try{
      const resposta = await adicionarConsulta(dados)
      console.log(resposta.data)
      setHorario('')
      setMedico('')
      setEmailUser('')
    }catch(error){
      console.error("Erro ao registrar consulta: ", error.response ? error.response.data : error.message)
      alert("Erro ao adicionar consulta")
      console.log("erro: ", error)
    }

  }

  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Consultas Médicas</h1>
            <form onSubmit={handlesubmit} className='addForm'>
              <input type="text" placeholder='horario' value={horario} onChange={e => setHorario(e.target.value)}/>
              <input type="text" placeholder='médico' value={medico} onChange={e => setMedico(e.target.value)}/>
              <input type="text" placeholder='email do paciente' value={emailUser} onChange={e => setEmailUser(e.target.value)}/>
              <button className="add-button">Adicionar Consulta</button>
            </form>
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
