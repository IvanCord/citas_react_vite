import React, { useEffect } from 'react';
import { Paciente } from './Paciente';

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  /*
  useEffect(() => {
    console.log('Nuevo paciente agregado');
  }, [pacientes]);
  */

  return (
    <div className="md:w-1/2 lg:w-3/5 mb-14 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-5">
            Administra tus{' '}
            <spam className="text-indigo-600 font-bold">Pacientes y Citas</spam>
          </p>
          {pacientes.map((paciente) => {
            return (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 text-center mb-5">
            Comienza agregando pacientes{' '}
            <spam className="text-indigo-600 font-bold">
              y apareceran en este lugar
            </spam>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
