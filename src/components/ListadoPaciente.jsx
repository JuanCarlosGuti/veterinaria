
import Paciente from "./Paciente"



function ListadoPaciente({pacientes, setPaciente,eliminarPaciente}) {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      
       <h2 className=" text-3xl text-center font-bold">{pacientes.length>0?'Listado de Pacientes':'por favor agregue pacientes'}</h2>
        <p className="text-xl mt-5 mb-10 text-center">
          Administra tus {' '}
          <span className=" text-indigo-600 font-bold">{pacientes.length>0?'Pacientes y Citas ':'Aquí apareceran sus pacientes'}</span>
        </p>
        {pacientes.map(paciente=>(
          <Paciente key={paciente.id}
          paciente={paciente} 
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          />
          
        ))}
        
      
    
      
      
    </div>
  )
}

export default ListadoPaciente