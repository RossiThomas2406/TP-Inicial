import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Cell } from 'recharts';
import './GraficoDesperdicioProductos.css';

const GraficoDesperdicioProductos = ({ data}) => {
  // Calcular estadísticas generales
  const promedioGeneral = data.reduce((acc, item) => acc + item.desperdicio, 0) / data.length;
  const maxDesperdicio = Math.max(...data.map(item => item.desperdicio));
  const productosSobreMeta = data.filter(item => item.desperdicio > item.meta).length;
    const colores = {
        baja: '#52c41a',      // Por debajo de meta
        estable: '#faad14',   // Cerca de meta
        alerta: '#ff7a45',    // Por encima de meta
        critica: '#f5222d'    // Muy por encima de meta
    };

  // Custom Tooltip
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="custom-tooltip" style={{
          backgroundColor: 'white',
          padding: '15px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
        }}>
          <p style={{ fontWeight: 'bold', marginBottom: '10px', fontSize: '1.1rem' }}>
            {label}
          </p>
          <p style={{ color: '#333', margin: '5px 0' }}>
            Desperdicio: <strong style={{ color: colores[item.tendencia] }}>{item.desperdicio}%</strong>
          </p>
          <p style={{ color: '#666', margin: '5px 0' }}>
            Meta: <strong>{item.meta}%</strong>
          </p>
          <p style={{ color: '#888', margin: '5px 0', fontSize: '0.9rem' }}>
            Estado: {item.tendencia.toUpperCase()}
          </p>
          <p style={{ 
            color: item.desperdicio <= item.meta ? '#52c41a' : '#f5222d',
            fontWeight: 'bold',
            margin: '5px 0'
          }}>
            {item.desperdicio <= item.meta ? '✅ Dentro de meta' : '❌ Fuera de meta'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grafico-desperdicio-container">
      <h3 className="titulo-desperdicio">Desperdicio por Producto (%)</h3>

      {/* Estadísticas generales */}
      <div className="stats-header">
        <div className="stat-card">
          <div className="stat-title">Promedio General</div>
          <div className="stat-value stat-promedio">{promedioGeneral.toFixed(1)}%</div>
          <div className="stat-subtitle">Todos los productos</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-title">Máximo Desperdicio</div>
          <div className="stat-value stat-maximo">{maxDesperdicio}%</div>
          <div className="stat-subtitle">Producto más crítico</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-title">Fuera de Meta</div>
          <div className="stat-value" style={{ color: productosSobreMeta > 0 ? '#f5222d' : '#52c41a' }}>
            {productosSobreMeta}
          </div>
          <div className="stat-subtitle">Productos sobre meta</div>
        </div>
      </div>

      {/* Gráfico de barras */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 60, bottom: 40 }}
          layout="vertical"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            type="number" 
            domain={[0, 'dataMax + 2']}
            tickFormatter={(value) => `${value}%`}
            label={{ value: 'Porcentaje de Desperdicio', position: 'insideBottom', offset: -5 }}
          />
          <YAxis 
            dataKey="producto" 
            type="category" 
            width={120}
            tick={{ fontSize: 12 }}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Barras de desperdicio */}
          <Bar dataKey="desperdicio" name="Desperdicio" radius={[0, 4, 4, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colores[entry.tendencia]} />
            ))}
          </Bar>

          {/* Líneas de meta individuales por producto */}
          {data.map((item, index) => (
            <ReferenceLine 
              key={`meta-${index}`}
              x={item.meta}
              stroke="#52c41a"
              strokeDasharray="3 3"
              strokeWidth={1.5}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>

      {/* Leyenda de estados */}
      <div className="leyenda-estados">
        <div className="leyenda-item">
          <div className="leyenda-color estado-baja"></div>
          <span>Bajo (Por debajo de meta)</span>
        </div>
        <div className="leyenda-item">
          <div className="leyenda-color estado-estable"></div>
          <span>Estable (Cerca de meta)</span>
        </div>
        <div className="leyenda-item">
          <div className="leyenda-color estado-alerta"></div>
          <span>Alerta (Por encima de meta)</span>
        </div>
        <div className="leyenda-item">
          <div className="leyenda-color estado-critica"></div>
          <span>Crítico (Muy por encima)</span>
        </div>
      </div>
    </div>
  );
};

export default GraficoDesperdicioProductos;