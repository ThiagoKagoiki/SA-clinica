import './App.css'
import { PrivateRoute } from './Componentes/PrivateRoute'
import { AuthProvider } from './context/AuthContext'
import { Cadastro } from './Pages/Cadastro'
import { GradeMedico } from './Pages/GradeMedico'
import { GradeUsuario } from './Pages/GradeUsuario'
import { Login } from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Cadastro/>}/>
            <Route path='/login' element={<Login/>}/>

            <Route path='/' element={
              <PrivateRoute>

                <GradeMedico/>

              </PrivateRoute>
            }/>

            <Route path='/' element={
              <PrivateRoute>

                <GradeUsuario/>

              </PrivateRoute>
            }/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
