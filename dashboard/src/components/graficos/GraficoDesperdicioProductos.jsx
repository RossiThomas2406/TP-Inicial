import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from 'recharts';
import './GraficoDesperdicioProductos.css';

const GraficoDesperdicioProductos = ({ data }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [activeProduct, setActiveProduct] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    // Handler que setea el estado según el match
    const handleChange = (e) => setIsMobile(e.matches);

    // Escuchar cambios
    mediaQuery.addEventListener('change', handleChange);

    // Inicializar correctamente
    setIsMobile(mediaQuery.matches);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  // Colores según tendencia
  const getColor = (tendencia) => {
    switch (tendencia) {
      case 'estable': return '#82CA9D';
      case 'alerta': return '#FFC154';
      case 'critica': return '#CC493D';
      default: return '#9E9E9E';
    }
  };

  // Tooltip
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const d = payload[0].payload;
      return (
        <div className="custom-tooltip">
          <h3>{d.producto}</h3>
          <p style={{ color: getColor(d.tendencia) }}>
            Desperdicio: <strong>{d.desperdicio}%</strong>
          </p>
          <p>Tendencia: <strong>{d.tendencia.toUpperCase()}</strong></p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grafico-desperdicio-container">
      <div className="header-section">
        <h2 className="titulo">Desperdicio por Producto</h2>
      </div>

      <div className="separator"></div>

      {isMobile ? (
        // ✅ Vista tabla para pantallas chicas
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
              <span
                className="desperdicio-valor"
                style={{ color: getColor(item.tendencia) }}
              >
                {item.desperdicio}%
              </span>
            </div>
          ))}
        </div>
      ) : (
        // ✅ Vista gráfico para pantallas grandes
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} layout="vertical" barSize={30}>
              <CartesianGrid strokeDasharray="3 3" horizontal vertical={false} />
              <XAxis type="number" domain={[0, 8.2]} ticks={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />
              <YAxis dataKey="producto" type="category" tick={{ fontSize: 14 }} width={140} />
              <Tooltip content={<CustomTooltip />} />
              <Bar
                dataKey="desperdicio"
                radius={[0, 4, 4, 0]}
                onMouseEnter={(_, index) => setActiveProduct(index)}
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
                <LabelList dataKey="desperdicio" position="right" formatter={(v) => `${v}%`} fill="#333" fontSize={12} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      <div className="leyenda-cumplimiento">
        <div className="leyenda-item-cumplimiento">
          <div className="leyenda-color-cumplimiento leyenda-estable"></div>
          <span>Estable</span>
        </div>
        <div className="leyenda-item-cumplimiento">
          <div className="leyenda-color-cumplimiento leyenda-alerta"></div>
          <span>Alerta</span>
        </div>
        <div className="leyenda-item-cumplimiento">
          <div className="leyenda-color-cumplimiento leyenda-critica"></div>
          <span>Crítica</span>
        </div>
      </div>
    </div>
  );
};

export default GraficoDesperdicioProductos;
