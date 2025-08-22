import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import './GraficoDesperdicioProductos.css'; // Asegúrate de tener estilos adecuados

const GraficoDesperdicioProductos = ({data}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Colores según la tendencia
  const getColor = (tendencia) => {
    switch(tendencia) {
      case 'estable': return '#4CAF50';
      case 'alerta': return '#FF9800';
      case 'critica': return '#F44336';
      default: return '#9E9E9E';
    }
  };

  // Tooltip personalizado
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <h3>{data.producto}</h3>
          <p style={{ color: getColor(data.tendencia) }}>
            Desperdicio: <strong>{data.desperdicio}%</strong>
          </p>
          <p>Tendencia: <strong>{data.tendencia.toUpperCase()}</strong></p>
        </div>
      );
    }
    return null;
  };

  // Calcular estadísticas
  const promedioDesperdicio = (data.reduce((acc, item) => acc + item.desperdicio, 0) / data.length).toFixed(1);
  const maxDesperdicio = Math.max(...data.map(item => item.desperdicio));
  const minDesperdicio = Math.min(...data.map(item => item.desperdicio));

  return (
    <div className="grafico-desperdicio-container">
      <div className="header-section">
        <h2 className="titulo-principal">Desperdicio por Producto</h2>
        <p className="subtitulo">Porcentaje de desperdicio en la producción</p>
      </div>
      
      {/* Estadísticas resumen */}
      <div className="estadisticas-resumen">
        <div className="stat-card">
          <div className="stat-valor">{promedioDesperdicio}%</div>
          <div className="stat-label">Promedio</div>
        </div>
        <div className="stat-card">
          <div className="stat-valor">{maxDesperdicio}%</div>
          <div className="stat-label">Máximo</div>
        </div>
        <div className="stat-card">
          <div className="stat-valor">{minDesperdicio}%</div>
          <div className="stat-label">Mínimo</div>
        </div>
      </div>

      <div className="separator"></div>

      {/* Gráfico o tabla según el tamaño de pantalla */}
      {isMobile ? (
        <div className="tabla-desperdicio">
          {data.map((item, index) => (
            <div 
              key={index} 
              className="tabla-fila"
              onMouseEnter={() => setActiveProduct(index)}
              onMouseLeave={() => setActiveProduct(null)}
              style={{ 
                backgroundColor: activeProduct === index ? '#f5f5f5' : 'white',
                borderLeft: `5px solid ${getColor(item.tendencia)}`
              }}
            >
              <span className="producto-nombre">{item.producto}</span>
              <span className="desperdicio-valor" style={{ color: getColor(item.tendencia) }}>
                {item.desperdicio}%
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              layout="vertical"
              barSize={30}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis 
                type="number" 
                domain={[0, 8.2]}
                ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
              />
              <YAxis 
                dataKey="producto" 
                type="category" 
                tick={{ fontSize: 14 }}
                width={140}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="desperdicio" 
                name="Desperdicio"
                radius={[0, 4, 4, 0]}
                onMouseEnter={(data, index) => setActiveProduct(index)}
                onMouseLeave={() => setActiveProduct(null)}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={getColor(entry.tendencia)}
                    stroke={activeProduct === index ? '#333' : null}
                    strokeWidth={activeProduct === index ? 2 : 0}
                  />
                ))}
                <LabelList 
                  dataKey="desperdicio" 
                  position="right" 
                  formatter={(value) => `${value}%`}
                  fill="#333"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="separator"></div>

      {/* Leyenda */}
      <div className="leyenda">
        <div className="leyenda-titulo">Leyenda de Tendencia:</div>
        <div className="leyenda-items">
          <div className="leyenda-item">
            <div className="leyenda-color" style={{ backgroundColor: '#4CAF50' }}></div>
            <span>Estable</span>
          </div>
          <div className="leyenda-item">
            <div className="leyenda-color" style={{ backgroundColor: '#FF9800' }}></div>
            <span>Alerta</span>
          </div>
          <div className="leyenda-item">
            <div className="leyenda-color" style={{ backgroundColor: '#F44336' }}></div>
            <span>Crítica</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraficoDesperdicioProductos;