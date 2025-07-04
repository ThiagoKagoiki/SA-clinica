import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000',
  headers:{
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const registrarUsuario = (dados) => API.post('/registrar', dados);
export const loginUsuario = async(dados) =>
  {
    const response = await API.post('/login', dados) 
    return response.data
  };
export const acessarPainel = () => API.get('/painel');
export const acessarAdmin = () => API.get('/admin');

export const adicionarConsulta = (dados) => API.post('/addConsulta', dados)
export const verConsulta = () => API.get('/consultas')
export const deletarConsulta = (id) => API.delete(`/removerConsulta/${id}`)
export const editarConsulta = (id, dados) => API.put(`
/editarConsulta`, dados)

export const verConsultaEmail = (email) => API.get(`/minhasConsultas/${email}`)