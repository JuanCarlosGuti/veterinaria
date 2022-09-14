import { useState,  useEffect } from "react"
import Error from "./Error";




const Formulario = ({setPacientes,pacientes,paciente})=> {




const [nombre, setNombre] = useState('');
const [propietario, setPropietario] = useState('');
const [email, setEmail] = useState('');
const [alta, setAlta] = useState('');
const [sintomas, setSintomas] = useState('');
const [error, setError] = useState(false)



useEffect(() => {
  
if(Object.keys(paciente).length>0){
 setNombre(paciente.nombre)
 setPropietario(paciente.propietario)
 setEmail(paciente.email)
 setAlta(paciente.alta)
 setSintomas(paciente.sintomas)
 
 
}

}, [paciente])


const generarId= () =>{
    
    const fecha = Date.now().toString(36)


    return fecha
}

const handletSubmit =(e)=>{
    e.preventDefault();
if([nombre,propietario,email,alta,sintomas].includes('')){
   setError(true)
   return
}  setError(false)


    const objetoPaciente={
        nombre,
        propietario,
        email,
        alta,
        sintomas,
        
    }

    if(paciente.id){
        //editando registro
        objetoPaciente.id =paciente.id;
        const pacientesActualizados = pacientes.map(pacienteState =>pacienteState.id===paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados)


    }else{
        objetoPaciente.id =generarId();
        setPacientes([objetoPaciente,...pacientes])

    }




   setNombre('')
   setPropietario('')
   setEmail('')
   setAlta('')
   setSintomas('')

    
}



  return (
    <div className=" md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center ">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center font-bold ">Añade Pacientes {' '}
        <span className="text-indigo-600 font-bold ">y Administralos</span></p>
        <form action="" 
        onSubmit={handletSubmit}
        className=" bg-white shadow-md rounded-lg py-10 px-5 mt-10 mb-12 mx-5" >
            {error && <Error mensaje={'todos los campos son obligatorios'}/>}
            <div className=" mb-5">
                <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">Nombre mascota </label>
                <input 
                
                id="mascota"
                type="text"
                placeholder="nombre de la mascota"
                className="border-2 mt-2 w-full p-2 placeholder-gray-400 rounded-md"
                value={nombre}
                onChange={(e)=> setNombre(e.target.value)}

                 />
            </div>
            <div className=" mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">Nombre del propietario</label>
                <input 
                id="propietario"
                type="text"
                placeholder="nombre del propietario"
                className="border-2 mt-2 w-full p-2 placeholder-gray-200 rounded-md"
                value={propietario}
                onChange={(e)=> setPropietario(e.target.value)}

                 />
            </div>
            <div className=" mb-5">
                <label htmlFor="E-mail" className="block text-gray-700 uppercase font-bold">Email</label>
                <input 
                id="E-mail"
                type="email"
                placeholder="E-mail"
                className="border-2 mt-2 w-full p-2 placeholder-gray-200 rounded-md"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}

                 />
            </div>
            <div className=" mb-5">
                <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Fecha de alta</label>
                <input 
                id="alta"
                type="date"
            
                className="border-2 mt-2 w-full p-2 placeholder-gray-200 rounded-md"
                value={alta}
                onChange={(e)=> setAlta(e.target.value)}

                 />
            </div>
            <div className=" mb-5">
                <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Síntomas</label>
               <textarea
               id="sintomas"
               className="border-2 mt-2 w-full p-2 placeholder-gray-200 rounded-md"
               placeholder="describe los síntomas"
               value={sintomas}
               onChange={(e)=> setSintomas(e.target.value)}
                />
             
            </div>
            <button
            type="submit"
            className=" bg-indigo-600 w-full py-3 text-white p-3 uppercase rounded-md font-bold hover:bg-indigo-800 transition-all"
            > {paciente.id?'Editar paciente':'Agregar paciente'}</button>
            
        </form>
    
    </div>
    
  )
}

export default Formulario