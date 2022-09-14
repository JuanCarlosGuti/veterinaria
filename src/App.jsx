import { useEffect, useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPaciente from "./components/ListadoPaciente"




function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [paciente, setPaciente] = useState({})

 
  
  
  useEffect(() => {
    
  localStorage.setItem('pacientes', JSON.stringify(pacientes));
    
  }, [pacientes])
  

  
  const eliminarPaciente = (id)=>{
    const pacientesActualizados = pacientes.filter(paciente=>paciente.id !==id)
    setPacientes(pacientesActualizados)
  }


  return (

    <div className=" container mx-auto mt-20">


    <Header    />
    <div className=" mt-12 md:flex mx-10">
        <Formulario 
        
        setPacientes ={setPacientes}
        pacientes={pacientes}
        paciente={paciente}

        />
        <ListadoPaciente
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />

    </div>


    </div>
  )
}

export default App
