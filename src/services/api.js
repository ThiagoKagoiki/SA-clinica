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
export const loginUsuario = (dados) => API.post('/login', dados);
export const acessarPainel = () => API.get('/painel');
export const acessarAdmin = () => API.get('/admin');