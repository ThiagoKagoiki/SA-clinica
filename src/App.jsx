import './App.css'
import { Cadastro } from './Pages/Cadastro'
import { GradeMedico } from './Pages/GradeMedico'
import { GradeUsuario } from './Pages/GradeUsuario'
import { Login } from './Pages/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Cadastro/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/gradeUser' element={<GradeUsuario/>}/>
          <Route path='/gradeMed' element={<GradeMedico/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
