

function Paciente({paciente}) {

    const {name,propietario,email,data,sintomas} = paciente
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-slate-600 uppercase">Nombre: {' '}
                <span className="font-normal normal-case">{name} </span>
            </p>
            <p className="font-bold mb-3 text-slate-600 uppercase">Propietario: {' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-slate-600 uppercase">Correo: {' '}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className="font-bold mb-3 text-slate-600 uppercase">Alta: {' '}
                <span className="font-normal normal-case">{data}</span>
            </p>
            <p className="font-bold mb-3 text-slate-600 uppercase">Síntomas: {' '}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>
    </div>
  )
}


export default Paciente;