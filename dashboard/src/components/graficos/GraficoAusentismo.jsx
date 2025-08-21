import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import './GraficoAusentismo.css';

const GraficoAusentismo = ({ data, stats }) => {
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
          <p style={{ color: '#ff4d4f', margin: '4px 0' }}>
            Ausentismo: <strong>{semanaData?.ausentismo}%</strong>
          </p>
          <p style={{ color: '#666', fontSize: '0.9rem', margin: '4px 0' }}>
            {semanaData?.ausencias} ausencias de {stats.totalEmpleados} empleados
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grafico-ausentismo-container">
      <h3 className="titulo-ausentismo">Tasa de Ausentismo por Semana</h3>

      <div className="stats-ausentismo">
        <div className="stat-card-ausentismo">
          <div className="stat-title-ausentismo">Promedio</div>
          <div className="stat-value-ausentismo stat-ausentismo-value">{stats.promedioAusentismo}%</div>
          <div className="stat-subtitle-ausentismo">Últimas {stats.totalSemanas} semanas</div>
        </div>
        
        <div className="stat-card-ausentismo">
          <div className="stat-title-ausentismo">Meta</div>
          <div className="stat-value-ausentismo stat-meta-ausentismo">{data[0]?.meta || 7}%</div>
          <div className="stat-subtitle-ausentismo">Máximo aceptable</div>
        </div>
        
        <div className="stat-card-ausentismo">
          <div className="stat-title-ausentismo">Total Empleados</div>
          <div className="stat-value-ausentismo">{stats.totalEmpleados}</div>
          <div className="stat-subtitle-ausentismo">Plantilla actual</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="semana" />
          <YAxis label={{ value: 'Ausentismo (%)', angle: -90, position: 'insideLeft' }} />
          <Tooltip content={<CustomTooltip />} />
          
          <Bar dataKey="ausentismo" name="Ausentismo" fill="#ff4d4f" radius={[4, 4, 0, 0]} />
          <ReferenceLine y={data[0]?.meta} stroke="#52c41a" strokeDasharray="3 3" />
        </BarChart>
      </ResponsiveContainer>

      <div className="leyenda-ausentismo">
        <div className="leyenda-item-ausentismo">
          <div className="leyenda-color-ausentismo leyenda-ausentismo-color"></div>
          <span>Ausentismo (%)</span>
        </div>
        <div className="leyenda-item-ausentismo">
          <div className="leyenda-color-ausentismo leyenda-meta-ausentismo"></div>
          <span>Meta máxima</span>
        </div>
      </div>
    </div>
  );
};

export default GraficoAusentismo;