import React from 'react';
import './TablaDepartamentos.css';

const TablaDepartamentos = ({ datos }) => {
  // Función para determinar el estado del departamento
  const getEstadoDepartamento = (depto) => {
    if (depto.ausentismo <= 6 && depto.tardanza <= 8) return { texto: 'Bueno', clase: 'estado-bueno' };
    if (depto.ausentismo <= 9 && depto.tardanza <= 12) return { texto: 'Alerta', clase: 'estado-alerta' };
    return { texto: 'Crítico', clase: 'estado-critico' };
  };

  return (
    <div className="tabla-departamentos-container">
      <div className="tabla-departamentos-title">Desempeño por Departamento</div>
      
      <table className="tabla-departamentos">
        <thead>
          <tr>
            <th>Departamento</th>
            <th>Ausentismo</th>
            <th>Tardanza</th>
            <th>Empleados</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((depto, index) => {
            const estado = getEstadoDepartamento(depto);
            return (
              <tr key={index}>
                <td className="departamento-nombre">{depto.departamento}</td>
                <td className="departamento-ausentismo">{depto.ausentismo}%</td>
                <td className="departamento-tardanza">{depto.tardanza}min</td>
                <td className="departamento-empleados">{depto.empleados}</td>
                <td>
                  <span className={`estado-badge ${estado.clase}`}>
                    {estado.texto}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablaDepartamentos;