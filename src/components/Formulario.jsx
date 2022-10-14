import { useState,useEffect } from 'react';
import Error from './Error'
import {toast} from 'react-hot-toast';
function Formulario({pacientes,setPacientes,paciente,setPaciente}) {

  const [name, setName] = useState('');
  const [propietario, setNamePropietario] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [data,setData] = useState('');
  const [sintomas,setSintomas] = useState('');
  
  const [error,setError] = useState(false);
  
    useEffect(() => {
        if(Object.keys(paciente).length > 0){
          setName(paciente.name);
          setNamePropietario(paciente.propietario);
          setEmail(paciente.email);
          setTelefono(paciente.telefono);
          setData(paciente.data);
          setSintomas(paciente.sintomas); 
        }
      },[paciente]);

  const generarId=()=>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    if([name,propietario,email,telefono,data,sintomas].includes('')){
      
      setError(true)
      return
    }
      setError(false)
      
      // OBJETO PACIENTE
      const objetoPaciente = {
        name,
        propietario,
        email,
        telefono,
        data,
        sintomas,
        
      }

      if(paciente.id){

        //EDITANDO EL REGISTRO
       objetoPaciente.id = paciente.id;

        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === 
        paciente.id ? objetoPaciente : pacienteState)

        setPacientes(pacientesActualizados)
        toast.success('Paciente Actualizado');
        setPaciente({});

      }
      else{
        // NUEVO REGISTRO
        objetoPaciente.id = generarId();
        setPacientes([...pacientes, objetoPaciente])
        toast.success("Paciente Añadido");
        
      }
      

      //REINICIAR EL FORM 
      setName('')
      setNamePropietario('')
      setEmail('')
      setTelefono('')
      setData('')
      setSintomas('')
     
    
  }
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-slate-700 text-3xl text-center">Seguimiento</h2>

      <p className="text-lg mt-5 text-center mb-10">Añade Pacientes y {''} 
        <span className="text-slate-600 font-bold">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && <Error mensaje='Todos los campos son obligatorios'/>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre mascota
            </label>
          <input id="mascota" type="text" placeholder="Nombre de la mascota" className="w-full border-2 p-2 mt-2 rounded-md placeholder-slate-400"
          value={name}
          onChange = { (e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
            </label>
          <input  id="propietario" type="text" placeholder="Nombre del propietario" className="w-full border-2 p-2 mt-2 rounded-md placeholder-slate-400"
          value={propietario}
          onChange = { (e) => setNamePropietario(e.target.value)}
          />
        </div>
        <div className="mb-5 relative w-full mr-3 revue-form-group">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Correo Electronico
            </label>
            
          <input id="email" type="email" placeholder="correoelectronico@gmail.com" className="w-full border-2 p-2 mt-2 rounded-md placeholder-slate-400"
          value={email}
          onChange = { (e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5 relative w-full mr-3 revue-form-group">
          <label htmlFor="telefono" className="block text-gray-700 uppercase font-bold">
            Telefono
            </label>
            
          <input id="telefono" type="text" placeholder="000 000 000" className="w-full border-2 p-2 mt-2 rounded-md placeholder-slate-400"
          value={telefono}
          onChange = { (e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
            </label>
          <input  id="alta" type="date" className="w-full border-2 p-2 mt-2 rounded-md placeholder-slate-400"
          value={data}
          onChange = { (e) => setData(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Síntomas
            </label>
          <textarea id="sintomas" type="text" className="w-full border-2 p-2 mt-2 rounded-md placeholder-slate-400" placeholder="Describe los sintomas"
          value={sintomas}
          onChange = { (e) => setSintomas(e.target.value)}
          />
        </div>

        <input type="submit" className="bg-slate-600 w-full text-white hover:bg-slate-500 cursor-pointer uppercase p-3 transition-all" 
        value={paciente.id ? "Editar paciente" : "Agregar paciente"} />
      </form>
    </div>
  )
}

export default Formulario;