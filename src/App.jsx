import { useEffect, useState } from 'react';
import { Formulario } from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';
import Header from './components/header';

function App() {
  const pacientesInicial = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(pacientesInicial);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (pacient) => pacient.id !== id,
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-14">
      <Header numeros={1} />
      <div className="mt-12 px-12 md:flex">
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
    </div>
  );
}

export default App;
