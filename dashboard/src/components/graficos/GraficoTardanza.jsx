import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import './GraficoTardanza.css';

const GraficoTardanza = ({ data, stats }) => {
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const semanaData = data.find(item => item.semana === label);
      return (
        <div style={{
          backgroundColor: 'white',
          padding: '12px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}>
          <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>{label}</p>
          <p style={{ color: '#faad14', margin: '4px 0' }}>
            Tardanza: <strong>{semanaData?.tardanza} min</strong>
          </p>
          <p style={{ color: '#666', fontSize: '0.9rem', margin: '4px 0' }}>
            {semanaData?.tardanzas} tardanzas registradas
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grafico-tardanza-container">
      <h3 className="titulo-tardanza">Tardanza Promedio por Semana</h3>

      <div className="stats-tardanza">
        <div className="stat-card-tardanza">
          <div className="stat-title-tardanza">Promedio</div>
          <div className="stat-value-tardanza stat-tardanza-value">{stats.promedioTardanza} min</div>
          <div className="stat-subtitle-tardanza">Últimas {stats.totalSemanas} semanas</div>
        </div>
        
        <div className="stat-card-tardanza">
          <div className="stat-title-tardanza">Meta</div>
          <div className="stat-value-tardanza stat-meta-tardanza">{data[0]?.meta || 10} min</div>
          <div className="stat-subtitle-tardanza">Máximo aceptable</div>
        </div>
        
        <div className="stat-card-tardanza">
          <div className="stat-title-tardanza">Total Empleados</div>
          <div className="stat-value-tardanza">{stats.totalEmpleados}</div>
          <div className="stat-subtitle-tardanza">Plantilla actual</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="semana" />
          <YAxis label={{ value: 'Tardanza (minutos)', angle: -90, position: 'insideLeft' }} />
          <Tooltip content={<CustomTooltip />} />
          
          <Bar dataKey="tardanza" name="Tardanza" fill="#faad14" radius={[4, 4, 0, 0]} />
          <ReferenceLine y={data[0]?.meta} stroke="#52c41a" strokeDasharray="3 3" />
        </BarChart>
      </ResponsiveContainer>

      <div className="leyenda-tardanza">
        <div className="leyenda-item-tardanza">
          <div className="leyenda-color-tardanza leyenda-tardanza-color"></div>
          <span>Tardanza Promedio (min)</span>
        </div>
        <div className="leyenda-item-tardanza">
          <div className="leyenda-color-tardanza leyenda-meta-tardanza"></div>
          <span>Meta máxima</span>
        </div>
      </div>
    </div>
  );
};

export default GraficoTardanza;