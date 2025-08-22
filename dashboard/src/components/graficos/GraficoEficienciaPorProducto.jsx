import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList, ReferenceLine } from 'recharts';
import './GraficoEficienciaPorProducto.css';

const GraficoEficienciaPorProducto = ({ eficienciaPorProducto }) => {
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

  // Función para determinar el color según la eficiencia
  const getEfficiencyColor = (value) => {
    if (value >= 100) return '#82CA9D'; // Verde para eficiencia >= 100%
    if (value >= 80) return '#FFC355'; // Amarillo para eficiencia >= 80%
    return '#CC493D'; // Rojo para eficiencia menor a 80%
  };

  return (
    <div className="eficiencia-container">
      <h3 className='titulo'>Eficiencia por Producto (%)</h3>
      
      {isMobile ? (
        // Vista de tabla para móviles
        <div className="tabla-eficiencia">
          <div className="tabla-header">
            <span>Producto</span>
            <span>Eficiencia</span>
          </div>
          {eficienciaPorProducto.map((item, index) => (
            <div 
              key={index} 
              className="tabla-fila"
              style={{ '--color-eficiencia': getEfficiencyColor(item.eficiencia) }}
            >
              <span className="producto-nombre">{item.nombre}</span>
              <span className="producto-eficiencia">{item.eficiencia}%</span>
            </div>
          ))}
          <div className="tabla-referencia">
            <span className="referencia-linea"></span>
            <span className="referencia-texto">Planificado (100%)</span>
          </div>
        </div>
      ) : (
        // Vista de gráfico para pantallas grandes
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            layout="vertical"
            data={eficienciaPorProducto}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 110]} />
            <YAxis dataKey="nombre" type="category" width={120}/>
            <Tooltip formatter={(value) => `${value}%`} />

            {/* Línea de referencia en 100% */}
            <ReferenceLine x={100} stroke="green" strokeDasharray="3 3" label="Planificado (100%)" />
            <Bar dataKey="eficiencia" fill="#8884D8">
              <LabelList dataKey="eficiencia" position="right" formatter={(value) => `${value}%`} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default GraficoEficienciaPorProducto;