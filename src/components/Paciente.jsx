
function Paciente({paciente, setPaciente, eliminarPaciente}) {
    const {name,propietario,email,telefono,data,sintomas,id} = paciente
    
    // FUNCION DE CONFIRMACION
    const handleEliminar = () =>{
        const respuesta = confirm("Deseas eliminar este paciente?");
        if (respuesta) {
            eliminarPaciente(id);    
        }
        
    }
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-slate-600 uppercase">Nombre: {' '}
                <span className="font-normal normal-case">{name}</span>
            </p>
            <p className="font-bold mb-3 text-slate-600 uppercase">Propietario: {' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-slate-600 uppercase">Correo: {' '}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-slate-600 uppercase">Teléfono: {' '}
                <span className="font-normal normal-case">{telefono}</span>
            </p>
            <p className="font-bold mb-3 text-slate-600 uppercase">Fecha Alta: {' '}
                <span className="font-normal normal-case">{data}</span>
            </p>
            <p className="font-bold mb-3 text-slate-600 uppercase">Síntomas: {' '}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
            <div className="flex justify-between mt-10">
                <button type="button" 
                className="py-2 lg:px-10 px-3 bg-slate-600 hover:bg-slate-500 text-white font-bold uppercase rounded-lg"
                onClick={() => setPaciente(paciente)}
                >Editar
                </button>
                <button type="button"
                className="py-2 lg:px-10 px-3 bg-red-600 hover:bg-red-500 text-white font-bold uppercase rounded-lg"
                onClick={handleEliminar}
                >Eliminar
                </button>
            </div>
    </div>
  )
}


export default Paciente;