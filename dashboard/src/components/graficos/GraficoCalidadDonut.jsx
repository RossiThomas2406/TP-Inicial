import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import './GraficoCalidadDonut.css';

const GraficoCalidadDonut = ({ data }) => {
    // Preparar datos para el gráfico de donut
    const donutData = [
        { name: 'Conformes', value: data.conformes, porcentaje: ((data.conformes / data.totalControles) * 100).toFixed(1) },
        { name: 'No Conformes', value: data.noConformes, porcentaje: data.tasaNoConformidad }
    ];

    const colores = {
    conformes: '#52c41a',
    noConformes: '#f5222d',
    meta: '#faad14'
    };

  // Custom Tooltip para el donut
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{
          backgroundColor: 'white',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <p style={{ fontWeight: 'bold', color: payload[0].payload.name === 'Conformes' ? '#52c41a' : '#f5222d' }}>
            {payload[0].payload.name}
          </p>
          <p>Cantidad: {payload[0].value}</p>
          <p>Porcentaje: {payload[0].payload.porcentaje}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grafico-calidad-container">
      <h3 className="titulo-calidad">Control de Calidad - No Conformidades</h3>

      {/* Estadísticas generales */}
      <div className="stats-calidad">
        <div className="stat-card-calidad">
          <div className="stat-title-calidad">Total Controles</div>
          <div className="stat-value-calidad">{data.totalControles}</div>
          <div className="stat-subtitle-calidad">Realizados</div>
        </div>
        
        <div className="stat-card-calidad">
          <div className="stat-title-calidad">Conformes</div>
          <div className="stat-value-calidad stat-conforme">{data.conformes}</div>
          <div className="stat-subtitle-calidad">Productos OK</div>
        </div>
        
        <div className="stat-card-calidad">
          <div className="stat-title-calidad">No Conformes</div>
          <div className="stat-value-calidad stat-no-conforme">{data.noConformes}</div>
          <div className="stat-subtitle-calidad">Productos con issues</div>
        </div>
        
        <div className="stat-card-calidad">
          <div className="stat-title-calidad">Tasa NC</div>
          <div className="stat-value-calidad" style={{ color: data.tasaNoConformidad <= data.meta ? '#52c41a' : '#f5222d' }}>
            {data.tasaNoConformidad}%
          </div>
          <div className="stat-subtitle-calidad">Meta: {data.meta}%</div>
        </div>
      </div>

      {/* Gráfico de donut y detalles */}
      <div className="chart-container">
        <div className="donut-container">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={donutData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                startAngle={90}
                endAngle={-270}
              >
                {donutData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.name === 'Conformes' ? colores.conformes : colores.noConformes} 
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="donut-center">
            <div className="donut-value">{data.tasaNoConformidad}%</div>
            <div className="donut-label">No Conformes</div>
          </div>
        </div>

        {/* Detalles de no conformidades */}
        <div className="detalles-container">
          <div className="detalles-title">Tipos de No Conformidades</div>
          {data.detallesNoConformes.map((item, index) => (
            <div key={index} className="detalle-item">
              <span className="detalle-tipo">{item.tipo}</span>
              <div className="detalle-bar">
                <div 
                  className="detalle-bar-fill" 
                  style={{ width: `${item.porcentaje}%` }}
                ></div>
              </div>
              <span className="detalle-valor">{item.porcentaje}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Leyenda */}
      <div className="leyenda-calidad">
        <div className="leyenda-item-calidad">
          <div className="leyenda-color-calidad leyenda-conforme"></div>
          <span>Conformes (OK)</span>
        </div>
        <div className="leyenda-item-calidad">
          <div className="leyenda-color-calidad leyenda-no-conforme"></div>
          <span>No Conformes</span>
        </div>
        <div className="leyenda-item-calidad">
          <div className="leyenda-color-calidad leyenda-meta"></div>
          <span>Meta: {data.meta}% máximo</span>
        </div>
      </div>
    </div>
  );
};

export default GraficoCalidadDonut;