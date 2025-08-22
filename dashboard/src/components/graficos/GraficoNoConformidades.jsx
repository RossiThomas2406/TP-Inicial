import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './GraficoNoConformidades.css';

// Datos mockeados
export const datosNoConformidades = [
  { tipo: 'Higiene y Limpieza', cantidad: 15 },
  { tipo: 'Temperatura inadecuada', cantidad: 12 },
  { tipo: 'Embalaje defectuoso', cantidad: 9 },
  { tipo: 'Etiquetado incorrecto', cantidad: 8 },
  { tipo: 'Peso irregular', cantidad: 5 },
  { tipo: 'Color anómalo', cantidad: 4 },
  { tipo: 'Otros', cantidad: 2 }
];

const GraficoNoConformidades = () => {
  // Colores para las barras
  const COLORS = ['#599fdbff', '#3bb49eff', '#ddab3fff', '#FF8042', '#8884D8', '#82CA9D', '#FF6B6B'];

  // Custom tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          <p className="tooltip-value">{`Cantidad: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grafico-no-conformidades">
      <h3 className="grafico-titulo">No Conformidades por Tipo</h3>
      
      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={datosNoConformidades}
          margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis 
            dataKey="tipo" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={70}
          />
          <YAxis 
            label={{ 
              value: 'Cantidad', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle' }
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar 
            dataKey="cantidad" 
            name="No Conformidades"
            radius={[4, 4, 0, 0]}
          >
            {datosNoConformidades.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>

      {/* Leyenda personalizada */}
      <div className="leyenda-no-conformidades">
        {datosNoConformidades.map((item, index) => (
          <div key={index} className="leyenda-item">
            <div 
              className="leyenda-color" 
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            ></div>
            <span className="leyenda-texto">{item.tipo}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GraficoNoConformidades;