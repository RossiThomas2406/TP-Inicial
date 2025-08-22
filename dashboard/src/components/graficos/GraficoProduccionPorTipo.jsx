import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './GraficoProduccionPorTipo.css';

const GraficoProduccionPorTipo = ({ produccionPorTipo }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Verificar al montar el componente
    checkScreenSize();

    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkScreenSize);

    // Limpiar listener al desmontar
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="produccion-container">
      <h3 className='titulo'>Producción por Tipo de Producto</h3>
      
      {isMobile ? (
        // Vista de tabla para móviles
        <div className="tabla-produccion">
          <div className="tabla-header">
            <span>Tipo de Producto</span>
            <span>Producción</span>
          </div>
          {produccionPorTipo.map((item, index) => (
            <div key={index} className="tabla-fila">
              <span className="tipo-nombre">{item.tipo}</span>
              <span className="tipo-produccion">{item.produccion.toLocaleString()}</span>
            </div>
          ))}
        </div>
      ) : (
        // Vista de gráfico para pantallas grandes
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={produccionPorTipo}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="tipo" type="category" width={120} />
            <Tooltip formatter={(value) => value.toLocaleString()} />
            <Bar dataKey="produccion" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GraficoProduccionPorTipo;