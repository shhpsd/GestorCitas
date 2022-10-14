
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import {Toaster,toast} from 'react-hot-toast';

import { useState, useEffect } from 'react';

function App() {

  const [pacientes, setPacientes] = useState(() => JSON.parse(localStorage.getItem('pacientes')) || []);;
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  },[pacientes])

  const eliminarPaciente = (id) =>{
    
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);

    toast.error('Paciente Eliminado');
    setPacientes(pacientesActualizados);
  }
  return (
    <div className='container p-10 lg:p-20 mx-auto h-screen'>
      <Header/>
      <div className='mt-12 md:flex'>
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      <Toaster position="bottom-right"/>
    </div>
  )
}

export default App
