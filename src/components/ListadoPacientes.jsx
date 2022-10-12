import Paciente from "./Paciente"

function ListadoPacientes({pacientes}) {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center text-slate-700">Listado Pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">
              Administra tus {' '}
              <span className="text-slate-400 font-bold">Pacientes y Citas</span>
          </p>

          { pacientes.map( (paciente) =>(
            <Paciente
            key={paciente.id}
            paciente={paciente}
            />
            ))} 
            
        </>

      ): (

        <>
          <h2 className="font-black text-3xl text-center text-slate-700">No hay pacientes</h2>
          <p className="text-lg text-center mt-5 mb-10">Comienza agregando pacientes {' '}
          <span className="text-slate-400 font-bold">y apareceran en este lugar</span>

          </p>
        </>
      )}
        
        

    </div>
  )
}

export default ListadoPacientes