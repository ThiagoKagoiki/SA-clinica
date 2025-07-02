import React, { useEffect, useState } from 'react';
import './GradeMedico.css'
import { adicionarConsulta, deletarConsulta, editarConsulta, verConsulta } from '../services/api';
import { MenuMedico } from '../Componentes/MenuMedico';
import { MenuHorario } from '../Componentes/MenuHorario';

export const GradeMedico = () => {

  const [horario, setHorario] = useState('')
  const [medico, setMedico] = useState('')
  const [emailUser, setEmailUser] = useState('')
  const [consultas, setConsultas] = useState([])
  // const [editandoId, setEditandoId] = useState(null);

  const [idEdit, setIdEdit] = useState('');
  const [horarioEdit, setHorarioEdit] = useState('');
  const [medicoEdit, setMedicoEdit] = useState('');
  const [emailUserEdit, setEmailUserEdit] = useState('');


  const carregarConsultas = async () => {
    try {
      const resposta = await verConsulta();
      setConsultas(resposta.data);
    } catch (error) {
      console.error("erro ao carregar consultas: ", error);
    }
  };

  useEffect(() => {
    carregarConsultas()
  }, [])


  const handlesubmit = async (e) => {
    e.preventDefault()
    if (!horario || !medico || !emailUser) {
      alert("Preencha todos os campos do formulário para adicionar uma consulta")
      return
    }

    const dados = { horario, medico, emailUser }
    console.log("#######TIPO#######", dados)

    try {
      const resposta = await adicionarConsulta(dados)
      console.log(resposta.data)
      setHorario('')
      setMedico('')
      setEmailUser('')
    } catch (error) {
      console.error("Erro ao registrar consulta: ", error.response ? error.response.data : error.message)
      alert("Erro ao adicionar consulta")
      console.log("erro: ", error)
    }
  }

  const removerConsulta = async (id) => {
    try {
      const resposta = await deletarConsulta(id)
      console.log(resposta.data)
      setConsultas(prev => prev.filter(consulta => consulta.id !== id));
    } catch (error) {
      console.error("Erro ao deletar consulta: ", error.response ? error.response.data : error.message)
      alert("Erro ao deletar consulta")
      console.log(error)
    }
  }

  const salvarEdicao = async (e) => {
    e.preventDefault()
    if (!idEdit || !horarioEdit || !medicoEdit || !emailUserEdit) {
      alert("Preencha todos os campos para editar uma consulta");
      return;
    }

    try {
      const dados = {
        id: idEdit,
        horario: horarioEdit,
        medico: medicoEdit,
        emailUser: emailUserEdit
      }
      await editarConsulta(idEdit, dados)
      // console.log(resposta.data)
      alert("Consulta editada com sucesso!");
      setIdEdit('');
      setHorarioEdit('');
      setMedicoEdit('');
      setEmailUserEdit('');
      carregarConsultas()
    } catch (error) {
      console.error("ERRO COMPLETO:", error);
      console.error("ERRO RESPONSE:", error.response);
      console.error("ERRO DATA:", error.response?.data);
      console.error("ERRO STATUS:", error.response?.status);
      alert("Erro ao editar consulta")
      console.log(error)
    }
  }



  return (
    <div className="container">
      <div className="wrapper">
        <div className="card">
          <div className="card-header">
            <h1 className="card-title">Consultas Médicas</h1>
            <div className="forms-container">
              <div className="form-card">
                <h2>Adicionar Consulta</h2>
                <form onSubmit={handlesubmit} className='form'>
                  <MenuHorario horario={horario} setHorario={setHorario} />
                  <MenuMedico medico={medico} setMedico={setMedico} />
                  <input
                    type="text"
                    placeholder="Email do Paciente"
                    value={emailUser}
                    onChange={(e) => setEmailUser(e.target.value)}
                  />
                  <button className="submit-button" type="submit">Adicionar Consulta</button>
                </form>
              </div>

              <div className="form-card">
                <h2>Editar Consulta</h2>
                <form onSubmit={salvarEdicao} className='form'>
                  <input
                    type="number"
                    placeholder="ID da Consulta"
                    value={idEdit}
                    onChange={(e) => setIdEdit(e.target.value)}
                  />
                  <MenuHorario horario={horarioEdit} setHorario={setHorarioEdit} />
                  <MenuMedico medico={medicoEdit} setMedico={setMedicoEdit} />
                  <input
                    type="text"
                    placeholder="Email do Paciente"
                    value={emailUserEdit}
                    onChange={(e) => setEmailUserEdit(e.target.value)}
                  />
                  <button className="submit-button" type="submit">Salvar Alterações</button>
                </form>
              </div>
            </div>
          </div>

          <div className="grid">
            {consultas.map((consulta) => (
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
            ))}
          </div>


        </div>
      </div>
    </div>
  );
}
